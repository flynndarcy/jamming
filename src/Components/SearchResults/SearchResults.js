import React from 'react';
import ReactDOM from 'react-dom';



class SearchResults extends React.Component
{
  render()
  {
    <div className="SearchResults">
          <h2>Results</h2>
            <TrackList key={track.id} tracks={this.props.searchResults} />
  </div>


  }





}

export default SearchResults;
