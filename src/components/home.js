import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import "../App.css";
import { Carousel } from "rsuite";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import MoviesModal from "./modals/movies";
import ShowsModal from "./modals/shows";

import {
  getPopularMovies,
  getPlayingMovies,
} from "../store/actions/movieAction";

import { getPopularShows, getAirToday } from "../store/actions/showAction";

const Discover = (props) => {
  useEffect(() => {
    props.getPopularMovies();
    props.getPlayingMovies();
    props.getPopularShows();
    props.getAirToday();
  }, []);

  const backdrop = `https://image.tmdb.org/t/p/w1280`;
  const image = `https://image.tmdb.org/t/p/w154`;

  const { popularMovies } = props.popularMovies;
  const { playingMovies } = props.playingMovies;
  const { popularShows } = props.popularShows;
  const { airToday } = props.airToday;

  const getAll =
    popularMovies.results &&
    popularShows.results &&
    popularMovies.results
      .slice(0, 10)
      .concat(popularShows.results.slice(0, 10));

  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 7 },
  };

  const [movies, setMovies] = useState(false);
  const [shows, setShows] = useState(false);
  const [showingid, setid] = useState();

  function openMovies(id) {
    setMovies(true);
    setid(id);
  }

  function openShows(id) {
    setShows(true);
    setid(id);
  }

  return (
    <div>
      <Carousel
        placement='left'
        shape='bar'
        autoplay
        className='discover-slider'>
        {getAll &&
          getAll.map((i) => (
            <div
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(68, 0, 0, 0.52), rgba(38, 38, 38, 0.73)),
              url('${backdrop + i.backdrop_path}')`,
                backgroundSize: "cover",
              }}
              key={i.id}>
              <div className='backdropText'>
                <h1>{i.title || i.name}</h1>
                <p>{i.overview}</p>
              </div>
            </div>
          ))}
      </Carousel>

      <div className='chevron'>
        <h4 className='home-title'>Now in theatres</h4>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          responsive={responsive}
          animationType='slide'>
          {playingMovies.results &&
            playingMovies.results.map((p) => (
              <div
                className='item'
                key={p.id}
                onClick={() => {
                  openMovies(p.id);
                }}>
                <img
                  src={image + p.poster_path}
                  alt=''
                  onDragStart={handleDragStart}
                  className='slider-image'
                />
                <p style={{ textAlign: "center" }}>{p.title}</p>
              </div>
            ))}
        </AliceCarousel>

        <MoviesModal
          show={movies}
          hide={() => {
            setMovies(false);
          }}
          id={showingid}
        />
      </div>

      <div className='chevron'>
        <h4 className='home-title'>Shows airing today</h4>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          responsive={responsive}
          animationType='slide'>
          {airToday.results &&
            airToday.results.map((n) => (
              <div
                className='item'
                key={n.id}
                onClick={() => {
                  openShows(n.id);
                }}>
                <img
                  src={image + n.poster_path}
                  alt=''
                  onDragStart={handleDragStart}
                  className='slider-image'
                />
                <p style={{ textAlign: "center" }}>{n.name}</p>
              </div>
            ))}
        </AliceCarousel>

        <ShowsModal
          show={shows}
          hide={() => {
            setShows(false);
          }}
          id={showingid}
        />
      </div>

      <div className='chevron'>
        <h4 className='home-title'>Most popular movies</h4>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          responsive={responsive}
          animationType='slide'>
          {popularMovies.results &&
            popularMovies.results.map((m) => (
              <div
                className='item'
                key={m.id}
                onClick={() => {
                  openMovies(m.id);
                }}>
                <img
                  src={image + m.poster_path}
                  alt=''
                  onDragStart={handleDragStart}
                  className='slider-image'
                />
                <p style={{ textAlign: "center" }}>{m.title}</p>
              </div>
            ))}
        </AliceCarousel>

        <MoviesModal
          show={movies}
          hide={() => {
            setMovies(false);
          }}
          id={showingid}
        />
      </div>

      <div className='chevron'>
        <h4 className='home-title'>Most popular TV shows</h4>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          responsive={responsive}
          animationType='slide'>
          {popularShows.results &&
            popularShows.results.map((s) => (
              <div
                className='item'
                key={s.id}
                onClick={() => {
                  openShows(s.id);
                }}>
                <img
                  src={image + s.poster_path}
                  alt=''
                  onDragStart={handleDragStart}
                  className='slider-image'
                />
                <p style={{ textAlign: "center" }}>{s.name}</p>
              </div>
            ))}
        </AliceCarousel>

        <ShowsModal
          show={shows}
          hide={() => {
            setShows(false);
          }}
          id={showingid}
        />
      </div>
    </div>
  );
};

export default connect(
  (state) => {
    return {
      popularMovies: state.popularMovies,
      playingMovies: state.playingMovies,
      popularShows: state.popularShows,
      airToday: state.airToday,
    };
  },
  {
    getPopularMovies,
    getPlayingMovies,
    getPopularShows,
    getAirToday,
  }
)(Discover);
