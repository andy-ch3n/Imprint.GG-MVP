import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Button, Row, Col, Alert, Alerts, Navbar } from 'react-bootstrap'
import ConsoleButton from './ConsoleButton.jsx'
import ProfileList from './ProfileList.jsx'



function App(props) {

  const [gamerTag, setGamerTag] = useState('')
  const [console, setConsole] = useState('')
  const [profile, setProfile] = useState([])
  const [individual, setIndividual] = useState([])
  const [kills, setKills] = useState('')
  const [percentileKills, setPercentileKills] = useState('')
  const [profileExists, setProfileExists] = useState(false)
  const [radioValue, setRadioValue] = useState('');
  const [s7kills, sets7kills] = useState('');
  const [rank1, setRank1] = useState('');
  const [rank2, setRank2] = useState('');
  const [rank3, setRank3] = useState('');

  const radios = [
    { name: 'origin', value: 'origin' },
    { name: 'PSN', value: 'psn' },
    { name: 'Xbox', value: 'xbox' }
  ]



  useEffect(() => {
  }, [profileExists])


  function handleSubmit(e) {
    e.preventDefault()
    axios.get(`/${radioValue}/${gamerTag}/sessions`).then((response) => {
      setProfile(response.data);
    }).then(setProfileExists(true))
      .catch((err => {
        setProfileExists(false)
        setGamerTag('')
        alert('username is invalid')
      }))
    getIndividualData()
    var myLink = document.getElementById('main');
    myLink.click()
  }

  function getIndividualData(e) {
    axios.get(`/${radioValue}/${gamerTag}`).then((response) => {
      setIndividual(response.data.data.segments);
      setKills(response.data.data.segments[0].stats.kills.value)
      setPercentileKills(response.data.data.segments[0].stats.kills.percentile)
      sets7kills(response.data.data.segments[0].stats.season7Kills.displayValue)
      setRank1(response.data.data.segments[0].stats.rankScore.displayValue)
      setRank2(response.data.data.segments[1].stats.rankScore.displayValue)
      setRank3(response.data.data.segments[2].stats.rankScore.displayValue)
    })
  }
  return (
    <>
      {
        profileExists ?
          <div>
            <nav>
              <Col>
                </Col>
                  <Col className="text-center">
                    <h1 className="nav-header">Imprint.GG Apex Tracker for {gamerTag}</h1>
                  </Col>
                  <Col>
                    </Col>
                    </nav>
                    <div>
                      <img className="banner" src="banner.jpg"></img>
                      <a className="centeredtext" href="#main">Ready, steady, go!</a>
                    </div>
                    <ProfileList kills={kills} percentileKills={percentileKills} name={gamerTag} data={profile} seasonKills={s7kills} rank1={rank1} rank2={rank2} rank3={rank3} />
                  </div>
                  :
                  <div className="pg-background">
                    <span className="nav">Imprint.gg</span>
                    <span className="nav-right">Apex Legends</span>
                    <form onSubmit={() => handleSubmit} className="center" id="form">
                      <ConsoleButton radValue={radioValue} setRadio={setRadioValue} />
                      <input className="input" type="text" name="gamertag" id="gamertag"
                        value={gamerTag} placeholder="Enter Origin Username..." onChange={e => setGamerTag(e.target.value)}></input>
                      <Button onClick={handleSubmit} variant="dark" className="button">Submit</Button>
                    </form>
                  </div>
      }
                </>
                )

}

                export default App;
