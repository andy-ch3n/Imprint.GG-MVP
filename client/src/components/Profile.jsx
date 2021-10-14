import React, { useState } from 'react'
import { Row, Col, Container} from 'react-bootstrap'
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
    <div id="main">
      <a href="main"></a>
      <Container>
      <Row>
      <h1 className="center-up">{props.name1}</h1>
      <Col >
      <div className="center-z">
      <p className="information">Level: {props.item && props.item.matches[0].stats.level.value}</p>
      <p className="information">{props.item.matches[0].stats.rankScore.metadata.rankScoreInfo.name} </p>
      <img src={props.item.matches[0].stats.rankScore.metadata.rankScoreInfo.image} />
      <p className="information">Lifetime Kills: {props.kills}</p>
      <p className="information">Top Percentile Kills: {props.percentileKills}%</p>
      <p className="information">Season 7 Kills: {props.seasonKills}</p>
      </div>
      </Col>
      <Col>
        <div>{youtube()}</div>
        </Col>
      <Col >
      <div className="center-z">
      <p className="information"> Most Played Character: </p>
      <p className="character">{props.item.matches[0].metadata.character.displayValue}</p>
      <img className="photo" src={props.item.matches[0].metadata.characterIconUrl.value}/>
      </div>
      </Col>
      </Row>
    </Container>
    </div>
  )

}

export default Profile;
