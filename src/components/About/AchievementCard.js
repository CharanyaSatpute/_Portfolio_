import React from 'react';
import Card from "react-bootstrap/Card";

export default function AchievementCard(props) {
  return (
    <Card className="project-card-view">
      
      <Card.Body>
        <Card.Title style={{color:'rgb(155,126,172)'}}>{props.name} </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  )
}
