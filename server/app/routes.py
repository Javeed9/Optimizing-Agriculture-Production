from app import app
from app.utils.uploadHandler import handle_file_upload
from app.main import predict
from flask import request

class predictError(Exception):
    """Exception raised for errors during file upload or processing.

    Attributes:
        message -- explanation of the error
    """

    def __init__(self, message="Error during file upload or processing"):
        self.message = message
        super().__init__(self.message)

@app.route('/predict', methods=['POST'])
def result():
    if request.method == 'POST':
        try:
            data = handle_file_upload()
            if data is not None:
                return predict(data)
            return "no data"
        except predictError as e:
            return str(e), 400
    return 'Only Post methods are allowed'