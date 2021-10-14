import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Button, Row, Col, Alert, Alerts } from 'react-bootstrap'
import ConsoleButton from './ConsoleButton.jsx'
import ProfileList from './ProfileList.jsx'
import IndividualList from './IndividualList.jsx'
import Individual from './Individual.jsx'




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

  const radios = [
    { name: 'origin', value: 'origin' },
    { name: 'PSN', value: 'psn' },
    { name: 'Xbox', value: 'xbox' }
  ]



  useEffect(() => {

    // get request to the profile
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
  }

  function getIndividualData(e) {
    axios.get(`/${radioValue}/${gamerTag}`).then((response) => {
      setIndividual(response.data.data.segments);
      setKills(response.data.data.segments[0].stats.kills.value)
      setPercentileKills(response.data.data.segments[0].stats.kills.percentile)
      sets7kills(response.data.data.segments[0].stats.season7Kills.displayValue)
    })
  }

  return (
    <>
      {
        profileExists ?
          <div>
            <ProfileList kills={kills} percentileKills={percentileKills} name={gamerTag} data={profile} seasonKills={s7kills} />
            <IndividualList individualData={individual} />
          </div>
          :
          <div className="pg-background">
            <span className="nav">Imprint.gg</span>
            <span className="nav-right">Apex Legends</span>
            <form onSubmit={() => handleSubmit} className="center" id="form">
              <ConsoleButton radValue={radioValue} setRadio={setRadioValue} />
              <input className="input" type="text" name="gamertag" id="gamertag"
                value={gamerTag} placeholder="Enter Origin Username..." onChange={e => setGamerTag(e.target.value)}></input>
              <button onClick={handleSubmit} className="button">Submit</button>
            </form>
          </div>
      }
    </>
  )

}

export default App;
