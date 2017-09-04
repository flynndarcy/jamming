import React from 'react';
import ReactDOM from 'react-dom';

class Playlist extends React.Component
{
  render()
  {
    <div className="Playlist">
              <input value="New Playlist"/>
              <TrackList tracks={this.props.playlistTracks}/>
              <a className="Playlist-save">SAVE TO SPOTIFY</a>
    </div>


  }





}

export default Playlist;
