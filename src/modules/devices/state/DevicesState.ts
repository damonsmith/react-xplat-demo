import { action, observable } from 'mobx'
import { FormFieldState } from '../../styleguide/state/FormFieldState'

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

	@observable newNickname: FormFieldState
	@observable newType: FormFieldState

	constructor() {

		this.newNickname = new FormFieldState()
		this.newType = new FormFieldState()

		this.list = [
			{
				id: "127",
				nickname: "70s stereo",
				type: "stereo",
				poweredOn: true,
				operating: false
			},
			{
				id: "224",
				nickname: "Lounge TV",
				type: "tv",
				poweredOn: true,
				operating: false
			},
			{
				id: "123",
				nickname: "Blender",
				type: "blender",
				poweredOn: false,
				operating: false
			}
		]
	}

	getDevices() {
	}

	@action addDevice() {
		const newDevice = {
			id: "321",
			nickname: this.newNickname.value,
			type: this.newType.value,
			poweredOn: false,
			operating: false
		}
		this.list.push(newDevice)

		this.newNickname.reset()
		this.newType.reset()
	}

	@action select = (deviceId: string) => {
		this.list.filter(device => device.id === deviceId).forEach(device => device.poweredOn = !device.poweredOn)
	}
}
