import React from 'react'

function IndividualList(props) {


  if (props.individualData[0]) {
  console.log(props.individualData && props.individualData[0])
  } else {
    console.log('no data')
  }

  return (
      <>
      <div>
       {/* <h1> {props.individualData && props.individualData[0]} </h1>
       <div> Total lifetime kills {props.individualData[0].stats.kills.value} </div>
       <h2> Percentile of players {props.individualData[0].stats.kills.percentile} </h2>
       <h2> Season 7 kills {props.individualData[0].stats.season7Kills.value}</h2> */}
        </div>
       </>
   )
}




export default IndividualList