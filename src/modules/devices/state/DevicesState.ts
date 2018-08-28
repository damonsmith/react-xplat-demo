import { action, observable } from 'mobx'
import { APIClient } from '../../apiclient'

export interface Device {
	id: string
	nickname: string
	type: string
	poweredOn: boolean
	operating: boolean
}

export class DevicesState {

	@observable selected: Device
	@observable list: Device[]

	constructor(private api: APIClient) {
		this.list = [
			{
				id: "127",
				nickname: "70s stereo",
				type: "amplifier",
				poweredOn: true,
				operating: false
			},
			{
				id: "224",
				nickname: "Lounge TV",
				type: "TV",
				poweredOn: true,
				operating: false
			}
		]
	}

	getDevices() {
	}

	@action select = (deviceId: string) => {
	}
}
