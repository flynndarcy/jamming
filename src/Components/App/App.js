import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  let playlistName = "Flynn's Fun Time Playlist";
  let playlistTracks =  [
    {name: 'name',
    artist: 'artist',
    album: 'album'

}];



  constructor();
  {
    super(props);


    this.state = {searchResults: [
      {name: 'name',
      artist: 'artist',
      album: 'album'
    }]}
}


    this.state.searchResults = this.state.searchResults.bind(this);
    this.state.addTrack = this.state.addTrack.bind(this);
  }


  addTrack(track)
  {
    if(Playlist.id !== this.state.playlistTracks)
    {

      this.setState({name: track});
    }
    else
    {

    }
  }



  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              <SearchBar />
                  <div className="App-playlist">
                      <SearchResult searchResults={this.state.searchResults} />
                      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
    </div>
  </div>
</div>
    );
  }
}

export default App;
