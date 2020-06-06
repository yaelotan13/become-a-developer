const topicsResponse = require('../response/topics');
const catalogResponse = require('../response/catalog');

function register(app) {
    app.get('/topics', topicsResponse.getTopics);
    app.get('/catalog', catalogResponse.getTopicInfo);
}

module.exports = {
    register: register
}