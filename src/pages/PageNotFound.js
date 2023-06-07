import { CaretRightOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import pagenotfound from "../PNG/pagenotfound.png";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="img-center">
        <img src={pagenotfound} alt="PageNotFound" height={270} />
      </div>
      <div className="flex">
        <div className="question-logo">
          <QuestionCircleOutlined />
        </div>
        <div>
          <h1 vari className="error-title">
            {" "}
            Looking for something?
          </h1>
          <h4>
            We're sorry. The Web address you entered is not a functioning page
            on our site.
          </h4>
          <h3>
            <CaretRightOutlined /> Go to Amazon.in's{" "}
            <Link to="/" className="go-home">
              Home
            </Link>{" "}
            Page
          </h3>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
