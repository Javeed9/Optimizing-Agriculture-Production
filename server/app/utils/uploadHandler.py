from flask import Flask, request
import pandas as pd
import csv
from io import StringIO
import pandas as pd

class FileUploadError(Exception):
    """Exception raised for errors during file upload or processing.

    Attributes:
        message -- explanation of the error
    """

    def __init__(self, message="Error during file upload or processing"):
        self.message = message
        super().__init__(self.message)


def handle_file_upload():
    if request.method == 'POST':
        # Assuming binary data is received in the request
        binary_data = request.data
        
        # Decode binary data into a string
        try:
            data_str = binary_data.decode('utf-8')  # Change encoding as needed
        except UnicodeDecodeError:
            raise FileUploadError('Error decoding binary data')
        
        # Parse the string data into a CSV format
        try:
            csv_data = list(csv.reader(StringIO(data_str)))
        except Exception as e:
            raise FileUploadError('Error parsing CSV data') from e
        
        # Optionally, convert CSV data into a DataFrame
        try:
            df = pd.DataFrame(csv_data[1:], columns=csv_data[0])  # Assuming first row contains headers
        except Exception as e:
            raise FileUploadError('Error converting CSV to DataFrame') from e
        
        return df