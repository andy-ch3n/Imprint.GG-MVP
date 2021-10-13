import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Button, Row, Col} from 'react-bootstrap'
import ConsoleButton from './ConsoleButton.jsx'
import ProfileList from './ProfileList.jsx'




function App(props) {

  const [gamerTag, setGamerTag] = useState('')
  const [console, setConsole] = useState('')
  const [profile, setProfile] = useState([])
  const [profileExists, setProfileExists] = useState(false)
  const [radioValue, setRadioValue] = useState('');

  const radios = [
    {name: 'origin', value: 'origin'},
    {name: 'PSN', value: 'psn'},
    {name: 'Xbox', value: 'xbox'}
  ]



  useEffect(() => {
    // get request to the profile
  }, [profileExists])


  function handleSubmit(e) {
    e.preventDefault()
    axios.get(`/${radioValue}/${gamerTag}/sessions`).then((response) => {
        setProfile(response.data);
      }).then(setProfileExists(true))
      .catch((err) => {
        console.error(err);
      });
  }


  return (
    profileExists ?
    <ProfileList name={gamerTag} data={profile} setProfile={setProfile} /> :
    <div className="pg-background">
      <span className="nav">Imprint.gg</span>
      <span className="nav-right">Apex Legends</span>
      <form onSubmit={() => handleSubmit} className="center" id="form">
        <ConsoleButton radValue={radioValue} setRadio={setRadioValue}/>
        <input className="input" type="text" name="gamertag" id="gamertag"
        value={gamerTag} placeholder="Enter Origin Username..." onChange={e => setGamerTag(e.target.value)}></input>
        <button onClick={handleSubmit} className="button">Submit</button>
      </form>
    </div>
  )

}

export default App;
