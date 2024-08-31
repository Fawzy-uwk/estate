// Card.js
import { Link } from "react-router-dom";
import { FaBath, FaBed, FaBookmark, FaMapPin, FaTrash } from "react-icons/fa";
import { formatCurrency, singlePostData, userListData } from "../Lib/Dummy";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

/*eslint-disable react/prop-types */

function Card({ item }) {
  const [userList, setUserList] = useState(userListData);

  useEffect(() => {
    // Update userListData when userList changes
    userListData.splice(0, userListData.length, ...userList);
  }, [userList]);

  const handleSave = (id) => {
    const selectedPost = singlePostData.find((post) => post.id === id);
    if (selectedPost) {
      if (userList.some((post) => post.id === id)) {
        // Post is already in the list, remove it
        setUserList(userList.filter((post) => post.id !== id));
        toast.success("Post removed successfully");
      } else {
        // Add the selected property to the user's list
        setUserList([...userList, selectedPost]);
        toast.success("Post saved successfully");
      }
    } else {
      toast.error("Something went wrong");
    }
  };

  const isSaved = userList.some((post) => post.id === item.id);

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <FaMapPin />
          <span>{item.address}</span>
        </p>
        <p className="price">{formatCurrency(item.price)}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <FaBed size={22} color="#d1b899" />
              <span>{item.bedRooms} bedroom</span>
            </div>
            <div className="feature">
              <FaBath size={22} color="#d1b899" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              {isSaved ? (
                <FaTrash onClick={() => handleSave(item.id)} />
              ) : (
                <FaBookmark onClick={() => handleSave(item.id)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
