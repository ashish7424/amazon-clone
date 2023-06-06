/* eslint-disable react-hooks/exhaustive-deps */
import { toast } from "react-toastify";
import React, { useEffect } from "react";
import { db } from "../Firebase/Firebase";
import { Button, Form, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";

function EditUser() {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    singleUser();
  }, []);
  const singleUser = async () => {
    const docRef = doc(db, "user", id);
    const snapshot = await getDoc(docRef);
    console.log("snapshot", snapshot.data());
    if (snapshot.exists()) {
      form.setFieldsValue({ ...snapshot.data() });
    }
  };
  const onSaveChanges = async (values) => {
    await updateDoc(doc(db, "user", id), { ...values });
    toast.success("Details Updated Successfully");
    navigate("/myaccount");
  };
  const onback = () => {
    navigate("/myaccount");
  };
  return (
    <div className="main-div">
      <div className="onback" onClick={onback}>
        <ArrowLeftOutlined /> Back
      </div>
      <div className="edit-sub-div">
        <p>Change Your Details :</p>
      </div>
      <div className="user-div">
        <div className="user-sub-div">
          <Form
            form={form}
            className="form-data"
            onFinish={onSaveChanges}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 14,
            }}
          >
            <Form.Item name="firstname" label="First Name">
              <Input />
            </Form.Item>
            <Form.Item name="lastname" label="Last Name">
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input />
            </Form.Item>
            <div style={{ textAlign: "center" }}>
              <Button htmlType="submit" className="savechanges-btn">
                Save Changes
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
