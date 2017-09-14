import React from 'react';
import ReactDOM from 'react-dom';

class Track extends React.Component
{
  constructor(props)
  {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);

  }



  render()
  {
    return
    <div className="Track">
    <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  <a className="Track-action">renderAction()</a>
</div>

  }

  addTrack(event)
  {
    this.props.onAdd(this.props.track);
  }
  removeTrack(event)
  {
    this.props.onRemove(this.props.track);
  }

  renderAction(isRemoval)
  {
    if(isRemoval)
    {
     return  (<a classname="Track-action" onClick={this.removeTrack} >-</a>)
    }
    else
    {
      return (<a classname="Track-action" onClick={this.addTrack} >+</a>)
    }
  }





}

export default Track;
