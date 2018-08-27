import * as React from "react"
import { Route } from "./Route"
import RouteRecognizer, { Results, Result } from "route-recognizer"

// This is a global list of Router instances that we need because there's
// no window event for pushstate. So we tell any routers that the window location
// has changed
const routers: Router[] = []

export function navigate(to: string) {
	window.history.pushState(null, "", to)
	routers.forEach(router => router._locationChanged(to))
}

export class Router {

	private recognizer = new RouteRecognizer()
	activeRoutes: Result[] = []

	constructor(private locationChangeHandler?: (to: string) => void) {
		window.addEventListener('popstate', event => this._locationChanged(window.location.pathname))
		routers.push(this)
	}

	public addRoute(route: Route) {
		this.recognizer.add([{ path: route.getPath(), handler: route }])
		this.activeRoutes = this.generateActiveRoutesFromRecognizerResults(window.location.pathname)
	}

	_locationChanged(to: string) {
		this.activeRoutes = this.generateActiveRoutesFromRecognizerResults(to)
		if (this.locationChangeHandler) {
			this.locationChangeHandler(to)
		}
	}

	private generateActiveRoutesFromRecognizerResults(to: string): Result[] {
		const routeResults = this.recognizer.recognize(to)
		const newActives: Result[] = []
		if (routeResults) {
			for (let i = 0; i < routeResults.length; i++) {
				const result = routeResults[i]
				if (result) {
					newActives.push(result)
				}
			}
		}
		return newActives
	}
}
