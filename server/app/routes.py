from app import app
from app.utils.uploadHandler import handle_file_upload
from app.main import predict
from flask import request

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/upload', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        try:
            result = handle_file_upload()
            return result
        except FileUploadError as e:
            return str(e), 400
    return 'Only Post methods are allowed'

@app.route('/result', methods=['GET'])
def result():
    if request.method == 'GET':
        try:
            result = predict()
            return result
        except predictError as e:
            return str(e), 400
    return 'Only GET methods are allowed'