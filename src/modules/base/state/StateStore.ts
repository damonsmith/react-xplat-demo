import { DeviceState } from '../../devices'
import { Router } from '../../router'
import { APIClient } from '../../apiclient'
import { observable, action } from 'mobx'

export class StateStore {

	api: APIClient
	devices: DeviceState
	router: Router
	@observable location: string

	@action onLocationChange = (to: string): void => {
		this.location = to
	}

	constructor() {
		this.api = new APIClient()
		this.router = new Router(this.onLocationChange)
		this.devices = new DeviceState(this.api)
	}
}
