import { Button, Col, Form, Input, Row, Select, Table } from "antd";
import React from "react";
import { useLocation } from "react-router";

function BillingDetails() {
  const location = useLocation();
  const [form] = Form.useForm();
  console.log(location);
  const arr = location.state.data;
  console.log("arr", arr);
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
    <div className="bill">
      <div className="bill-details">Billing Details :</div>
      <br />
      <br />
      <div className="billing-form">
        <Form onFinish={onplaceorder} form={form}>
          <Row>
            <Col>
              <Form.Item
                name="first name"
                label="First Name"
                rules={[{ required: true }]}
              >
                <Input placeholder="first name" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="last name"
                label="Last Name"
                rules={[{ required: true }]}
              >
                <Input placeholder=" last name" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="country"
            label="Country / Region "
            rules={[{ required: true }]}
          >
            <Select placeholder="Select Your Role" allowClear>
              <Option value="admin">India</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="address"
            label="Street address"
            rules={[{ required: true }]}
          >
            <Input placeholder="enter your address" />
          </Form.Item>
          <Form.Item
            name="city"
            label="Town / City"
            rules={[{ required: true }]}
          >
            <Input placeholder="enter your city" />
          </Form.Item>
          <Form.Item name="state " label="State " rules={[{ required: true }]}>
            <Input placeholder="enter your state" />
          </Form.Item>
          <Form.Item
            name="pincode "
            label="Postcode / ZIP "
            rules={[{ required: true }]}
          >
            <Input placeholder="enter your pincode" />
          </Form.Item>

          <Form.Item
            name="Mobile"
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
            name="Email"
            label="Email(Optional)"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input placeholder="enter your email" />
          </Form.Item>
          <div className="order-details">Your Order :</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "500px" }}>
              <Table
                columns={columns}
                dataSource={arr}
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
    </div>
  );
}

export default BillingDetails;
