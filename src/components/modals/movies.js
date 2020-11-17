import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../../App.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Modal, Button, Badge } from "rsuite";
import {
  getMovie,
  getTrailer,
  getCast,
  getSimilarMovies,
} from "../../store/actions/movieAction";

const MoviesModal = (props) => {
  useEffect(() => {
    props.getMovie(props.id);
    props.getTrailer(props.id);
    props.getCast(props.id);
    props.getSimilarMovies(props.id);
  }, [props.id]);

  const trailers = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const casts = {
    0: { items: 2 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const { movie } = props.movie;
  const { trailer } = props.trailer;
  const { cast } = props.cast;
  const { similarMovies } = props.similarMovies;

  const backdrop = `https://image.tmdb.org/t/p/w1280`;
  const youtube = `https://www.youtube.com/embed/`;
  const image = `https://image.tmdb.org/t/p/w154`;

  return (
    <div className='modal-container' key={movie.id}>
      <Modal
        show={props.show}
        onHide={props.hide}
        overflow={false}
        className='modal'
        style={{ height: "auto" }}>
        <Modal.Header>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={backdrop + movie.backdrop_path}
            alt=''
            className='backdrop'
          />
          {movie.genres &&
            movie.genres.map((genre) => (
              <Badge
                content={genre.name}
                style={{ marginRight: "5px", marginBottom: "5px" }}
                key={genre.id}
              />
            ))}
          <Badge content={"★   " + movie.vote_average} />
          <p style={{ marginBottom: "15px" }}>{movie.overview}</p>

          <div style={{ width: "100%" }}>
            <Modal.Title style={{ fontSize: "16px" }}>Trailers</Modal.Title>
            <AliceCarousel
              mouseTracking
              disableDotsControls
              responsive={trailers}
              animationType='slide'>
              {trailer.results &&
                trailer.results.map((t) => (
                  <div key={t.key} className='item'>
                    <iframe
                      width='100%'
                      height='315'
                      src={youtube + t.key}
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      title='Trailer'
                      allowFullScreen></iframe>
                  </div>
                ))}
            </AliceCarousel>
          </div>

          <div style={{ width: "100%" }}>
            <Modal.Title style={{ fontSize: "16px" }}>Cast</Modal.Title>
            <AliceCarousel
              mouseTracking
              disableDotsControls
              responsive={casts}
              animationType='slide'>
              {cast.cast &&
                cast.cast.map((c) => (
                  <div style={{ marginRight: "10px" }} key={c.id}>
                    {c.profile_path === null ? (
                      <img
                        src='https://via.placeholder.com/154'
                        width='154'
                        height='231'
                        alt=''
                        style={{ marginBottom: "5px" }}
                      />
                    ) : (
                      <img
                        src={image + c.profile_path}
                        alt=''
                        style={{ marginBottom: "5px" }}
                      />
                    )}
                    <h6>{c.name}</h6>
                    <p>{c.character}</p>
                  </div>
                ))}
            </AliceCarousel>
          </div>

          <div style={{ width: "100%" }}>
            <Modal.Title style={{ fontSize: "16px" }}>
              Similar movies
            </Modal.Title>
            <AliceCarousel
              mouseTracking
              disableDotsControls
              responsive={casts}
              animationType='slide'>
              {similarMovies.results &&
                similarMovies.results.map((s) => (
                  <div style={{ marginRight: "10px" }} key={s.id}>
                    {s.poster_path === null ? (
                      <img
                        src='https://via.placeholder.com/154'
                        width='154'
                        height='231'
                        alt=''
                        style={{ marginBottom: "5px" }}
                      />
                    ) : (
                      <img
                        src={image + s.poster_path}
                        alt=''
                        style={{ marginBottom: "5px" }}
                      />
                    )}
                    <h6>{s.title}</h6>
                  </div>
                ))}
            </AliceCarousel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.hide} appearance='primary'>
            Ok
          </Button>
          <Button onClick={props.hide} appearance='subtle'>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default connect(
  (state) => {
    return {
      movie: state.movie,
      trailer: state.trailer,
      cast: state.cast,
      similarMovies: state.similarMovies,
    };
  },
  {
    getMovie,
    getTrailer,
    getCast,
    getSimilarMovies,
  }
)(MoviesModal);
