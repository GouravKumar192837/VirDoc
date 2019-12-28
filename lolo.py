import csv
import numpy as np
import pandas as pd
from collections import defaultdict
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
import json
from flask import Flask, request, jsonify
app = Flask(__name__)
@app.route('/' , methods=['POST'])
def predict():
    data_json_temp = request.get_json()
    data_json_string = data_json_temp['symp']
    arr_json_string = data_json_string.split(';')
    data = pd.read_csv("C:\\Users\\hp\\Desktop\\vir doc api\\Training.csv")
    df = pd.DataFrame(data)
    cols = df.columns
    cols = cols[:-1]
    x = df[cols]
    y = df['prognosis']
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.33, random_state=42)
    mnb = MultinomialNB()
    mnb.fit(x_train, y_train)
    data1 = pd.read_csv("C:\\Users\\hp\\Desktop\\vir doc api\\MANUAL SET complete - Sheet1.csv")
    data = pd.DataFrame(data1)
    data = data.drop(['Unnamed: 1', 'Unnamed: 2', 'Unnamed: 3', 'Unnamed: 5', 'Unnamed: 6', 'Unnamed: 7', 'Unnamed: 8', 'Unnamed: 9', 'Unnamed: 10', 'Unnamed: 11', 'Unnamed: 12', 'Unnamed: 13', 'Unnamed: 14'], axis=1)
    data = data.drop([0])
    data = data.replace(to_replace=["Fungal Infection"], value="Fungal infection")
    '''data3 = data.set_index('DISEASE')'''
    data4 = data.set_index('DISEASE')

    sample_x_temp = []
    for i in range(len(cols)):
        if cols[i] in arr_json_string:
            sample_x_temp.append(1)
        else:
            sample_x_temp.append(0)

    sample_x = sample_x_temp
    disease1 = mnb.predict([sample_x])
    disease = disease1[0]

    ## disease predicted has been stored and passed in below line...
    disease_values = data4.loc[disease]
    link_internet = disease_values[0]

    ### the module now converts the results into a JSON file
    results = {'disease': disease, 'link': link_internet, 'specalist': disease_values[1]}
    print(results)
    return jsonify(results)
if __name__ == "__main__":
    app.run(debug=True)
