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
    home: "Patriots 24",
    away: "20 Jaguars",
    homeImage: "http://i.nflcdn.com/static/site/7.5/img/teams/NE/NE_logo-80x90.gif",
    awayImage: "http://i.nflcdn.com/static/site/7.5/img/teams/JAX/JAX_logo-80x90.gif",
    homeSeed: "1st seed",
    awaySeed: "3rd seed"
  },
  {
    id: 6,
    round: "championship nfc",
    home: "Eagles 38",
    away: "7 Vikings",
    homeImage: "http://i.nflcdn.com/static/site/7.5/img/teams/PHI/PHI_logo-80x90.gif",
    awayImage: "http://i.nflcdn.com/static/site/7.5/img/teams/MIN/MIN_logo-80x90.gif",
    homeSeed: "1st seed",
    awaySeed: "2nd seed"
  },
  {
    id: 7,
    round: "divisional nfc",
    home: "Eagles 15",
    away: "10 Falcons",
    homeImage: "http://i.nflcdn.com/static/site/7.5/img/teams/PHI/PHI_logo-80x90.gif",
    awayImage: "http://i.nflcdn.com/static/site/7.5/img/teams/ATL/ATL_logo-80x90.gif",
    homeSeed: "1st seed",
    awaySeed: "6th seed"
  },
  {
    id: 8,
    round: "divisional nfc",
    home: "Vikings 29",
    away: "24 Saints",
    homeImage: "http://i.nflcdn.com/static/site/7.5/img/teams/MIN/MIN_logo-80x90.gif",
    awayImage: "http://i.nflcdn.com/static/site/7.5/img/teams/NO/NO_logo-80x90.gif",
    homeSeed: "2nd seed",
    awaySeed: "4th seed"
  },
  {
    id: 9,
    round: "wildcard nfc",
    home: "Rams 13",
    away: "26 Falcons",
    homeImage: "http://i.nflcdn.com/static/site/7.5/img/teams/LA/LA_logo-80x90.gif",
    awayImage: "http://i.nflcdn.com/static/site/7.5/img/teams/ATL/ATL_logo-80x90.gif",
    homeSeed: "3rd seed",
    awaySeed: "6th seed"
  },
  {
    id: 10,
    round: "wildcard nfc",
    home: "Saints 31",
    away: "26 Panthers",
    homeImage: "http://i.nflcdn.com/static/site/7.5/img/teams/NO/NO_logo-80x90.gif",
    awayImage: "http://i.nflcdn.com/static/site/7.5/img/teams/CAR/CAR_logo-80x90.gif",
    homeSeed: "4th seed",
    awaySeed: "5th seed"
  },
  {
    id: 11,
    round: "superbowl afc",
    home: "Patriots ",
    homeImage: "http://i.nflcdn.com/static/site/7.5/img/teams/NE/NE_logo-80x90.gif",
    homeSeed: "1st seed AFC"
  },
  {
    id: 12,
    round: "superbowl nfc",
    home: "Eagles ",
    homeImage: "http://i.nflcdn.com/static/site/7.5/img/teams/PHI/PHI_logo-80x90.gif",
    homeSeed: "1st seed NFC"
  }
])

});

module.exports = router;
