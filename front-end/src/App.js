import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";


class App extends Component {
  constructor(){
    super();
    this.state = {
      musicInfo : []
    }
  }

  componentDidMount(){
    axios({
      method : "GET",
      url : "http://localhost:3000/getMusic"
    }).then((musicInfoFromBackEnd)=>{
      this.setState({
        musicInfo : musicInfoFromBackEnd.data
      })
    })
  }

  addNewTask = (song, artist)=>{
    // console.log(songName)
    // console.log(artistName)
    axios({
      method: "POST",
      url : "http://localhost:3000/addMusic",
      data : {
        songName : song,
        artistName : artist
      }
    }).then((dataFromDatabase)=>{
      // console.log(dataFromDatabase)
      this.setState({
        musicInfo : dataFromDatabase.data
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route path ="/" render={()=><Home addNewTask={this.addNewTask} musicInfo = {this.state.musicInfo}/>}/>
          {/* still need to do edit and delete */}
        </div>
      </Router>
    );
  }
}

export default App;
