import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors } from '../colors'
const style = StyleSheet.create({
	top: {
		display: 'flex',
		padding: '1rem',
		marginBottom: '0.6rem',
		backgroundColor: Colors.secondaryBrandColor
	},
	header: {
		backgroundColor: 'black',
		color: 'white',
		padding: '1rem'
	}
})

interface Props {
	text: string
}

export function SubHeader(props: Props): JSX.Element {
	return (
		<View style={style.top}>
			<View style={style.header}>{props.text}</View>
		</View>
	)
}
