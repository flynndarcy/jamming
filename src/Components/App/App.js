import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  let playlistName = "Flynn's Fun Time Playlist";
  let playlistTracks =  [
    {
    name: 'name',
    artist: 'artist',
    album: 'album'
    }
];



  constructor();
  {
    super(props);


    this.state = {searchResults: [
      {name: 'name',
      artist: 'artist',
      album: 'album'
    }]}

    this.state.searchResults = this.state.searchResults.bind(this);
    this.state.addTrack = this.state.addTrack.bind(this);
    this.state.removeTrack = this.state.removeTrack.bind(this);
    this.state.updatePlaylist = this.state.updatePlaylist.bind(this;
    this.state.savePlaylist = this.state.savePlaylist.bind(this;
    this.state.search = this.state.search.bind(this);
}






  addTrack(track)
  {
    //let track =
    for(int i = 0; i < playlistTracks.length; i++)
    {
      if(playlistTracks.name !== track.name)
      {
        playlistTracks.push(track);
        this.setState({playlistTracks: track});
      }

    }


  }

  removeTrack(track)
  {
    for(int i = 0; i< playlistTracks.length; i++
    {
    if(playlistTracks.name === track.name)
    {
      playlistTracks.splice(track);
      this.setState({playlistTracks: track});
    }
    }
  }

  updatePlaylist(name)
  {
    this.setState({playListTracks.name: name})

  }

  savePlaylist(name)
  {
    spotify.savePlaylist();
    this.state.playlistName = 'New Playlist';
    searchResults = [];



  }

  search(term)
  {
    spotify.search(term).then(track => {
      this.setState({track: track});

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              <SearchBar onSearch={this.search} />
                  <div className="App-playlist">
                      <SearchResult searchResults={this.state.searchResults} onAdd={this.addTrack} onRemove={this.removeTrack} />
                      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylist} onSave={this.savePlaylist} />
    </div>
  </div>
</div>
    );
  }
}

export default App;
