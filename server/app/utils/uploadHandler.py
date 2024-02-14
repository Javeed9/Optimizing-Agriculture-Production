from flask import request

def handle_file_upload():
    if request.method == 'POST':
        file = request.files['file']
        if file:
            try:
                file.save('/path/to/save/uploads/' + 'data.csv')
                return 'File uploaded successfully!'
            except Exception as e:
                raise FileUploadError('Error saving file') from e
    raise FileUploadError('No file uploaded')