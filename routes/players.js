var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  res.json([{
    id: 1,
    name: "Ben Roethlisberger",
    team: "Pittsburg Steelers",
    image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ROE750381.png",
    passingAttempts: 561,
    completions: 360,
    yards: 4251,
    TDs: 28,
    interceptions: 14,
    firstDownPercentage: 36.9,
    sacked: 21,
    conference: "AFC"
  }])
});

module.exports = router;
