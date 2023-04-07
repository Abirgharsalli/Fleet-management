from flask import Flask, jsonify,request
from requests import session
import pymongo
import json
from bson.objectid import ObjectId
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from flask_cors import CORS


app=Flask (__name__)
#######################################
try :
    mongo = pymongo.MongoClient(
    host = "localhost",
    port = 27017,
    serverSelectionTimeoutMS = 1000
    )
    db = mongo.jihen
    occ1_db=db.sales
    mongo.server_info ( ) # trigger exception if cannot connect to db
except :
    print ( " ERROR - Cannot connect to db " )

bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app)

@app.route('/dash1', methods=['GET'])
def get_dash1():
   dash1 = []
   allData=occ1_db.find()
   
   for data in allData:
        dash1.append({
             
            'Fuel usage L/month': data['Fuel usage L/month'],
            'month': data['Month']
           
        })
   
   print(jsonify(dash1)) 
   print("test")
   return jsonify(dash1)

@app.route('/piechartG', methods=['GET'])
def get_Gender():
   datachart = []
   count_S=0
   count_B=0
   total=get_All()
   count_S=occ1_db.count_documents({"Vehicles":"Small"})
   count_B=occ1_db.count_documents({"Vehicles":"Big"})
   datachart.append({
      'total':total,
      'Small Vehicles': count_S,
      'Big Vehicles': count_B
    })
   
   print(jsonify(datachart)) 
   print("test")
   return jsonify( datachart)

def get_All():
   allData=occ1_db.find()
   count=0
   for data in allData:
        count+=1
   return count


@app.route('/piechartP', methods=['GET'])
def get_Product_Line():
   datachart = []
   total=get_All()
   allData=occ1_db.distinct("Product line")
   for data in allData:
        som=occ1_db.count_documents({"Product line":data})
        datachart.append({
            'total':total,
            'name':data,
            'som': som
            })
   
   print(jsonify(datachart)) 
   return jsonify( datachart)
   

if __name__ == "__main__" :
    app.secret_key = 'super secret key'
    app.config['SESSION_TYPE'] = 'filesystem'

    session.__init__(app)
    app.run ( port = 80 , debug = True )