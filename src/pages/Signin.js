import React from "react";
import amazon from "../PNG/Amazon logo.png";
import "./main.css";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { toast } from "react-toastify";

function Signin() {
  const navigate = useNavigate();
  const Signup = () => {
    navigate("/signup");
  };

  const onlogin = async (values) => {
    console.log(values);
    await signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        if (userCredential) {
          toast.success("Login Successfully");
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("User Not Found");
      });
  };
  return (
    <div>
      <div className="amazonlogo">
        <img src={amazon} alt="amazon" width={180} height={80} />
      </div>
      <p className="title">LOGIN </p>
      <div className="form2">
        <div className="signin-form">
          <Form onFinish={onlogin}>
            <Form.Item
              className="signin-label"
              label="Email"
              name="email"
            >
              <Input />
            </Form.Item>
            <br />
            <Form.Item
              className="signin-label"
              label=" Password "
              name="password"
            >
              <Input.Password />
            </Form.Item>
            <br />
            <Button className="signin-cntn-btn" htmlType="submit">
              Continue
            </Button>
          </Form>
          <br />
          <div className="terms">
            By continuing, you agree to Amazon's
            <Link className="footer-link"> Conditions of Use</Link>
            and <Link className="footer-link">Privacy Notice.</Link>
          </div>
        </div>
      </div>
      <div className="divider-break">
        <h5 aria-level={5}>New to Amazon</h5>
      </div>
      <div className="account-btn">
        <Button className="create-btn" onClick={Signup}>
          Create Your Amazon Account
        </Button>
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

export default Signin;
