import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Image, Typography } from "antd";
import WatchIcon from "assets/svg/WatchIcon";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { routeNames } from "constants/pageRoutes.constants";

const { Text } = Typography;

const MovieDetail = () => {
  const navigate = useNavigate();
  const viewMovieDetail = useSelector((state) => state.movies.viewMovieDetail);

  return (
    <div className="movie-detail-main">
      <div style={{ padding: "0 20px" }}>
        <Button
          className="back-icon-btn"
          shape="circle"
          type="primary"
          icon={<ArrowLeftOutlined style={{ color: "#fff" }} />}
          onClick={() => navigate(routeNames.miniTV)}
        />
      </div>
      {viewMovieDetail && (
        <div className="single-movie">
          <div className="movie-detail-col">
            <Col>
              <Text className="movie-title">
                {viewMovieDetail.name} (
                {viewMovieDetail.premiered.split("-")[0]})
              </Text>
            </Col>
            <Col>
              <Text className="movie-summary">Language : </Text>
              <Text className="movie-summary">{viewMovieDetail.language}</Text>
            </Col>
            <Col>
              <Text className="movie-summary">Runtime : </Text>
              <Text className="movie-summary">
                {viewMovieDetail.runtime} min
              </Text>
            </Col>
            <Col>
              <Button
                type="primary"
                href={viewMovieDetail.url}
                className="watch-btn"
                icon={<WatchIcon />}
              >
                Watch More Details
              </Button>
            </Col>
            <Col>
              <p
                className="movie-summary-main"
                dangerouslySetInnerHTML={{
                  __html: viewMovieDetail.summary,
                }}
              />
            </Col>
            <Col>
              <Text className="movie-detail">IMDB Rating : </Text>
              <Text className="movie-detail">
                {viewMovieDetail.rating.average} / 10
              </Text>
            </Col>
            <Col>
              <Text className="movie-detail">genres : </Text>
              {viewMovieDetail.genres.map((gen, i) => {
                return (
                  <Text key={gen + i} className="movie-detail">
                    {gen}
                    {i < viewMovieDetail.genres.length - 1 ? " , " : ""}
                  </Text>
                );
              })}
            </Col>
          </div>
          <div>
            <Image
              src={viewMovieDetail.image.medium}
              alt={viewMovieDetail.category}
              width={400}
              height={400}
              className="movie-container"
              preview={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;