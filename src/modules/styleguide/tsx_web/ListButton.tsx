import * as React from 'react'
import { style } from 'typestyle'

const itemStyle = style({
	padding: '1rem',
	margin: '0 0 2rem 0',
	display: 'flex',
	backgroundColor: 'white',
	color: 'black',
	justifyContent: 'space-between',
	boxShadow: '0 0 0.25rem #999',
	cursor: 'pointer',
	$nest: {
		'&:active': {
			backgroundColor: '#ddf'
		}
	}
})

const selectedStyle = style({
	border: "2px solid black"
})

const itemTextStyle = style({
	margin: 'auto 0'
})

const iconSizes = {

	'small': style({
		width: '1.75rem',
		height: '1.75rem'
	}),

	'medium': style({
		width: '3rem',
		height: '3rem'
	}),

	'large': style({
		width: '5rem',
		height: '5rem'
	})
}

interface ListButtonProps {
	text: string
	icon: string
	clickHandler: (event?: any) => void
	iconSize?: 'small' | 'medium' | 'large'
}

export function ListButton(props: ListButtonProps): JSX.Element {
	const size = props.iconSize || 'small'
	return (
		<div className={itemStyle} onClick={props.clickHandler}>
			<div className={itemTextStyle}>{props.text}</div>
			<img src={props.icon} className={iconSizes[size]} />
		</div>)
}
