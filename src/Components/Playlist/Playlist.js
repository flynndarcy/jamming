import React from 'react';
import ReactDOM from 'react-dom';

class Playlist extends React.Component
{

constructor()
{

  super(props);

  this.handleNameChange = this.handleNameChange.bind(this);
}



 handleNameChange(event)
 {
   value.onNameChange(event.target.value);
 }

  render()
  {
    <div className="Playlist">
              <input value="New Playlist" onChange={this.handleNameChange}/>
              <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove}/>
              <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
    </div>


  }





}

export default Playlist;
