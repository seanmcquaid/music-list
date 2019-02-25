import React, {Component} from "react";
import axios from "axios";

class Edit extends Component{
    constructor(){
        super();
        this.state = {
            song : {}
        }
    }

    componentDidMount(){
        const songId = this.props.match.params.id;
        // console.log(songId)
        axios({
            method: "GET",
            url: `http://localhost:3000/getMusic/${songId}`
        }).then((musicFromBackEnd)=>{
            // console.log(musicFromBackEnd);
            this.setState({
                song : musicFromBackEnd.data.song
            });
        })
    }

    changeSong = (event)=>{
        const value = event.target.value;
        let songStateCopy = {...this.state.song};
        songStateCopy.songName = value;
        this.setState({
            song : songStateCopy
        })
    }

    changeArtist = (event)=>{
        const value = event.target.value;
        let songStateCopy = {...this.state.song};
        songStateCopy.aristName = value;
        this.setState({
            song : songStateCopy
        }) 
    }

    editSong = (event) =>{
        event.preventDefault();
    }

    render(){
        console.log(this.state.song)
        return(
            <div className="container">
                <form onSubmit={this.editSongInfo} className="add-box">
                    <input onChange ={this.changeSong} type="text" placeholder="Change Song" value={this.state.song.songName}/>
                    <input onChange = {this.changeArtist} type="text" value={this.state.song.artistName}/>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        )
    }
}

export default Edit;