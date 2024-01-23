import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Upload, message } from "antd";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import { routeNames } from "constants/pageRoutes.constants";
import { editDetails, setUserDetails } from "store/User/slice";

const beforeUpload = (file) => {
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isLt2M;
};

function EditUser() {
  const [form] = Form.useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.user.userDetails);
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    form.setFieldsValue(userDetails);
    setImageUrl(userDetails.image);
    // eslint-disable-next-line
  }, []);

  const handleEditDetails = (values) => {
    dispatch(
      setUserDetails({
        ...values,
        id: userDetails.id,
        image: imageUrl,
      })
    );
    dispatch(editDetails({ values, index: id, image: imageUrl }));
    toast.success("Details Updated Successfully");
    navigate(routeNames.MyAccount);
  };

  const handleBack = () => {
    navigate(routeNames.MyAccount);
  };

  const normFile = (e) => {
    return e?.file;
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleChangeImage = (info) => {
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
      });
    }
  };

  return (
    <div>
      <Button
        shape="circle"
        type="text"
        className="on-back"
        icon={<ArrowLeftOutlined />}
        onClick={handleBack}
      />
      <div className="edit-sub-div">
        <p>Change Account Details :</p>
      </div>
      <div className="user-div">
        <div className="user-sub-div">
          <Form
            form={form}
            className="form-data"
            onFinish={handleEditDetails}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
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
            <Form.Item
              label="Upload"
              valuePropName="file"
              getValueFromEvent={normFile}
              name="image"
            >
              <Upload
                name="avatar"
                listType="picture-card"
                showUploadList={false}
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                onChange={handleChangeImage}
                beforeUpload={beforeUpload}
                accept="image/png, image/svg+xml, image/jpeg, image/jpg"
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  <UploadOutlined />
                )}
              </Upload>
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
