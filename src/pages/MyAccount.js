import user from "../PNG/user.png";
import { Button, Col, Row } from "antd";
import { useSelector } from "react-redux";
import { db } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

function MyAccount() {
  const navigate = useNavigate();
  const [userdetails, setUserDetails] = useState("");
  const userid = useSelector((state) => state.Cart.userId);

  useEffect(() => {
    getSingleUser();
  },[]);

  const getSingleUser = async () => {
    const docRef = doc(db, "user", userid);
    const snapshot = await getDoc(docRef);
    console.log("snapshot", snapshot.data());
    setUserDetails(snapshot.data());
  };

  const onImageSet=()=>{

  }
  const onEditDetails = (id) => {
    navigate(`/edituser/${id}`);
  };
  return (
    <div className="main-div">
      <div className="account">
        <p>Account Details :</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="myaccount-box">
          <div>
            <div className="account-img">
              <img  src={user} alt="user" width={200} height={200} onClick={onImageSet} />
            </div>
            <div className="account-img">
              <Button
                className="edit-icon"
                onClick={() => onEditDetails(userid)}
              >
                Edit Details
              </Button>
            </div>
            <Row justify="space-between" className="account-details">
              <Col>
                <Col className="account-col">First Name :</Col>
                <Col className="account-subcol">{userdetails.firstname}</Col>
              </Col>
            </Row>
            <Row className="account-details" justify="space-between">
              <Col>
                <Col className="account-col">Last Name :</Col>
                <Col className="account-subcol">{userdetails.lastname}</Col>
              </Col>
            </Row>
            <Row className="account-details" justify="space-between">
              <Col>
                <Col className="account-col">Email :</Col>
                <Col className="account--col">{userdetails.email}</Col>
              </Col>
            </Row>
            <Row className="account-last-col" justify="space-between">
              <Col>
                <Col className="account-col">Mobile :</Col>
                <Col className="account--col">{userdetails.mobile}</Col>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
