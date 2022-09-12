const express = require('express')
const { getDb, connectToDb } = require('./db')
const { MongoClient,ObjectId } = require('mongodb')



const id = new ObjectId();
// MongoClient.connect('mongodb://localhost:27017/task-manager')
//   .then(client => {
//     dbConnection = client.db()

//     const book = {_id: id, name: 'Naveed', age: 28}

//     dbConnection.collection('users')
//       .insertOne(book)
//       .then(result => {
//         console.log(result);
//       })
//       .catch(err => {
//         console.log(err, 'Could not create new document');
//       })

//   })
//   .catch(err => {
//     console.log(err)
//     return cb(err)
//   })

// MongoClient.connect('mongodb://localhost:27017/task-manager')
//   .then(client => {
//     dbConnection = client.db()

//     dbConnection.collection('tasts')
//       .insertMany([
//         {
//           description: 'Clean the house',
//           completed: true
//         }, {
//           description: 'Renew inspection',
//           completed: false
//         }, {
//           description: 'Pot Plants',
//           completed: false
//         }
//       ], (error, result) => {
//         if (error) {
//           return console.log('Unable to insert tasks!');
//         }
//         console.log(result);
//       })

//   })
//   .catch(err => {
//     console.log(err)
//     return cb(err)
//   })


//READ
MongoClient.connect('mongodb://localhost:27017/task-manager')
  .then(client => {
    dbConnection = client.db()

    dbConnection.collection('users').find({age: 28}).toArray((error, users) => {
      console.log(users);
    })
    
    dbConnection.collection('users').find({age: 28}).count((error, users) => {
      console.log(users);
    })

  })
  .catch(err => {
    console.log(err)
    return cb(err)
  })

