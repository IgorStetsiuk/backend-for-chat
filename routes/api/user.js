/**
 * Created by Igor on 14.07.2017.
 */
const router = require('express').Router();
let userService = require('../../services/user');


router.get('/', (req, res) => {
    userService.getAllUsers(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});
router.get('/:user_id', (req, res) => {
    userService.getUserById(Number(req.params.user_id), (err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
});

router.post('/', (req, res) => {
    let user = {
        name: req.body.name,
        email: req.body.email,
        user_id: req.body.user_id
    };
    userService.createUser(user, function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(user);
    })
});

router.put('/:user_id', (req, res) => {

    let updatedUser = {
        name:req.body.name,
        email:req.body.email,
        user_id:req.body.user_id
    };
    userService.updateUserById(Number(req.params.user_id), updatedUser,function (err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
});

router.delete('/:user_id', (req, res) => {
    let userId = Number(req.params.user_id);
    userService.deleteUserById(userId, function (err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(200);
    });
});


module.exports = router;


