import "./main.css";
import React from "react";
import { toast } from "react-toastify";
import amazon from "../PNG/Amazon logo.png";
import { auth, db } from "../Firebase/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const { Title } = Typography;

function Signup() {
  const navigate = useNavigate();
  const [form]=Form.useForm()

  const register = async (values) => {
    console.log("object", values);
    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User", user.uid);
        addDoc(collection(db, "user"), {
          ...values,
        });
        toast.success("Register Successfully");
        navigate("/signin");
      })
      .catch((error) => {
        toast.error("User Already Exist");
        form.resetFields()
      });
  };
  return (
    <div>
      <div className="amazonlogo">
        <img src={amazon} alt="amazon" width={180} height={80} />
      </div>
      <div className="form1">
        <div className="signup-form">
          <Form
            form={form}
            onFinish={register}
            labelCol={{
              span: 6,
            }}
          >
            <h1> Create Your Account</h1>
            <Form.Item
              name="firstname"
              label="First Name"
              rules={[{ required: true }]}
            >
              <Input placeholder=" First Name" />
            </Form.Item>
            <Form.Item
              name="lastname"
              label="Last Name"
              rules={[{ required: true }]}
            >
              <Input placeholder=" Last Name" />
            </Form.Item>

            <Form.Item
              name="mobile"
              label="Mobile"
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
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "The input is not valid E-mail!",
                },
              ]}
            >
              <Input placeholder=" Email Address" />
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
            <Link className="signin-link" to="/condition">
              {" "}
              Conditions of Use{" "}
            </Link>{" "}
            and
            <Link className="signin-link" to="/privacy">
              {" "}
              Privacy Policy
            </Link>
            .
          </div>
        </div>
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

export default Signup;
