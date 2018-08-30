import * as React from 'react'
import { View } from 'react-native'
import { navigate } from '../src/Router'

interface LinkProps {
	to: string
}

export class Link extends React.Component<LinkProps, {}> {

	click = (event: any) => {
		navigate(this.props.to)
		event.preventDefault()
		return false
	}

	render(): JSX.Element {
		return (<View onTouchEnd={this.click}>{this.props.children} </View>)
	}
}
