import React, { useState } from 'react'
import { Row, Col, Container} from 'react-bootstrap'
import Individual from './Individual.jsx'
import ReactPlayer from "react-player";





function Profile(props) {

  const character = props.item.matches[0].metadata.character.displayValue

  const youtube = () => {
    if (character === "Loba") {
      return (
        <>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=hn5fF0MQGtw&ab_channel=IGN"
        />
        </>
      )
    } else if (character === "Bloodhound") {
      return (
        <>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=euWTbVdRGv0&ab_channel=ApexLegends"
        />
        </>
      )
  } else if (character === "Octane") {
    return (
      <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=aOdTqvcEaZ8&ab_channel=ApexLegends"
      />
      </>
    )
  } else if (character === "Pathfinder") {
    return (
      <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=aOdTqvcEaZ8&ab_channel=ApexLegends"
      />
      </>
    )
  } else if (character === "Wraith") {
    return (
      <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=bglAJajZFx4&ab_channel=ApexLegends"
      />
      </>
    )
  }
}

  return (
    <div className="padding">
      <Container>
      <Row>
      <h1 className="center-up">{props.name1}</h1>
      <h3>Level: {props.item && props.item.matches[0].stats.level.value}</h3>
      <Col>
      <h3>{props.item.matches[0].stats.rankScore.metadata.rankScoreInfo.name} </h3>
      <img src={props.item.matches[0].stats.rankScore.metadata.rankScoreInfo.image} />
      <h2>Lifetime Kills: {props.kills}</h2>
      <h2>Top Percentile Kills: {props.percentileKills}%</h2>
      <h2>Season 7 Kills: {props.seasonKills}</h2>
      </Col>
      <Col xs={4}>
        <h3>test</h3>
        </Col>
      <Col xs={3}>
      <h3> Most Played Character: {props.item.matches[0].metadata.character.displayValue} </h3>
      <img className="photo" src={props.item.matches[0].metadata.characterIconUrl.value}/>
      <h1>{youtube()}</h1>
      </Col>
      </Row>
    </Container>
    </div>
  )

}

export default Profile;
