import { action, observable } from 'mobx'

export interface Device {
	id: string
	nickname: string
	type: string
	poweredOn: boolean
	operating: boolean
}

export class DevicesState {

	@observable selected: Device | null = null
	@observable list: Device[]

	constructor() {
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
			},
			{
				id: "123",
				nickname: "Blender",
				type: "kitchen",
				poweredOn: false,
				operating: false
			}
		]
	}

	getDevices() {
	}

	@action select = (deviceId: string) => {
	}
}
