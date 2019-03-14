var express = require('express');
var router = express.Router();
var mongoDb = require('./mongodb');

/* GET channels page. */
router.get('/list', function (req, res, next) {
  mongoDb.connection().then(function (conn) {
    mongoDb.find(conn).then(function (result) {
      res.status(200).send(result);
    })
      .catch(function (err) {
        console.log(err)
        res.status(500).send(err);
      })
  })
    .catch(function (err) {
      console.log(err)
      res.status(500).send(err);
    });

});

module.exports = router;