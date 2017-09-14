import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from '../TrackList/TrackList.js';



class SearchResults extends React.Component
{
  render()
  {
    return(
    <div className="SearchResults">
          <h2>Results</h2>
            <TrackList tracks={this.props.searchResult} onAdd={this.props.onAdd} />
  </div>
)


  }





}

export default SearchResults;
