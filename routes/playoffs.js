var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  res.json([{
    id: 1,
    round: "wildcard afc",
    home: "Chiefs 21",
    away: "Titans 22",
    homeImage: "http://i.nflcdn.com/static/site/7.5/img/teams/KC/KC_logo-80x90.gif",
    awayImage: "http://i.nflcdn.com/static/site/7.5/img/teams/TEN/TEN_logo-80x90.gif",
    homeSeed: "4th seed",
    awaySeed: "5th seed"
  }])

});

module.exports = router;
