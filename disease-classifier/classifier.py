import csv
import numpy as np
import pandas as pd
from collections import defaultdict
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
data= pd.read_csv("datasets/Training.csv")
df= pd.DataFrame(data)
cols= df.columns
cols=cols[:-1]
x=df[cols]
y= df['prognosis']
x_train,x_test,y_train,y_test= train_test_split(x,y,test_size=0.33,random_state=42)
mnb= MultinomialNB()
mnb.fit(x_train,y_train)

##the following code is for after the disease has been predicted
data1= pd.read_csv("datasets/MANUAL SET complete - Sheet1.csv")
data= pd.DataFrame(data1)
data=data.drop(['Unnamed: 1', 'Unnamed: 2', 'Unnamed: 3','Unnamed: 5', 'Unnamed: 6', 'Unnamed: 7', 'Unnamed: 8', 'Unnamed: 9','Unnamed: 10', 'Unnamed: 11', 'Unnamed: 12', 'Unnamed: 13','Unnamed: 14'],axis=1)
data=data.drop([0])
data3=data.set_index('DISEASE')

'''
## predicting module
sample_x=[]
disease1=mnb.predict([sample_x])
disease= disease1[0]
'''
## disease predicted has been stored and passed in below line...
## disease_values= data3.loc[disease].values
## link_internet= disease_values[0]
## specalist = disease_values[1]
'''
##for testing the test data
test_data= pd.read_csv("datasets/Testing.csv")
testx= test_data[cols]
testy= test_data['prognosis']
print(mnb.score(testx,testy))
'''

'''
##for checking if the module works
## checking at row number 4005
row1= df.loc[[4005]]
cols_abc= row1.columns
cols_abc= cols_abc[:-1]
sample1=[]
for i in range(len(cols_abc)):
    sample1.append(row1.iloc[0][cols_abc[i]])
mnb.predict(sample1)
'''



