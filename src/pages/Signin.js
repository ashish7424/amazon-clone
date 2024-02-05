import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";
import AuthFooter from "components/AuthFooter";
import FooterLink from "components/FooterLink";
import { routeNames } from "constants/pageRoutes.constants";
import { setIsLogin, setUserDetails } from "store/User/slice";
import "./main.css";

const { Title } = Typography;

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);
  const [Loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleNavigateSignup = () => {
    navigate(routeNames.Signup);
  };

  const handleLogin = (values) => {
    setLoading(true);
    let filteredData = userList.find((o) => o.email === values.email);

    if (filteredData) {
      dispatch(setIsLogin(true));
      toast.success("Login Successfully");
      dispatch(setUserDetails(filteredData));
      navigate(routeNames.Home);
    } else {
      toast.error("Invalid Email or Password");
      form.resetFields();
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="auth-container">
        <div className="auth-sub-container">
          <div>
            <Title level={2} className="title">
              LOGIN
            </Title>
            <div className="form2">
              <div className="signin-form">
                <Form form={form} onFinish={handleLogin} labelCol={{ span: 6 }}>
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
                    <Input placeholder="Email Address..." />
                  </Form.Item>
                  <Form.Item
                    className="signin-label"
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input.Password placeholder="Password..." />
                  </Form.Item>
                  <Button
                    className="signin-cntn-btn"
                    htmlType="submit"
                    loading={Loading}
                  >
                    Continue
                  </Button>
                </Form>
                <AuthFooter footerLabel="By continuing, you agree to Amazon's" />
              </div>
            </div>
            <div className="divider-break">
              <div className="divider-line" />
              <h5 aria-level={5}>New to Amazon?</h5>
              <div className="divider-line" />
            </div>
            <div className="account-btn">
              <Button className="create-btn" onClick={handleNavigateSignup}>
                Create Your Amazon Account
              </Button>
            </div>
          </div>
          <FooterLink />
        </div>
      </div>
    </div>
  );
}

export default Signin;
