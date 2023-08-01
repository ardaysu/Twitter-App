import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const CityBased = ({ database }) => {
  const cities = [...new Set(database.map((item) => item.city))];
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const filteredData = database.filter((item) => item.city === selectedCity);

  return (
    <Card style={{ width: "100%", marginTop: "10px", border: "0px" }}>
      <Card.Header
        style={{ marginBottom: "10px", color: "white" }}
        className="bg-primary"
      >
        <i class="bi bi-geo-fill"></i>Şehir seçiniz
      </Card.Header>

      <Form.Select
        value={selectedCity}
        className="border border-primary"
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </Form.Select>

      <div
        style={{ overflow: "auto", maxHeight: "200px", whiteSpace: "pre-wrap" }}
      >
        {filteredData.map((item) => (
          <Card.Body>
            <Card.Img
              src={item?.avatar}
              className="card-img-top mx-auto mt-2 border 1px"
              style={{ maxWidth: "30px" }}
              alt="..."
            />
            <Card.Title style={{ fontSize: "13px",color:"#0d6efd" }}>
              {item?.username}
            </Card.Title>

            <Card.Text style={{ fontSize: "13px" }}>{item?.Tweet1}</Card.Text>
          </Card.Body>
        ))}
      </div>
    </Card>
  );
};

export default CityBased;
