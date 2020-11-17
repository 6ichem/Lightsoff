import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Panel, FlexboxGrid, Pagination, ButtonToolbar, Button } from "rsuite";
import { getTrends } from "../store/actions/searchAction";
import ShowsModal from "./modals/shows";
import MoviesModal from "./modals/movies";
import "../App.css";

const Trends = (props) => {
  const [page, setPage] = useState(1);

  function handleSelect(eventKey) {
    props.getTrends(eventKey);
    setPage(eventKey);
  }

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

  useEffect(() => {
    props.getTrends(page);
  }, [props.id, page]);

  const { trends } = props.trends;

  const image = `https://image.tmdb.org/t/p/w154`;

  return (
    <div>
      <FlexboxGrid justify='center'>
        <Panel header='Whats trending this week?' shaded>
          {trends.results &&
            trends.results.map((t) => (
              <div className='contentlist trendslist' key={t.id}>
                <div>
                  {t.poster_path === null ? (
                    <img
                      src='https://via.placeholder.com/154'
                      className='responsive-image'
                      alt=''
                    />
                  ) : (
                    <img
                      src={image + t.poster_path}
                      className='responsive-image'
                      alt=''
                    />
                  )}
                </div>
                <div>
                  <h6>{t.title || t.name}</h6>
                  <span className='bold'>Release date:</span>
                  {t.first_air_date || t.release_date} <br />
                  <span className='bold'>Original language:</span>{" "}
                  {t.original_language} <br />
                  <span className='bold'>Type:</span> {t.media_type} <br />
                  <span className='bold'>Vote count:</span> {t.vote_count}
                  <br />
                  <span className='bold'>Average rating:</span> {t.vote_average}{" "}
                  <br />
                  <ButtonToolbar style={{ marginTop: "15px" }}>
                    <Button
                      onClick={
                        {
                          movie: () => openMovies(t.id),
                          tv: () => openShows(t.id),
                        }[t.media_type]
                      }>
                      View more info...
                    </Button>
                  </ButtonToolbar>
                </div>
              </div>
            ))}
          <Pagination
            style={{ display: "flex", justifyContent: "center" }}
            pages={trends.total_pages}
            ellipsis={true}
            maxButtons={5}
            boundaryLinks={true}
            prev={true}
            next={true}
            first={true}
            last={true}
            activePage={page}
            onSelect={handleSelect}
          />
        </Panel>
      </FlexboxGrid>

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
      trends: state.trends,
    };
  },
  {
    getTrends,
  }
)(Trends);
