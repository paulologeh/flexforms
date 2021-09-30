import os
import uuid
import time
import logging
import configparser
from flask_restful import Resource, reqparse
from db import add_form


# CONFIG SETUP
config_path = os.path.dirname(__file__) + '/../config.ini'
config = configparser.ConfigParser()
config.read(config_path)
logger = logging.getLogger(__name__)


class SavedForms(Resource):
    def __init__(self) -> None:
        self.req_parse = reqparse.RequestParser()
        super().__init__()

    def get(self, key):
        pass
    
    def post(self, key):
        self.req_parse.add_argument('title', type=str, required=True)
        self.req_parse.add_argument('date', type=int, required=True)
        self.req_parse.add_argument('expiry', type=int, required=True)
        self.req_parse.add_argument('owner', type=str, required=True)
        self.req_parse.add_argument('email', type=str, required=True)
        self.req_parse.add_argument('form_obj', type=list, location="json", required=True)

        self.args = self.req_parse.parse_args()
        self.args["edit_key"] = str(uuid.uuid4())
        self.args["uuid"] = str(uuid.uuid4())

        try:
            add_form(self.args)
            edit_key = self.args["edit_key"]
            viewer_key = self.args["uuid"]
            time.sleep(3)
            return {
                'message': 'Created',
                'editor_link': f"http://localhost:5000/api/v1/savedforms/{edit_key}",
                'viewer_link': f"http://localhost:5000/api/v1/savedforms/{viewer_key}",
                'response_link': f"http://localhost:5000/api/v1/filledforms/{edit_key}",
                }, 201
        except Exception as e:
            return {'error': str(e)}, 409


    def put(self, key):
        pass

    def delete(self, key):
        pass



class FilledForms(Resource):
    def __init__(self) -> None:
        super().__init__()

    def get():
        pass

    def post():
        pass