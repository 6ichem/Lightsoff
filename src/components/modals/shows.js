import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../../App.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Modal, Button, Badge, Panel } from "rsuite";
import {
  getShows,
  getShowTrailer,
  getShowCast,
  getSimilarShows,
} from "../../store/actions/showAction";

const ShowsModal = (props) => {
  useEffect(() => {
    props.getShows(props.id);
    props.getShowTrailer(props.id);
    props.getShowCast(props.id);
    props.getSimilarShows(props.id);
  }, [props.id]);

  const { shows } = props.shows;
  const { showTrailer } = props.showTrailer;
  const { showCast } = props.showCast;
  const { similarShows } = props.similarShows;

  const backdrop = `https://image.tmdb.org/t/p/w1280`;
  const youtube = `https://www.youtube.com/embed/`;
  const image = `https://image.tmdb.org/t/p/w154`;

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

  return (
    <div className='modal-container'>
      <Modal
        show={props.show}
        onHide={props.hide}
        overflow={false}
        className='modal'
        style={{ height: "auto" }}>
        <Modal.Header>
          <Modal.Title>{shows.name || shows.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={backdrop + shows.backdrop_path}
            alt=''
            srcset=''
            className='backdrop'
          />
          {shows.genres &&
            shows.genres.map((genre) => (
              <Badge
                content={genre.name}
                style={{ marginRight: "5px", marginBottom: "5px" }}
              />
            ))}
          <Badge content={"★   " + shows.vote_average} />
          <p style={{ marginBottom: "15px" }}>{shows.overview}</p>

          <div style={{ width: "100%" }}>
            <Modal.Title style={{ fontSize: "16px" }}>Trailers</Modal.Title>
            <AliceCarousel
              mouseTracking
              disableDotsControls
              responsive={trailers}
              animationType='slide'>
              {showTrailer.results &&
                showTrailer.results.map((t) => (
                  <div key={t.key} className='item'>
                    <iframe
                      width='100%'
                      height='315'
                      src={youtube + t.key}
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      title='Trailer'
                      allowFullScreen></iframe>
                  </div>
                ))}
            </AliceCarousel>
          </div>

          <Panel
            header='Seasons'
            style={{ marginBottom: "15px" }}
            collapsible
            bordered>
            {shows.seasons &&
              shows.seasons.map((s) => (
                <div className='contentlist'>
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
                  <ul className='list'>
                    <li>
                      <h6>{s.name}</h6>
                    </li>
                    <li>
                      <span className='bold'>Air date:</span> {s.air_date}
                    </li>
                    <li>
                      <span className='bold'>Episodes count:</span>{" "}
                      {s.episode_count}
                    </li>
                    <li>
                      <span className='bold'>Season number:</span>{" "}
                      {s.season_number}
                    </li>
                    <li>
                      <span className='bold'>Overview:</span> {s.overview}
                    </li>
                  </ul>
                </div>
              ))}
          </Panel>

          <div style={{ width: "100%" }}>
            <Modal.Title style={{ fontSize: "16px" }}>Cast</Modal.Title>
            <AliceCarousel
              mouseTracking
              disableDotsControls
              responsive={casts}
              animationType='slide'>
              {showCast.cast &&
                showCast.cast.map((c) => (
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
              Similar shows
            </Modal.Title>
            <AliceCarousel
              mouseTracking
              disableDotsControls
              responsive={casts}
              animationType='slide'>
              {similarShows.results &&
                similarShows.results.map((s) => (
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
                    <h6>{s.name}</h6>
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
      shows: state.shows,
      showTrailer: state.showTrailer,
      showCast: state.showCast,
      similarShows: state.similarShows,
    };
  },
  {
    getShows,
    getShowTrailer,
    getShowCast,
    getSimilarShows,
  }
)(ShowsModal);
