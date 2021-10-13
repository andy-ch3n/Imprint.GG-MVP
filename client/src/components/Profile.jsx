import React, { useState } from 'react'
import { Row, Col, Container} from 'react-bootstrap'
import Banner from 'react-js-banner'




function Profile(props) {

  return (
    <div>
      <Banner
        title="This is an example banner with CSS and Image"
        imageClass="banner"
        className="banner"
        />
        <br/>
      <h1 className="center-up">{props.name1}</h1>
        <Container>
          <Row>
      <Col>
      <h2>{props.item.matches[0].stats.rankScore.metadata.rankScoreInfo.name} </h2>
      <img src={props.item.matches[0].stats.rankScore.metadata.rankScoreInfo.image} />
      </Col>
      <Col xs={6}>
      <h2 className="padding"> Played Character {props.item.matches[0].metadata.character.displayValue} </h2>
      <img src={props.item.matches[0].metadata.characterIconUrl.value}/>
      </Col>
      <Col xs={5}>
      </Col>
      </Row>
    </Container>
    </div>
  )

}

export default Profile;
