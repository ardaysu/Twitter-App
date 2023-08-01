import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

function BasicExample({ item }) {
  return (
    <Card
      style={{
        height: "100%",
        width: "100%",
        marginTop: "10px",
        marginLeft: "-20px",
      }}
    >
      <Card.Body>
        <Container>
          <Card.Img
            src={item?.avatar}
            className="card-img-top mx-auto mt-2 border 1px"
            style={{ maxWidth: "50px" }}
            alt="..."
          />
          <Card.Title style={{ fontSize: "13px", color: "#0d6efd" }}>
            {" "}
            {item?.username}
          </Card.Title>
        </Container>
        <Card.Text style={{ fontSize: "12px" }}>{item?.Tweet1}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
