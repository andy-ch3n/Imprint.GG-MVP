import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav.jsx'
import { Container, Button } from 'react-bootstrap'
import ConsoleButton from './ConsoleButton.jsx'



function App(props) {

  const [gamerTag, setGamerTag] = useState('')
  const [console, setConsole] = useState('')
  const [profile, setProfile] = useState([])
  const [profileExists, setProfileExists] = useState(false)
  const [radioValue, setRadioValue] = useState('');

  const radios = [
    {name: 'origin', value: 'pc'},
    {name: 'PSN', value: 'psn'},
    {name: 'Xbox', value: 'xbox'}
  ]



  useEffect(() => {
    // get request to the profile
  }, [console, profile])


  function handleSubmit(console, gamerTag) {
    axios.get(`/${console}/${gamerTag}/sessions`, {
      console: console,
      gamerTag: gamerTag,
    }).then((results) => {
        setProfile(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }


  function handleClick() {

  }

  const renderConsole = () => {
    // if (console === "") {
    //   return (
    //     <button></button>
    //   )
    // } else {
    //   return ( <button name="console" value={console} onClick={handleClick}>PC  </button>
    //   <button name="console" value={console} onClick={handleClick}>PSN  </button>
    //   <button name="console" value={console} onClick={handleClick}>XBOX  </button>
    //   )
    // }
  }


  return (
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
