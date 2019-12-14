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

'''
## predicting module
sample_x=[]
mnb.predict([sample_x])
'''

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



