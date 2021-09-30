import pymongo
import configparser
import logging


# CONFIG SETUP
config = configparser.ConfigParser()
config.read('config.ini')
logger = logging.getLogger(__name__)


def get_db():
    db_host = config.get('DATABASE', 'HOST')
    db_port = config.get('DATABASE', 'PORT')
    db_client = pymongo.MongoClient("mongodb://{}:{}/".format(db_host, db_port))
    return db_client


db_client = get_db()


def add_form(kwargs):
    """
    Inserts a form into the forms collection, with the following fields:
    - "form_obj"
    - "title"
    - "date"
    - "expiry"
    - "ownerr"
    - "email"
    - "uid"
    """
    logger.debug("Received input form: %s", kwargs)
    form_doc = {}
    for key in kwargs.keys():
        form_doc[key] = kwargs[key]

    logger.debug("Adding form %s", form_doc)
    db = db_client["flexforms"]
    doc_ref = db["saved_forms"]
    return doc_ref.insert_one(form_doc)
