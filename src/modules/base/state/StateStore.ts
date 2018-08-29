import { DevicesState } from '../../devices/state/DevicesState'
import { AccountState } from '../../account/state/AccountState'
import { Router } from '../../router/src/Router'
import { observable, action } from 'mobx'

export class StateStore {

	account: AccountState
	router: Router

	@observable location: string = ""
	@observable devices: DevicesState

	@action onLocationChange = (to: string): void => {
		this.location = to
	}

	constructor() {
		this.account = new AccountState()
		this.router = new Router(this.onLocationChange)
		this.devices = new DevicesState()
	}
}
