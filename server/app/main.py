import pandas as pd
import numpy as np
import os
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.preprocessing import StandardScaler


def predict():
    data_path = "D:\\Projects\\ML\\Optimizing Agriculture Production\\server\\app\\Files\\data.csv"
    # data_path = os.path.join("files", "data.csv")
    # **Data Cleaning and Preprocessing**

    # Read the data and handle missing values using an appropriate strategy:
    try:
        data = pd.read_csv(data_path)
    except FileNotFoundError:
        print(f"File not found at: {data_path}")
        raise

    try:
        # Fill missing values based on your understanding of the data:
        data = data.fillna(data.mode().iloc[0], inplace=False)

        # Separate features and label:
        y = data["label"]
        x = data.drop("label", axis=1)

        # **Training and Testing Split**

        # Consider increasing test_size based on your dataset and evaluation needs:
        x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=0)

        # **Logistic Regression Model**
        model = LogisticRegression(max_iter=1000, C=1.0, penalty="l2")  # Adjust C as needed

        # Fit the model:
        model.fit(x_train, y_train)

        # **Evaluation and Prediction**

        # Use appropriate metrics and visualizations for your task:
        y_pred = model.predict(x_test)
        cm = confusion_matrix(y_test, y_pred)
        cr = classification_report(y_test, y_pred)

        print("Confusion Matrix:")
        print(cm)
        print("\nClassification Report:")
        print(cr)

        # Prediction example using a copy of original data for safety:
        new_data = pd.DataFrame([[90, 40, 40, 20, 80, 7, 200]], columns=x.columns)  # Example row
        prediction = model.predict(new_data)[0]  # Access the first prediction
        print("\nThe Suggested Crop for Given Climatic Condition is:", prediction)
        return prediction
    except Exception as e:
        raise predictError('Error predicting') from e