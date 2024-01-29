import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filter, isEmpty } from "lodash";
import { Button, Col, Image, Input, Row, Spin, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { movieCategories } from "constants/data.constants";
import { routeNames } from "constants/pageRoutes.constants";
import { getMovies } from "store/MiniTV/actions";
import { setViewMovieDetail } from "store/MiniTV/slice";

const { Text } = Typography;

const MiniTV = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movies, isLoadingMovies } = useSelector((state) => state.movies);
  const [miniTVMovies, setMiniTVMovies] = useState([]);
  const [moviesCat, setMoviesCat] = useState("");
  const [searchMovies, setSearchMovies] = useState("");

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

  const handleSearchMovies = (e) => {
    setSearchMovies(e.target.value);
  };

  const filterMovies = filter(miniTVMovies, (item) => {
    if (searchMovies && searchMovies.length >= 1) {
      return item.name.toLowerCase().includes(searchMovies.toLowerCase());
    }
    return miniTVMovies;
  });

  return (
    <div>
      {isLoadingMovies ? (
        <div className="loader">
          <Spin />
        </div>
      ) : (
        <div className="movie-desc">
          <div className="search-movies-main">
            <Input
              type="search"
              value={searchMovies}
              placeholder="Search Movies..."
              className="search-input"
              onChange={handleSearchMovies}
              prefix={<SearchOutlined />}
            />
          </div>
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
              {!isEmpty(searchMovies)
                ? `Result For : ${searchMovies}`
                : moviesCat && moviesCat !== "All"
                ? `${moviesCat} Movies`
                : "Trending on miniTV"}
            </Text>
          </div>
          <Row gutter={[30, 40]} justify="space-evenly" className="minitv-main">
            {filterMovies.map((movieData, i) => {
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
