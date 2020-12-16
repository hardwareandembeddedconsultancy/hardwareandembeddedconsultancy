import boto3
import email
from flask import jsonify
from flask_restful import Api, Resource
class ReadMail(Resource):
    def get(self):
      session = boto3.Session(aws_access_key_id='AKMI',aws_secret_access_key='',region_name='')
      s3 = session.resource('s3')
      bucket = s3.Bucket('hecmail')
      mails=[]
      for my_bucket_object in bucket.objects.all():
       obj = bucket.Object(key=my_bucket_object.key)
       response = obj.get()
       msg = email.message_from_bytes(response['Body'].read())
       mails.append({"subject":msg['Subject'],"to":msg['To'],"from":msg['From'],"date":msg['Date']})
      return jsonify(mails)