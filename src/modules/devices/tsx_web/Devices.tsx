import * as React from 'react'
import { StateStore } from '../../base/state/StateStore'
import { observer } from 'mobx-react'
import { SubHeader } from '../../styleguide/tsx_web/SubHeader'
import { DeviceListItem } from './DeviceListItem'
import { FormField } from '../../styleguide/tsx_web/FormField'
import { style } from 'typestyle'

interface Props {
	appState: StateStore
}

const buttonStyle = style({
	padding: "0.76rem",
	margin: "1rem auto",
	display: "block",
	width: "12rem"
})

@observer
export class Devices extends React.Component<Props, {}> {

	componentWillMount() {
		this.props.appState.devices.getDevices()
	}

	render() {
		const { appState } = this.props
		const deviceList = appState.devices.list
		return (
			<div>
				<SubHeader text={`Devices`} />
				{deviceList.map(device => <DeviceListItem key={device.id} item={device}/>)}
				<SubHeader text={'Add new'} />
				<FormField label="name" field={appState.devices.newNickname}/>
				<FormField label="type" field={appState.devices.newType}/>
				<button className={buttonStyle} onClick={() => appState.devices.addDevice()}>Add</button>
			</div>
		)
	}
}
