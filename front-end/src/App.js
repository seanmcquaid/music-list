import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Edit from "./Edit"


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

  addNewSong = (song, artist)=>{
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
          <Route path ="/" render={()=><Home addNewSong={this.addNewSong} musicInfo = {this.state.musicInfo}/>}/>
          {/* still need to do edit and delete */}
          <Route exact path ="/edit/:id" component={Edit}/>
        </div>
      </Router>
    );
  }
}

export default App;
