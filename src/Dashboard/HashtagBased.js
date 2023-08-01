import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const HashtagBased = ({ database }) => {
  const hashtags = [...new Set(database.map((item) => item.hashtag))];
  const [selectedHashtag, setSelectedHashtag] = useState(hashtags[0]);
  const filteredData = database.filter(
    (item) => item.hashtag === selectedHashtag
  );

  return (
    <Card style={{ width: "100%", marginTop: "10px", border: "2px" }}>
      <div>
        <Card.Header
          style={{ marginBottom: "10px", color: "white" }}
          className="bg-primary"
        >
          <i class="bi bi-hash"></i>Hashtag seçiniz
        </Card.Header>
        <Form.Select
          value={selectedHashtag}
          className="border border-primary"
          onChange={(e) => setSelectedHashtag(e.target.value)}
        >
          {hashtags.map((hashtag) => (
            <option key={hashtag} value={hashtag}>
              # {hashtag}
            </option>
          ))}
        </Form.Select>
        <div
          style={{
            overflow: "auto",
            maxHeight: "200px",
            whiteSpace: "pre-wrap",
          }}
        >
          {filteredData.map((item) => (
            <Card.Body>
              <Card.Img
                src={item?.avatar}
                className="card-img-top mx-auto mt-2 border 1px"
                style={{ maxWidth: "30px" }}
                alt="..."
              />
              <Card.Title style={{ fontSize: "13px" , color:"#0d6efd"}}>
                {item?.username}
              </Card.Title>

              <Card.Text style={{ fontSize: "13px" }}>
                {item?.Tweet1}
                {item.Tweet2}
              </Card.Text>
            </Card.Body>
          ))}{" "}
        </div>
      </div>
    </Card>
  );
};

export default HashtagBased;
