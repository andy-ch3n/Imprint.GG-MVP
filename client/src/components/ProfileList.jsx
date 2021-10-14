import React from 'react'
import Profile from './Profile.jsx'
import Banner from 'react-js-banner'
import {Line} from 'react-chartjs-2';


function ProfileList(props) {

  const randomNum = Math.floor(Math.random() * 200)
  const randomNum1 = Math.floor(Math.random() * 400)
  const randomNum2 = Math.floor(Math.random() * 600)
  const randomNum3 = Math.floor(Math.random() * 1000)



  console.log(props.data)
  const state = {
    labels: ['Bronze', 'Silver', 'Gold',
             'Platinum', 'Diamond'],
    datasets: [
      {
        label: 'Rank',
        fontColor: 'black',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(0,0,0)',
        borderColor: 'rgba(0,0,0)',
        pointBackgroundColor: 'rgba(0,0,0)',
        pointBorderColor: 'rgba(0,0,0)',
        borderWidth: 2,
        data: [props.rank1, randomNum, randomNum1, randomNum2, randomNum3]
      }
    ],
    options: {
      legend: {
        fontColor: "black"
      },
      scales: {
        gridLines: "black",
          xAxes: [{
            tickets: {
              fontColor: "black"
            }
          }],
          yAxes: {
              beginAtZero: true,
              fontColor: 'black',
              color: 'black',
              grindLines: 'black'

          }
      }
   }
  }

  return (


    (props.data.data !== undefined) ?
      <div>
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