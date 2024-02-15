# Flask Application Setup

This guide will help you set up the environment, install the required dependencies, and run the Flask application.

## Environment Setup

**Python Installation**: Make sure you have Python installed on your system. You can download it from the [official Python website](https://www.python.org/downloads/).

### choose one for step 2
**1_1 Virtual Environment (Optional but Recommended)**: It's recommended to use a virtual environment to isolate your project dependencies. Install `virtualenv` if you haven't already:

```bash
pip install virtualenv
```

**1_2 Create Virtual Environment**: Use Python's built-in `venv` module to create a new virtual environment for your Flask project:

```bash
python -m venv venv
```

**2_1 Create Virtual Environment**: Create a new virtual environment for your Flask project:

```bash
virtualenv venv
```

**Activate Virtual Environment**: Activate the virtual environment:

- **Windows**:

```bash
venv\Scripts\activate
```

- **Unix or MacOS**:

```bash
source venv/bin/activate
```

## Install Requirements

Once you have set up the environment, install the required dependencies:

```bash
pip install -r requirements.txt
```

Run the Flask Application

To run the Flask application, execute the following command:

bash

python app.py

This will start the Flask development server, and your application will be accessible at http://127.0.0.1:5000/ by default.