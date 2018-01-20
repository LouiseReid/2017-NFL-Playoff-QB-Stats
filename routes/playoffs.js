var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  res.json([{
    id: 1,
    round: "wildcard afc",
    home: "Chiefs 21",
    away: "22 Titans",
    homeImage: "http://i.nflcdn.com/static/site/7.5/img/teams/KC/KC_logo-80x90.gif",
    awayImage: "http://i.nflcdn.com/static/site/7.5/img/teams/TEN/TEN_logo-80x90.gif",
    homeSeed: "4th seed",
    awaySeed: "5th seed"
  },
  {
    id: 2,
    round: "wildcard afc",
    home: "Jaguars 10",
    away: "3 Bills",
    homeImage: "http://i.nflcdn.com/static/site/7.5/img/teams/JAX/JAX_logo-80x90.gif",
    awayImage: "http://i.nflcdn.com/static/site/7.5/img/teams/BUF/BUF_logo-80x90.gif",
    homeSeed: "3th seed",
    awaySeed: "6th seed"
  },
  {
    id: 3,
    round: "divisional afc",
    home: "Patriots 35",
    away: "14 Titans",
    homeImage: "http://i.nflcdn.com/static/site/7.5/img/teams/NE/NE_logo-80x90.gif",
    awayImage: "http://i.nflcdn.com/static/site/7.5/img/teams/TEN/TEN_logo-80x90.gif",
    homeSeed: "1st seed",
    awaySeed: "5th seed"
  },
  {
    id: 4,
    round: "divisional afc",
    home: "Steelers 42",
    away: "45 Jaguars",
    homeImage: "http://i.nflcdn.com/static/site/7.5/img/teams/PIT/PIT_logo-80x90.gif",
    awayImage: "http://i.nflcdn.com/static/site/7.5/img/teams/JAX/JAX_logo-80x90.gif",
    homeSeed: "2nd seed",
    awaySeed: "3rd seed"
  },
  {
    id: 5,
    round: "championship afc",
    home: "Patriots ",
    away: " Jaguars",
    homeImage: "http://i.nflcdn.com/static/site/7.5/img/teams/NE/NE_logo-80x90.gif",
    awayImage: "http://i.nflcdn.com/static/site/7.5/img/teams/JAX/JAX_logo-80x90.gif",
    homeSeed: "1st seed",
    awaySeed: "3rd seed"
  }])

});

module.exports = router;
