import * as React from 'react'
import { style } from 'typestyle'
import { Colors } from '../colors'
const topStyle = style({
	display: 'flex',
	padding: '2rem',
	backgroundColor: Colors.secondaryBrandColor,
	backgroundSize: '2rem'
})

const headerStyle = style({
	backgroundColor: 'black',
	color: 'white',
	padding: '1rem'
})

interface Props {
	text: string
}

export function SubHeader(props: Props): JSX.Element {
	return (
		<div className={topStyle}>
			<h1 className={headerStyle}>{props.text}</h1>
		</div>
	)
}
