import * as React from 'react'
import { Router } from './Router'

interface RouteProps {
	path: string
	router: Router
}

export class Route extends React.Component<RouteProps, {}> {

	getPath(): string {
		return this.props.path
	}

	constructor(props: RouteProps) {
		super(props)
		props.router.addRoute(this)
	}

	render() {
		const result = this.props.router.activeRoutes.filter(result => result.handler === this)[0]

		if (result) {
			const child = React.cloneElement(React.Children.only(this.props.children), { routeParams: result.params })
			return child
		}
		else {
			return null
		}
	}
}
