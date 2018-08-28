import { DevicesState } from '../../devices'
import { AccountState } from '../../account'
import { Router } from '../../router'
import { APIClient } from '../../apiclient'
import { observable, action } from 'mobx'

export class StateStore {

	api: APIClient
	account: AccountState
	router: Router

	@observable location: string
	@observable devices: DevicesState

	@action onLocationChange = (to: string): void => {
		this.location = to
	}

	constructor() {
		this.api = new APIClient()
		this.account = new AccountState()
		this.router = new Router(this.onLocationChange)
		this.devices = new DevicesState(this.api)
	}
}
