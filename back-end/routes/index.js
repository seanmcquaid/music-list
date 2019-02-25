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

router.get("/getMusic", (req,res,next)=>{
  const getMusicQuery = `SELECT * FROM musicToListen;`;
  connection.query(getMusicQuery, (err,results)=>{
    if(err){throw err};
    res.json(results);
  })
})

router.get("/getMusic/:songid", (req,res,next)=>{
  const musicId = req.params.songid;
  const selectMusicQuery = `SELECT * FROM musicToListen where id = ?;`;
  connection.query(selectMusicQuery,[musicId], (err,result)=>{
    if(err){throw err};
    res.json({song : result[0]});
  })
})

module.exports = router;
