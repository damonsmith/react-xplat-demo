import * as React from 'react'
import { Router, navigate } from './Router'
interface RedirectProps {
	path: string
	router: Router
}

export class Redirect extends React.Component<RedirectProps, {}> {

	constructor(props: RedirectProps) {
		super(props)
	}

	render() {
		setTimeout(() => navigate(this.props.path), 0)
		return null
	}
}
