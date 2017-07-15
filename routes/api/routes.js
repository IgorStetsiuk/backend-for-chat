/**
 * Created by Igor on 14.07.2017.
 */
const user = require('./user');
const message = require('./message');

module.exports = function (app) {
    app.use('/api/users',user);
    app.use('/api/messages',message)
};