import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ExpCard(props) {
  return (
    <Card className="project-card-view">
      <div className="text-center"> {/* Center content horizontally */}
        <Card.Img style={{ width: "100px", margin: "auto" }} src={props.imgPath} alt="card-img" />
      </div>
      <Card.Body>
        <Card.Title style={{color:'rgb(155,126,172)'}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          {props.date}
        </Card.Text>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}

export default ExpCard;
