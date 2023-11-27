import os
import logging
import datetime
import configparser
from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from dotenv import load_dotenv
from api.forms import SavedForms, FilledForms

load_dotenv()


config = configparser.ConfigParser()
config.read('config.ini')

logger = logging.getLogger(__name__)

app = Flask(__name__)
app.debug = config.get('APP', 'DEBUG')
app.config['CORS_HEADERS'] = 'Content-Type'
api = Api(app)
CORS(app, resources={'/*': {'origins': ['.*']} })
# API Resource routing
api.add_resource(FilledForms, '/api/v1/filledforms')
api.add_resource(SavedForms, '/api/v1/savedforms')


if __name__ == '__main__':
    app.run(port=config.get('APP', 'PORT'), threaded=True)