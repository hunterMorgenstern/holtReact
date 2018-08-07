import React, { Component } from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "this is some sort"
    };
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input value={this.state.searchTerm} type="text" placeholder="Search" />
        </header>
        <div>
          {preload.shows.map(show => (
            <ShowCard {...show} show={show} key={show.imdbID} />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
