import flask
from flask_restful import Api, Resource

from readmail import ReadMail

app = flask.Flask(__name__)
api = Api(app)



api.add_resource(ReadMail,'/mail/list',endpoint="mail")
app.run()
