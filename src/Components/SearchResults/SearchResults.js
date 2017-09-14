import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from'../TrackList/TrackList';



class SearchResults extends React.Component
{
  render()
  {
    return(
    <div className="SearchResults">
          <h2>Results</h2>
            <TrackList key={this.track.id} tracks={this.props.searchResults} onAdd={this.props.onAdd} />
  </div>
)


  }





}

export default SearchResults;
