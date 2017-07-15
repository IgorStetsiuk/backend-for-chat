/**
 * Created by Igor on 15.07.2017.
 */
const db = require('../db');


function getAllMessages(callback) {
    db.get().collection('messages').find().toArray(function (err, docs) {
        callback(err, docs)
    })
}
function getMessageById(messageId, callback) {
    db.get().collection('messages').findOne({message_id: messageId}, (err, docs) => {
        callback(err, docs);
    })
}

function createMessage(message, callback) {
    db.get().collection('messages').insertOne(message, function (err, docs) {
        callback(err, docs)
    })
}

function updateMessageByDate(messageId, updatedPost, callback) {
    db.get().collection('messages').updateOne({message_id: messageId}, updatedPost, (err, docs) => {
        callback(err, docs);
    })
}


function deleteMessageById(messageId, callback) {
    db.get().collection('messages').removeOne({message_id: messageId}, function (err, docs) {
        callback(err, docs)
    })
}
function getReceiversBySenderId(senderId, callback) {
    db.get().collection('messages').find({senderId: senderId}, {receiverId: true}).toArray((err, docs) => {
        callback(err, docs);

    });

}
module.exports = {
    getAllMessages: getAllMessages,
    getMessageById: getMessageById,
    createMessage: createMessage,
    updateMessageByDate: updateMessageByDate,
    deleteMessageById: deleteMessageById,
    getReceiversBySenderId: getReceiversBySenderId
};
