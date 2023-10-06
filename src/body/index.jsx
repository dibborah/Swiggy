import React, { useEffect, useState } from "react";
import "./style.css";
import Axios from "axios";
import { Spin } from "antd";
import { Content } from "antd/es/layout/layout";
import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";

export default function Index() {
  const [images, setImages] = useState([]);
  const [check, setCheck] = useState(true);

  const fetchAPI = async () => {
    const response = await Axios.get(
      "https://api.unsplash.com/photos/?client_id=uqr-0EE5-49f0cQTQEnmvP7RhmFMqc_Smdtgj0EUxMs"
    );
    console.log(response.data);
    const data = await response.data;
    setImages(data);
    setCheck(false);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  useEffect(() => {}, [check]);

  return (
    <>
      {/* for this main__Container use grid */}
      <section className="main__Container" id="main">
        {/* for this productlist use flex */}
        {check ? (
          <Spin className="spinner" />
        ) : (
          <div className="product-list">
            {images?.map((item, key) => (
              <div className="below__Section" key={key}>
                <img src={item.urls.small} alt="Unsplash Images" />
                <div className="desc1">
                  <div className="title">
                    <h1>{item.user.username}</h1>
                  </div>

                  <div className="price">
                    <p>Rs {item.likes + 100}</p>
                  </div>
                </div>

                <div className="desc2">
                  <div className="rating">
                    <span>
                      <StarFilled style={{ color: "#fc8019" }} />
                      <StarFilled style={{ color: "#fc8019" }} />
                      <StarFilled style={{ color: "#fc8019" }} />
                      <StarFilled style={{ color: "#fc8019" }} />
                      <StarFilled style={{ color: "#fc8019" }} />
                    </span>
                  </div>

                  <div className="button">
                    <button>Add To Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
