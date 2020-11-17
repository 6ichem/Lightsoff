import React, { useState } from "react";
import { connect } from "react-redux";
import { InputGroup, Input, Icon } from "rsuite";
import { searchShows } from "../store/actions/searchAction";

import ShowsModal from "./modals/shows";
import MoviesModal from "./modals/movies";

import "../App.css";

const Search = (props) => {
  const [query, setQuery] = useState("");

  const { results } = props.results;

  const searchfunction = (val) => {
    setQuery(val);
    props.searchShows(val);
  };

  const [movies, setMovies] = useState(false);
  const [shows, setShows] = useState(false);
  const [movieID, setMovieID] = useState();
  const [showID, setShowID] = useState();

  function openMovies(id) {
    setMovies(true);
    setMovieID(id);
  }

  function openShows(id) {
    setShows(true);
    setShowID(id);
  }

  const image = `https://image.tmdb.org/t/p/w154`;

  return (
    <div className='search-component'>
      <InputGroup inside className='search-input'>
        <Input
          type='text'
          placeholder='Type something to search...'
          onChange={(e) => searchfunction(e)}
          value={query}
        />
        <InputGroup.Button>
          <Icon icon='search' />
        </InputGroup.Button>
      </InputGroup>

      <div className='grid'>
        {results.results &&
          results.results.map((r) =>
            r.poster_path ? (
              <div
                className='search-result'
                key={r.id}
                onClick={
                  {
                    movie: () => openMovies(r.id),
                    tv: () => openShows(r.id),
                  }[r.media_type]
                }>
                <img
                  src={image + r.poster_path || r.backdrop_path}
                  className='search-image'
                  alt=''
                />
                <p
                  style={{
                    textAlign: "center",
                  }}>
                  {r.name || r.title}
                </p>
              </div>
            ) : (
              false
            )
          )}
      </div>
      <MoviesModal
        show={movies}
        hide={() => {
          setMovies(false);
        }}
        id={movieID}
      />

      <ShowsModal
        show={shows}
        hide={() => {
          setShows(false);
        }}
        id={showID}
      />
    </div>
  );
};

export default connect(
  (state) => {
    return {
      results: state.results,
    };
  },
  {
    searchShows,
  }
)(Search);
