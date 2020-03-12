import React, { Component } from 'react'
import { debounce } from "debounce";
import { DebounceInput } from 'react-debounce-input';
import PlayListService from '../services/PlayListService'
import VideoList from '../cmps/VideoList';
export default class PlaylistPage extends Component {


    state = {
        playList: [],
        currVideo: "",
    }




    getvideo = async (term) => {
        let x = await PlayListService.getPlayList(term)
        this.setState({ playList: x.items })

    }

    getUrl = (id) => {
        let str = `https://www.youtube.com/embed/${id}?autoplay=1`
        this.setState({ currVideo: str })

        //   return str

    }

    render() {
        return (
            <React.Fragment>
                <DebounceInput
                    minLength={2}
                    placeholder="Search"
                    debounceTimeout={1000}
                    onChange={event => this.getvideo(event.target.value)} />
                {/* {this.state.playList.length>0&& */}
                <div className="main-wrapper">
                    <iframe width="420" height="315"
                        src={this.state.currVideo} alt="video"> </iframe>
                    {/* } */}
                    <VideoList getUrl={this.getUrl} playList={this.state.playList}></VideoList>
                </div>
            </React.Fragment>
        )
    }
}
