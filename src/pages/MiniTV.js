import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Image, Row, Spin, Typography } from "antd";
import { movieCategories } from "constants/data.constants";
import { routeNames } from "constants/pageRoutes.constants";
import { setViewMovieDetail } from "store/MiniTV/slice";
import { getMovies } from "store/MiniTV/actions";

const { Text } = Typography;

const MiniTV = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movies, isLoadingMovies } = useSelector((state) => state.movies);
  const [miniTVMovies, setMiniTVMovies] = useState([]);
  const [moviesCat, setMoviesCat] = useState("");

  useEffect(() => {
    dispatch(getMovies());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setMiniTVMovies(movies);
    // eslint-disable-next-line
  }, []);

  const filterShowsByGenre = (miniTVMovies, genre) => {
    return miniTVMovies.filter((show) => show.genres.includes(genre));
  };

  const onButtonClick = (catagories) => {
    setMoviesCat(catagories);
    if (catagories === "All") {
      setMiniTVMovies(movies);
    } else {
      const actionShows = filterShowsByGenre(movies, catagories);
      setMiniTVMovies(actionShows);
    }
  };

  return (
    <div>
      {isLoadingMovies ? (
        <div className="loader">
          <Spin />
        </div>
      ) : (
        <div className="movie-desc">
          <div className="catagories-main">
            {movieCategories.map((catagories, index) => {
              return (
                <Button
                  type="primary"
                  className="movie-categories-btn"
                  style={{ opacity: moviesCat === catagories ? 1 : 0.5 }}
                  key={index}
                  onClick={() => onButtonClick(catagories)}
                >
                  {catagories}
                </Button>
              );
            })}
          </div>
          <div>
            <Text className="trending-label">
              {moviesCat && moviesCat !== "All"
                ? `${moviesCat} Movies`
                : "Trending on miniTV"}
            </Text>
          </div>
          <Row gutter={[30, 40]} justify="space-evenly" className="minitv-main">
            {miniTVMovies.map((movieData, i) => {
              return (
                <Col
                  key={i}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={4}
                  xxl={4}
                  className="movie-col"
                >
                  <Image
                    preview={false}
                    src={movieData.image.medium}
                    className="movie-image"
                    onClick={() => {
                      dispatch(setViewMovieDetail(movieData));
                      navigate(routeNames.MovieDetail);
                    }}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      )}
    </div>
  );
};

export default MiniTV;
