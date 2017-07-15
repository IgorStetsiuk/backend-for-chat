/**
 * Created by Igor on 14.07.2017.
 */
const router = require('express').Router();
const messageService = require('../../services/message');


router.get('/', (req, res) => {
    messageService.getAllMessages(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});
router.post('/', (req, res) => {
    let message = {
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        text: req.body.text,
        message_id: req.body.message_id,
    };
    messageService.createMessage(message, (err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(message);
    });
});

router.put('/:message_id', (req, res) => {
    let updatedPost = {
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        text: req.body.text,
        message_id: req.body.message_id
    };
    messageService.updateMessageByDate(Number(req.params.message_id), updatedPost, function (err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
});
router.delete('/:message_id', (req, res) => {
    let message_id = Number(req.params.message_id);
    messageService.deleteMessageById(message_id, function (err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
});
router.get('/private/:senderId', (req, res) => {
    messageService.getReceiversBySenderId(Number(req.params.senderId), (err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
});
module.exports = router;