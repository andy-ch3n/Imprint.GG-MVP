import React from 'react'
import Profile from './Profile.jsx'
import Banner from 'react-js-banner'
import {Line} from 'react-chartjs-2';


function ProfileList(props) {

  const state = {
    labels: ['Bronze', 'Silver', 'Gold',
             'Platinum', 'Diamond'],
    datasets: [
      {
        label: 'Rank',
        fontColor: 'black',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: '#000000',
        pointBackgroundColor: "#00000"
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ],
    options: {
      scales: {
          y: {
              beginAtZero: true
              fontColor: 'black'
          }
      }
  }
  }

  return (

    (props.data.data !== undefined) ?
      <div>
          <Banner
        title="Apex Legends"
        imageClass="banner"
        className="banner"
        />
        <br/>
        <div className="line-graph">
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rank Progression',
              fontSize:10
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        {
        props.data.data.items.slice(0,1).map(item => (
          <Profile kills={props.kills} percentileKills={props.percentileKills} seasonKills={props.seasonKills} name1={props.name} item={item} />
        ))}
      </div> : <h1 className="center">Retrieving stats for {props.name}...</h1>
  )
}




export default ProfileList