import { action, observable } from 'mobx'
import { APIClient } from '../../apiclient'

export interface Device {
	id: string
	owner: string
	nickname: string
	type: string
	currentTemp: number
	poweredOn: boolean
	operating: boolean
}

export class DeviceState {
	@observable list: Device[]

	@observable selected: Device

	api: APIClient

	loginState: LoginState

	constructor(api: APIClient, loginState: LoginState) {
		this.list = []
		this.loginState = loginState
		this.api = api
	}

	getDevices() {
	}

	@action select = (deviceId: string) => {
	}
}
