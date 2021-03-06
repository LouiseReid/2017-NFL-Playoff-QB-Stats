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
  },
  {
    id: 2,
    name: "Blake Bortles",
    team: "Jacksonville Jaguars",
    image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
    passingAttempts: 523,
    completions: 315,
    yards: 3687,
    TDs: 21,
    interceptions: 13,
    firstDownPercentage: 36.7,
    sacked: 24,
    conference: "AFC"
  },
  {
    id: 3,
    name: "Alex Smith",
    team: "Kansas City Chiefs",
    image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SMI031126.png",
    passingAttempts: 505,
    completions: 341,
    yards: 4042,
    TDs: 26,
    interceptions: 5,
    firstDownPercentage: 36.4,
    sacked: 35,
    conference: "AFC"
  },
  {
    id: 4,
    name: "Marcus Mariota",
    team: "Tennessee Titans",
    image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MAR186347.png",
    passingAttempts: 453,
    completions: 281,
    yards: 3232,
    TDs: 13,
    interceptions: 15,
    firstDownPercentage: 32.5,
    sacked: 27,
    conference: "AFC"
  },
  {
    id: 5,
    name: "Tyrod Taylor",
    team: "Buffalo Bills",
    image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TAY764868.png",
    passingAttempts: 420,
    completions: 263,
    yards: 2799,
    TDs: 14,
    interceptions: 4,
    firstDownPercentage: 31.9,
    sacked: 46,
    conference: "AFC"
  },
 {
   id: 6,
   name: "Tom Brady",
   team: "New England Patriots",
   image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BRA371156.png",
   passingAttempts: 581,
   completions: 385,
   yards: 4577,
   TDs: 32,
   interceptions: 8,
   firstDownPercentage: 39.6,
   sacked: 35,
   conference: "AFC"
 },
  {
    id: 7,
    name: "Matt Ryan",
    team: "Atlanta Falcons",
    image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/RYA238179.png",
    passingAttempts: 529,
    completions: 342,
    yards: 4095,
    TDs: 20,
    interceptions: 12,
    firstDownPercentage: 37.6,
    sacked: 24,
    conference: "NFC"
  },
  {
    id: 8,
    name: "Drew Brees",
    team: "New Orleans Saints",
    image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BRE229498.png",
    passingAttempts: 536,
    completions: 386,
    yards: 4334,
    TDs: 23,
    interceptions: 8,
    firstDownPercentage: 37.5,
    sacked: 20,
    conference: "NFC"
  },
  {
    id: 9,
    name: "Jard Goff",
    team: "LA Rams",
    image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GOF219636.png",
    passingAttempts: 477,
    completions: 296,
    yards: 3804,
    TDs: 28,
    interceptions: 7,
    firstDownPercentage: 36.9,
    sacked: 25,
    conference: "NFC"
  },
  {
    id: 10,
    name: "Cam Newton",
    team: "Carolina Panthers",
    image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NEW693984.png",
    passingAttempts: 492,
    completions: 291,
    yards: 3302,
    TDs: 22,
    interceptions: 16,
    firstDownPercentage: 33.7,
    sacked: 35,
    conference: "NFC"
  },
  {
    id: 11,
    name: "Nick Foles",
    team: "Philadelphia Eagles",
    image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/FOL058566.png",
    passingAttempts: 101,
    completions: 57,
    yards: 537,
    TDs: 5,
    interceptions: 2,
    firstDownPercentage: 28.7,
    sacked: 5,
    conference: "NFC"
  },
  {
    id: 12,
    name: "Case Keenum",
    team: "Minnesota Vikings",
    image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KEE690598.png",
    passingAttempts: 481,
    completions: 325,
    yards: 3547,
    TDs: 22,
    interceptions: 7,
    firstDownPercentage: 37.2,
    sacked: 22,
    conference: "NFC"
  }])
});

module.exports = router;
