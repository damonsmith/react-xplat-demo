import * as React from 'react'
import { Text, TextProperties } from 'react-native'

interface TxtProps {
	children: string
}

export function Txt(props: TxtProps): JSX.Element {
	return (<Text style={{color: "#fff"}}>{props.children}</Text>)
}
