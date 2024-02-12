import React from "react";
import { useSelector } from "react-redux";
import { Table, Typography } from "antd";

const { Text } = Typography;

const ProductDetailsTable = () => {
  const cartItem = useSelector((state) => state.Cart.userCart);
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

  return (
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
  );
};

export default ProductDetailsTable;
