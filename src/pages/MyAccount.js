import { Button, Col, Image, Row } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import user from "assets/png/user.png";

function MyAccount() {
  const navigate = useNavigate();
  const userdetails = useSelector((state) => state.user.userDetails);

  const onEditDetails = (userdetails) => {
    navigate(`/edituser/${userdetails.id}`);
  };

  return (
    <div>
      <div className="account">
        <p>Account Details :</p>
      </div>
      <div className="flex-justify-center">
        <div className="myaccount-box">
          <div>
            <div className="account-img">
              <Image
                src={userdetails.image ? userdetails.image : user}
                alt=""
                width={200}
                height={200}
                className="profile-img"
                preview={false}
              />
            </div>
            <div className="account-img">
              <Button
                className="edit-icon"
                onClick={() => onEditDetails(userdetails)}
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
                <Col className="account-col">Password :</Col>
                <Col className="account--col">{userdetails.password}</Col>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
