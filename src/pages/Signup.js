import React from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import AuthFooter from "components/AuthFooter";
import FooterLink from "components/FooterLink";
import { routeNames } from "constants/pageRoutes.constants";
import { setUserList } from "store/User/slice";
import "./main.css";

const { Title } = Typography;

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);
  const [form] = Form.useForm();

  const handleSignup = (values) => {
    let filteredData = userList.find((o) => o.email === values.email);

    if (filteredData) {
      toast.error("Email Already Exist");
      form.resetFields();
    } else {
      dispatch(setUserList({ ...values, id: Date.now(), image: "" }));
      toast.success("Register Successfully");
      navigate(routeNames.Login);
    }
  };

  const validatePassword = (_, value) => {
    if (value.length < 6) {
      return Promise.reject(
        new Error("Password must be at least 6 characters long.")
      );
    }
    return Promise.resolve();
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="auth-container">
        <div className="auth-sub-container">
          <div className="form1">
            <div className="signup-form">
              <Form
                form={form}
                onFinish={handleSignup}
                labelCol={{ span: 6 }}
                className="signup-form-main"
              >
                <Title level={3}> Create Your Account</Title>
                <Form.Item
                  name="firstname"
                  label="First Name"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  name="lastname"
                  label="Last Name"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                  name="mobile"
                  label="Mobile"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Mobile number"
                    addonBefore="+91"
                    style={{ width: "100%" }}
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
                  <Input placeholder="Email Address" />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      validator: validatePassword,
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
              <div className="flex-gap">
                Already have an account?
                <Link to={routeNames.Login} className="footer-link">
                  Sign in
                  <CaretRightOutlined />
                </Link>
              </div>
              <br />
              <AuthFooter footerLabel="By creating an account or logging in, you agree to Amazon’s" />
            </div>
          </div>
          <FooterLink />
        </div>
      </div>
    </div>
  );
}

export default Signup;
