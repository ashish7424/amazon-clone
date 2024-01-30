import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Image } from "antd";
import user from "assets/png/user.png";
import AccountDetail from "components/AccountDetail";

function MyAccount() {
  const navigate = useNavigate();
  const userdetails = useSelector((state) => state.user.userDetails);

  const onEditDetails = (userdetails) => {
    navigate(`/edituser/${userdetails.id}`);
  };

  return (
    <div className="account-main">
      <div className="account">Account Details :</div>
      <div className="flex-justify-center">
        <div className="myaccount-box">
          <div>
            <div className="account-img">
              <Image
                src={userdetails.image ? userdetails.image : user}
                alt="profile-img"
                width={200}
                height={200}
                className="profile-img"
                preview={false}
              />
            </div>
            <div className="account-img">
              <Button
                className="edit-icon"
                onClick={() => onEditDetails(userdetails)}
              >
                Edit Details
              </Button>
            </div>
            <AccountDetail
              label="First Name"
              userDetail={userdetails.firstname}
            />
            <AccountDetail
              label="Last Name"
              userDetail={userdetails.lastname}
            />
            <AccountDetail label="Email" userDetail={userdetails.email} />
            <AccountDetail
              label="Password"
              userDetail={userdetails.password}
              classname="account-last-col"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
