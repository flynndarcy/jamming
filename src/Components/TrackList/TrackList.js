import React from 'react';
import ReactDOM from 'react-dom';
import Track from '../Track/Track'

class TrackList extends React.Component
{
  render()
  {
    <div className="TrackList">
          <Track key={track.id} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove}  />
          this.props.tracks.map();

    </div>

  }





}

export default TrackList;
