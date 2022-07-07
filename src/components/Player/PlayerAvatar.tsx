import React from 'react'

function PlayerAvatar(props:any) {
  return (
	<div className="players__avatar">
		{props.avatar.name}
		{props.avatar.score}
	</div>
  )
}

export default PlayerAvatar
