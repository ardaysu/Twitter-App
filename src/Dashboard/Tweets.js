import React, { useState } from "react";
import Tweet from "../components/Tweet";
import Card from "react-bootstrap/Card";
import img from "../components/img/xlogo.jpg";
import Button from "react-bootstrap/Button";

const Tweets = ({ database }) => {
  const [visibleTweets, setVisibleTweets] = useState(4);
  const handleLoadMore = () => {
    setVisibleTweets((prev) => prev + 4);
  };
  return (
    <div align="center">
      <Card.Img
        src={img}
        className="card-img-top mx-auto mt-2 border 1px"
        style={{
          maxWidth: "50px",
          marginBottom: "5px",
          marginTop: "1x",
          borderRadius: "7px",
        }}
        alt="..."
      />

      <ul className="tweet-list">
        {database.slice(0, visibleTweets).map((item) => (
          <Tweet item={item} />
        ))}
      </ul>
      {visibleTweets < database.length && (
        <Button variant="primary" onClick={handleLoadMore}>
          Daha Fazla Yükle
        </Button>
      )}
    </div>
  );
};

export default Tweets;
