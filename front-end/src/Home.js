import React, {Component} from "react";

class Home extends Component {
    constructor(){
        super();
        this.state = {
            songName : "",
            artistName : ""
        }
    }

    changeSong = (event)=>{
        // console.log(event.target.value)
        this.setState({
            songName : event.target.value
        })
    }

    changeArtist = (event)=>{
        // console.log(event.target.value)
        this.setState({
            artistName : event.target.value
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className="to-do-app">      
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 className="header center orange-text">Music List</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Made with React and Express</h5>
                        </div>
                    </div>
                </div>    
                <div className="container">
                    <form className="add-box">
                        <input onChange={this.changeSong} type="text" id="new-song" placeholder="Enter Song Name Here"/>
                        <input onChange={this.changeArtist} type="text" id="new-artist" placeholder="Enter Artist Here"/>
                        <button type="submit" className="btn btn-primary">Add Song</button>
                    </form>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Songs To Listen To</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Home;