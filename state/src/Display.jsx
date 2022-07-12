import React from 'react'

export default function Display(props) {
	// props.text = 'Changed the prop' -> this is not allowed ❌
	// props are read only
	console.log('render display')
	return (
		<h1>{props.number}</h1>
	)
}
