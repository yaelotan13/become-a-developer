const catalogMock = require('../data/catalog');

const getTopicInfo = (req, res) => {
    console.log('[GET] /catalog');
    console.log(req.query);
    console.log('[OK] 200');

    const response = catalogMock.getCatalogInfo(req.query.id);
    
    return res.status(200).send(response);
}

module.exports = {
    getTopicInfo
}