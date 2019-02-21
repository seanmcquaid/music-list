var express = require('express');
var router = express.Router();

// connect DB
const mysql = require("mysql");
const config = require("../config");
const connection = mysql.createConnection(config);
connection.connect();

// add music information

router.post("/addMusic", (req,res,next)=>{
  const songName = req.body.songName;
  const artistName = req.body.artistName;
  const insertQuery = `INSERT INTO musicToListen(songName,artistName)
  VALUES(?,?);`;
  connection.query(insertQuery,[songName,artistName],(err,results)=>{
    if(err){throw err};
    const getMusicQuery = `SELECT * FROM musicToListen;`;
    connection.query(getMusicQuery,(err2,results2)=>{
      res.json(results2);
    })
  })
})

module.exports = router;
