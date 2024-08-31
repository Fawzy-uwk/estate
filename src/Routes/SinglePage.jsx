import {
  FaBath,
  FaBed,
  FaBookmark,
  
  FaHandHoldingUsd,
  FaMapPin,
  FaPaw,
  FaSchool,
  FaTools,
  FaExpand,
} from "react-icons/fa";
import { toast } from "react-hot-toast";

import Slider from "../Components/Swiper";
import Map from "../Components/Map";
import {
  formatCurrency,
  singlePostData,
  userData,
  userListData,
} from "../Lib/Dummy";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";

function SinglePage() {
  const { id } = useParams();
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState(userListData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const post = singlePostData.find((post) => post.id === parseInt(id));
        if (post) {
          setSelectedPost(post);
        } else {
          console.error("Post not found");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleSave = (id) => {
    const selectedPost = singlePostData.find((post) => post.id === id);
    if (selectedPost) {
      setUserList([...userList, selectedPost]); // add the selected property to the user's list
      toast.success("Post saved successfully ");
      // Update the userListData array manually
      userListData.push(selectedPost);
    } else {
      toast.error("Something went wrong ");
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-screen">
        <HashLoader className="h-full w-full" color="#d1b899" />
      </div>
    );
  }

  if (!selectedPost) {
    return <div>Estate not found</div>;
  }
  return (
    <div className="singlePage p-2">
      <div className="details">
        <div className="wrapper">
          <Slider images={selectedPost.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{selectedPost?.title}</h1>
                <div className="address">
                  <FaMapPin size={22} />
                  <span>{selectedPost?.address}</span>
                </div>
                <div className="price">
                  {formatCurrency(selectedPost?.price)}
                </div>
              </div>
              <div className="user">
                <img src={userData?.img} alt="" />
                <span>{userData?.name}</span>
              </div>
            </div>
            <div className="bottom">{selectedPost?.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <FaTools size={26} color="#d1b899" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <FaPaw size={26} color="#d1b899" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <FaHandHoldingUsd size={26} color="#d1b899" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <FaExpand size={26} color="#d1b899" />
              <span>{selectedPost.size} FT</span>
            </div>
            <div className="size">
              <FaBed size={26} color="#d1b899" />
              <span>{selectedPost.bedRooms} Bedrooms</span>
            </div>
            <div className="size">
              <FaBath size={26} color="#d1b899" />
              <span>{selectedPost.bathroom} Bathrooms</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal flex-wrap">
            <div className="feature">
              <FaSchool size={26} color="#d1b899" />
              <div className="featureText">
                <span>School</span>
                <p>{selectedPost.school}</p>
              </div>
            </div>
            <div className="feature">
              <FaPaw size={26} color="#d1b899" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{selectedPost.bus}</p>
              </div>
            </div>
            <div className="feature">
              <FaHandHoldingUsd size={26} color="#d1b899" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{selectedPost.restaurant}</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map data={[selectedPost]} />
          </div>
          <div className="buttons">
            <button onClick={() => handleSave(selectedPost.id)}>
              <FaBookmark size={26} color="#d1b899" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
