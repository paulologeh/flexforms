import os
import uuid
import time
import logging
import configparser
from flask_restful import Resource, reqparse
from db import add_form, get_form
from .utils import send_email



# CONFIG SETUP
config_path = os.path.dirname(__file__) + '/../config.ini'
config = configparser.ConfigParser()
config.read(config_path)
logger = logging.getLogger(__name__)


class SavedForms(Resource):
    def __init__(self) -> None:
        self.req_parse = reqparse.RequestParser()
        super().__init__()

    def get(self) -> dict:
        self.req_parse.add_argument('uuid', type=str, required=True)
        self.args = self.req_parse.parse_args()

        if not self.args["uuid"]:
            return {'error':'invalid arg'}, 404

        try:
            results = list(get_form(self.args["uuid"]))
            print(results)
            if len (results) == 1:
                response = results[0]
                del response["_id"]
                return results[0], 200
            else:
                return {'error': 'internal server error'}, 500
        except Exception as e:
             return {'error': str(e)}, 409

    
    def post(self) -> dict:
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
       
            editor_link = f"http://localhost:3000/formeditor?uuid={edit_key}"
            viewer_link = f"http://localhost:3000/formviewer?uuid={viewer_key}"
            response_link = f"http://localhost:3000/formresponse/{edit_key}"
            sender = "paulologeh@outlook.com"
            recipient = self.args["email"]
            message = f"""
            <p>
            Hi {self.args["owner"]},<br></br>
            Your form has been successfully published.<br></br>
            People can view the form using the viewer link and you can make
            changes to the forms using the editor link.<br></br>
            You can view your responses to the form in the response link.<br></br>
            This form will expire in 7 days and all links will stop working
            after this.<br></br><br></br>
            Viewer Link: {viewer_link}<br></br>
            Editor Link: {editor_link}<br></br>
            Response Link: {response_link}<br></br><br></br>
            Kind Regards,<br></br>
            Flex Forms Team
            </p>
            """
            subject = "Your Form has been published"
            if send_email(sender, recipient, message, subject):
                logger.debug("Email Sent")
            else:
                logger.debug("Email Not Sent")

            return {
                'message': 'Created',
                'editor_link': editor_link,
                'viewer_link': viewer_link,
                'response_link': response_link ,
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