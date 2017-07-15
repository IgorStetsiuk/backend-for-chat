/**
 * Created by Igor on 14.07.2017.
 */
const db = require('../db');



function getAllUsers(callback) {
    db.get().collection('users').find().toArray(function (err, docs) {
        callback(err, docs)
    })
}
function getUserById(userId, callback) {
    db.get().collection('users').findOne({user_id: userId}, (err, docs) => {
        callback(err, docs);
    })
}
function createUser(user, callback) {
    db.get().collection('users').insertOne(user, function (err, docs) {
        callback(err, docs)
    })
};

function updateUserById(userId, updatedUser,callback) {
    db.get().collection('users').updateOne({user_id: userId}, updatedUser,(err, docs) => {
        callback(err, docs);
    })
}

function deleteUserById(userId, callback) {
    db.get().collection('users').removeOne({user_id: userId}, function (err, docs) {
        callback(err, docs)
    })
}

module.exports = {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    createUser: createUser,
    updateUserById: updateUserById,
    deleteUserById: deleteUserById
};