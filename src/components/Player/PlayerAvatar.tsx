import React from 'react'

function PlayerAvatar(props:any) {
  return (
	<div className="players__avatar">
		<div><img src="https://i.imgflip.com/2/1hx7w7.jpg" alt="Face" className="players__avatar--image"/></div>
		<div>{props.avatar.name}</div>
		<div className="players__avatar--score">{props.avatar.score}</div>
	</div>
  )
}

export default PlayerAvatar
