import React from "react";
import { useSelector } from "react-redux";
import { Button, Form, Input, Select, Table, Typography } from "antd";

const { Text } = Typography;
const { Option } = Select;

function BillingDetails() {
  const [form] = Form.useForm();
  const cartItem = useSelector((state) => state.Cart.userCart);
  const userData = useSelector((state) => state.user.userDetails);
  const cartTotal = useSelector((state) => state.Cart.cartTotal);

  const columns = [
    {
      title: "Product",
      width: "50%",
      dataIndex: "title",
      key: "product",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Items",
      align: "center",
      dataIndex: "count",
      key: "items",
    },
    {
      title: "Total",
      key: "total",
      render: (record) => {
        return <Text>₹ {(record.price * record.count).toFixed(2)}</Text>;
      },
    },
  ];

  const handlePlaceOrder = (values) => {
    console.log("values", values);
    form.resetFields();
  };

  return (
    <div className="bill-container">
      <div className="bill-details">Billing Details :</div>
      <div className="billing-form">
        <Form
          onFinish={handlePlaceOrder}
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item
            name="firstname"
            initialValue={userData.firstname}
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="First Name..." />
          </Form.Item>
          <Form.Item
            name="lastname"
            initialValue={userData.lastname}
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
            <Select placeholder="Select Country" allowClear>
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
          <Form.Item name="state" label="State " rules={[{ required: true }]}>
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
            initialValue={userData.mobile}
            label="Mobile number"
            rules={[
              { required: true, message: "Please input your phone number!" },
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
            initialValue={userData.email}
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
          <div className="bill-container">
            <div className="order-details">Your Order :</div>
            <div className="flex-justify-center">
              <div style={{ width: "700px" }}>
                <Table
                  columns={columns}
                  dataSource={cartItem}
                  pagination={false}
                  rowKey={(record) => record.id}
                  bordered
                  footer={() => (
                    <div className="bill-total">
                      <p className="order-total">Total </p> ₹{cartTotal}
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="order-btn-div">
              <Button className="order-btn" htmlType="submit">
                Place Order
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default BillingDetails;
