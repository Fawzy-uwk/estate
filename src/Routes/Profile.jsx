
import List from "../Components/List";
import Map from "../Components/Map";
import { userData, userListData } from "../Lib/Dummy";

function Profile() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={userData.img} alt="" />
            </span>
            <span>
              Username: <b>{userData.name}</b>
            </span>
            <span>
              E-mail: <b>{userData.email}</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
          </div>
          <div>
            <List data={userListData} />
            
          </div>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Map data={userListData} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
