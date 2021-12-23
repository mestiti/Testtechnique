
from flask import Flask, render_template, request, jsonify

from bson.objectid import ObjectId
from flask_cors import CORS

import pymongo

app = Flask(__name__)

CORS(app)

CONNECTION_STRING = "mongodb+srv://root:root@cluster0.lhgjb.mongodb.net/Finances?retryWrites=true&w=majority"

client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('Finances')
user_collection = pymongo.collection.Collection(db, 'Transaction')
@app.route('/')
def index():
    return render_template('home.html')

@app.route('/transactions', methods=['POST', 'GET'])
def data():

    # POST a data to database
    if request.method == 'POST':
        body = request.json

        compte = body['compte']
        montant = body['montant']
        descriptif = body['descriptif']
        date = body['date']
        # db.transaction.insert_one({
        db['Transaction'].insert_one({
             'compte': compte,
                'montant': montant,
                'descriptif': descriptif,
                'date': date
        })
        return jsonify({
            'status': 'Data is posted to MongoDB!',
             'compte': compte,
                'montant': montant,
                'descriptif': descriptif,
                'date': date
        })
    
    # GET all data from database
    if request.method == 'GET':
        allData = db['Transaction'].find()
        dataJson = []
        for data in allData:
            id = data['_id']
            compte = data['compte']
            montant = data['montant']
            descriptif = data['descriptif']
            date = data['date']
            dataDict = {
                'id': str(id),
                'compte': compte,
                'montant': montant,
                'descriptif': descriptif,
                'date': date,

            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)

@app.route('/transactions/<string:id>', methods=['GET', 'DELETE', 'PUT'])
def onedata(id):

    # GET a specific data by id
    if request.method == 'GET':
        data = db['Transaction'].find_one({'_id': ObjectId(id)})
        id = data['_id']
        compte = data['compte']
        montant = data['montant']
        descriptif = data['descriptif']
        date = data['date']
        dataDict = {
            'id': str(id),
            'compte': compte,
            'montant': montant,
            'descriptif': descriptif,
            'date': date,

        }
        print(dataDict)
        return jsonify(dataDict)
        
    # DELETE a data
    if request.method == 'DELETE':
        db['Transaction'].delete_many({'_id': ObjectId(id)})
        print('\n # Deletion successful # \n')
        return jsonify({'status': 'Data id: ' + id + ' is deleted!'})

    # UPDATE a data by id
    if request.method == 'PUT':
        body = request.json
        compte = body['compte']
        montant = body['montant']
        descriptif = body['descriptif']
        date = body['date']

        db['Transaction'].update_one(
            {'_id': ObjectId(id)},
            {
                "$set": {
                    'compte': compte,
                    'montant': montant,
                    'descriptif': descriptif,
                    'date': date
                }
            }
        )

        print('\n # Update successful # \n')
        return jsonify({'status': 'Data id: ' + id + ' is updated!'})

if __name__ == '__main__':
    app.debug = True
    app.run()