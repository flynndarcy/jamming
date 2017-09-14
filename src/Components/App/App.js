import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist';
import Track from '../Track/Track';
import SearchBar from '../SearchBar/SearchBar';
import TrackList from'../TrackList/TrackList';
import SearchResults from '../SearchResults/SearchResults';
import spotify from '../../util/spotify';

class App extends Component {


  constructor(props)
  {
    super(props);


    this.state = {

      searchResults: [
        { name: 'name',
          artist: 'artist',
          album: 'album'
        }],

    playlistName: "Flynn's Fun Time Playlist",
    playlistTracks:  [
      {
      name: 'name',
      artist: 'artist',
      album: 'album'
      }
  ]


};

this.state.searchResults = this.state.searchResults.bind(this);
this.state.addTrack = this.state.addTrack.bind(this);
this.state.removeTrack = this.state.removeTrack.bind(this);
this.state.updatePlaylist = this.state.updatePlaylist.bind(this);
this.state.savePlaylist = this.state.savePlaylist.bind(this);
this.state.search = this.state.search.bind(this);
}

  addTrack(track)
  {
    //let track =
    for(let i = 0; i < this.playlistTracks.length; i++)
    {
      if(this.playlistTracks.name !== track.name)
      {
        this.playlistTracks.push(track);
        this.setState({playlistTracks: track});
      }

    }


  }

  removeTrack(track)
  {
    for(let i = 0; i< this.playlistTracks.length; i++)
    {
    if(this.playlistTracks.name === track.name)
    {
      this.playlistTracks.splice(track);
      this.setState({playlistTracks: track});
    }
    }
  }

  updatePlaylist(name)
  {
    this.setState(prevState => {
      const playlistTracks = prevState.playlistTracks;
      playlistTracks.name = name

      return {playlistTracks}

    })

  }

  savePlaylist(name)
  {
    spotify.savePlaylist();
    this.state.playlistName = 'New Playlist';
    this.searchResults = [];



  }

  search(term)
  {
    spotify.search(term).then(track => {
      this.setState({track: track});

  })

  }

render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              <SearchBar onSearch={this.search} />
                  <div className="App-playlist">
                      <SearchResults searchResult={this.state.searchResults} onAdd={this.addTrack} onRemove={this.removeTrack} />
                      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylist} onSave={this.savePlaylist} />
    </div>
  </div>
</div>
    );
  }

}

export default App;
