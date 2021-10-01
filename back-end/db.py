import os
import logging
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()
logger = logging.getLogger(__name__)


def get_db():
    db_client = MongoClient(os.environ["MONGO_CLIENT"])
    return db_client


db_client = get_db()

def get_form_response(edit_key):
    """
    Get forms responses
    """
    logger.debug("get_form_response %s" % edit_key)
    db = db_client["flexforms"]
    doc_ref = db["filled_forms"]
    return doc_ref.find({'edit_key': edit_key}, {'_id': 0})

def add_form_response(edit_key, data):
    """
    Inserts a form response into the filled_forms collections
    """
    logger.debug("Adding form response %s to %s" % (data, edit_key))
    db = db_client["flexforms"]
    doc_ref = db["filled_forms"]
    form_response = {
        "edit_key": edit_key,
        "data": data
    }
    return doc_ref.insert_one(form_response)

def get_edit_key(uuid):
    db = db_client["flexforms"]
    doc_ref = db["saved_forms"]
    return doc_ref.find({'uuid': uuid}, {"edit_key": 1, '_id': 0})

def add_form(kwargs):
    """
    Inserts a form into the saved_forms collection, with the following fields:
    - "form_obj"
    - "title"
    - "date"
    - "expiry"
    - "ownerr"
    - "email"
    - "uid"
    """
    logger.debug("Received input form: %s" % kwargs)
    form_doc = {}
    for key in kwargs.keys():
        form_doc[key] = kwargs[key]

    logger.debug("Adding form %s", form_doc)
    db = db_client["flexforms"]
    doc_ref = db["saved_forms"]
    return doc_ref.insert_one(form_doc)

def get_form(key):
    """
    Retrieves a form from the saved_forms collection given a uuid
    """
    logger.debug("Received key %s" % key)
    db = db_client["flexforms"]
    doc_ref = db["saved_forms"]
    return doc_ref.find({'uuid': key})