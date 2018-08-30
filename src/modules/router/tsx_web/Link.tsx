import * as React from 'react'
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
		return (<a href={this.props.to} onClick={this.click}>{this.props.children} </a>)
	}
}
