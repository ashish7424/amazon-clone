import "./main.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import amazon from "../PNG/Amazon logo.png";
import { auth, db } from "../Firebase/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { setIsLogin, setUserDetails, setUserId } from "../Store/CartSlice";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const Signup = () => {
    navigate("/signup");
  };

  const onlogin = async (values) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        if (userCredential) {
          dispatch(setIsLogin(true));
          toast.success("Login Successfully");
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("Invalid Email or Password");
        form.resetFields();
        setLoading(false);
      });
    const querySnapshot = await collection(db, "user");
    const que = query(querySnapshot, where("email", "==", values.email));
    const snapshot = await getDocs(que);
    snapshot.forEach((doc) => {
      const user = { ...doc.data(), userid: doc.id };
      const userid = doc.id;
      dispatch(setUserDetails(user));
      dispatch(setUserId(userid));
    });
    setLoading(false);
  };
  return (
    <div>
      <div className="amazonlogo">
        <img src={amazon} alt="amazon" width={180} height={80} />
      </div>
      <p className="title">LOGIN </p>
      <div className="form2">
        <div className="signin-form">
          <Form
            form={form}
            onFinish={onlogin}
            labelCol={{
              span: 6,
            }}
          >
            <Form.Item
              className="signin-label"
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input placeholder=" Email Address..." />
            </Form.Item>
            <br />
            <Form.Item
              className="signin-label"
              label=" Password "
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password placeholder=" Password..." />
            </Form.Item>
            <br />
            <Button
              className="signin-cntn-btn"
              htmlType="submit"
              loading={Loading}
            >
              Continue
            </Button>
          </Form>
          <br />
          <div className="terms">
            By continuing, you agree to Amazon's
            <Link className="footer-link" to="/condition">
              {" "}
              Conditions of Use
            </Link>
            and{" "}
            <Link className="footer-link" to="/privacy">
              Privacy Notice.
            </Link>
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
        <Link className="footer-link" to="/condition">
          Conditions of Use
        </Link>
        <Link className="footer-link" to="/privacy">
          Privacy Notice
        </Link>
        <Link className="footer-link" to="/help">
          Help
        </Link>
      </div>
      <div className="footer-title">
        © 1996-2023, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
}

export default Signin;
