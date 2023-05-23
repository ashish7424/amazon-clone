import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { useSelector } from "react-redux";
import user from "../PNG/user.png";
import { EditOutlined } from "@ant-design/icons";

function MyAccount() {
  const userDetails = useSelector((state) => state.Cart.userDetails);
  const [isEdit, setIsedit] = useState(false);
  console.log("userDetails", userDetails);
  const onFirstnameEdit = async () => {
    setIsedit(true);
  };
  const onSaveChanges = (values) => {
    console.log(values);
    setIsedit(false);
  };
  return (
    <div className="myaccount-div">
      <div className="account">
        <p>Account Details :</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="myaccount-box">
          <div>
            <div className="account-img">
              <img src={user} alt="user" width={200} height={200} />
            </div>
            <Row justify="space-between" className="account-details">
              <Col>
                <Col className="account-col">First Name :</Col>
                <Col className="account-subcol">
                  {isEdit ? (
                    <>
                      <Form onFinish={onSaveChanges}>
                        <Form.Item initialValue={userDetails.firstname} name="firstname">
                          <Input />
                        </Form.Item>
                        <Form.Item>
                          <Button htmlType="submit" className="savechanges">
                            Save Changes
                          </Button>
                        </Form.Item>
                      </Form>
                    </>
                  ) : (
                    userDetails.firstname
                  )}
                </Col>
              </Col>
              <Col className="edit-col">
                <EditOutlined className="edit-icon" onClick={onFirstnameEdit} />
              </Col>
            </Row>
            <Row className="account-details" justify="space-between">
              <Col>
                <Col className="account-col">Last Name :</Col>
                <Col className="account-subcol">{userDetails.lastname}</Col>
              </Col>
              <Col className="edit-col">
                <EditOutlined className="edit-icon" />
              </Col>
            </Row>
            <Row className="account-details" justify="space-between">
              <Col>
                <Col className="account-col">Email :</Col>
                <Col className="account--col">{userDetails.email}</Col>
              </Col>
              <Col className="edit-col">
                <EditOutlined className="edit-icon" />
              </Col>
            </Row>
            <Row className="account-last-col" justify="space-between">
              <Col>
                <Col className="account-col">Mobile :</Col>
                <Col className="account--col">{userDetails.mobile}</Col>
              </Col>
              <Col className="edit-col">
                <EditOutlined className="edit-icon" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
