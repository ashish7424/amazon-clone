import React from "react";
import amazon from "../PNG/Amazon logo.png";
import { Button, Form, Input, Typography } from "antd";
import "./main.css";
import { Link, useNavigate } from "react-router-dom";
import { CaretRightOutlined } from "@ant-design/icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { toast } from "react-toastify";
const { Title } = Typography;

function Signup() {
  const navigate = useNavigate();
  const register = async (values) => {
    console.log("object", values);
    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        console.log("object", userCredential);
        const user = userCredential.user;
        console.log("User", user.uid);
        toast.success("Register Successfully");
        navigate("/signin");
      })
      .catch((error) => toast.error("User Already Exist"));
  };
  return (
    <div>
      <div className="amazonlogo">
        <img src={amazon} alt="amazon" width={180} height={80} />
      </div>
      <div className="form1">
        <div className="signup-form">
          <Form onFinish={register}>
            <h1> Create Your Account</h1>
            <Form.Item
              name="name"
              label="Your Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="first and last name" />
            </Form.Item>

            <Form.Item
              name="mobile"
              label="Mobile number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                placeholder="Mobile number"
                addonBefore="+91"
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email(Optional)"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="At least 6 Characters" />
            </Form.Item>
            <Title className="condition">
              By enrolling your mobile phone number, you consent to receive
              automated security notifications via text message from Amazon.
              Message and data rates may apply.
            </Title>
            <Form.Item>
              <Button className="cntn-btn" htmlType="submit">
                Continue
              </Button>
            </Form.Item>
          </Form>
          <div>
            Already have an account?
            <Link to="/signin" className="signin-link">
              Sign in
              <CaretRightOutlined />
            </Link>
          </div>
          <br />
          <div className="policy">
            By creating an account or logging in, you agree to Amazon’s
            <Link className="signin-link"> Conditions of Use </Link> and
            <Link className="signin-link"> Privacy Policy </Link>.
          </div>
        </div>
      </div>
      <div className="footer">
        <Link className="footer-link">Conditions of Use</Link>
        <Link className="footer-link">Privacy Notice</Link>
        <Link className="footer-link">Help</Link>
      </div>
      <div className="footer-title">
        © 1996-2023, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
}

export default Signup;
