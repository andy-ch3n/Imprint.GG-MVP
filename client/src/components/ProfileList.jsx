import React from 'react'
import Profile from './Profile.jsx'

function ProfileList(props) {

  return (
    (props.data.data !== undefined) ?
      <div>
        {
        props.data.data.items.map(item => (
          <Profile name1={props.name} item={item} />
        ))}
      </div> : <h1 className="center">Retrieving stats for {props.name}...</h1>
  )
}




export default ProfileList