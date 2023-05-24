import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Button, Form, Input, Select, Table } from "antd";

function BillingDetails() {
  const location = useLocation();
  const [form] = Form.useForm();
  const item = useSelector((state) => state.Cart.userCart);
  const data = useSelector((state) => state.Cart.userDetails);
  console.log(data)
  const columns = [
    {
      title: "Product",
      dataIndex: "title",
      key: "product",
    },
    {
      title: "Total",
      dataIndex: "price",
      key: "total",
    },
  ];
  const { Option } = Select;
  const onplaceorder = (values) => {
    console.log("values", values);
    form.resetFields();
  };
  return (
    <div className="main-div">
      <div className="bill-details">Billing Details :</div>
      <br />
      <br />
      <div className="billing-form">
        <div>
          <Form
            onFinish={onplaceorder}
            className="form-data"
            form={form}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 14,
            }}
          >
            <Form.Item
              name="firstname"
              initialValue={data.firstname}
              label="First Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="First Name..." />
            </Form.Item>
            <Form.Item
              name="lastname"
              initialValue={data.lastname}
              label="Last Name"
              rules={[{ required: true }]}
            >
              <Input placeholder=" Last Name..." />
            </Form.Item>
            <Form.Item
              name="country"
              label="Country / Region "
              rules={[{ required: true }]}
            >
              <Select placeholder="Select Your Role" allowClear>
                <Option value="india">India</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="address"
              label="Street address"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter Your Address..." />
            </Form.Item>
            <Form.Item
              name="city"
              label="Town / City"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter Your City..." />
            </Form.Item>
            <Form.Item
              name="state"
              label="State "
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter Your State..." />
            </Form.Item>
            <Form.Item
              name="pincode"
              label="Postcode / ZIP "
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter Your Pincode..." />
            </Form.Item>

            <Form.Item
              name="mobile"
              initialValue={data.mobile}
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
              initialValue={data.email}
              label="Email(Optional)"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
            >
              <Input placeholder="Enter Your Email" />
            </Form.Item>
            <div className="order-details">Your Order :</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: "500px" }}>
                <Table
                  columns={columns}
                  dataSource={item}
                  pagination={false}
                  rowKey={(record) => record.id}
                  bordered
                  footer={() => (
                    <div className="bill-total">
                      <p className="order-total">Total </p> ₹
                      {location.state.element}
                    </div>
                  )}
                />
              </div>
            </div>
            <br />
            <br />
            <div className="order-btn-div">
              <Button className="order-btn" htmlType="submit">
                Place Order
              </Button>
            </div>
          </Form>
        </div>
        <br />
      </div>
    </div>
  );
}

export default BillingDetails;
