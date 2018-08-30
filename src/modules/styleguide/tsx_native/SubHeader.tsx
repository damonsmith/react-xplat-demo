import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors } from '../colors'
import { Txt } from './Txt'
const style = StyleSheet.create({
	top: {
		height: 50,
		backgroundColor: Colors.secondaryBrandColor,
		alignItems: "flex-start"
	},
	header: {
		flex: 1,
		backgroundColor: '#000000',
		marginTop: 10,
		marginLeft: 16,
		width: 80,
		height: 25,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

interface Props {
	text: string
}

export function SubHeader(props: Props): JSX.Element {
	return (
		<View style={style.top}>
			<View style={style.header}><Txt>{props.text}</Txt></View>
		</View>
	)
}
