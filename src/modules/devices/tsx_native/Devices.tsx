import * as React from 'react'
import { StateStore } from '../../base/state/StateStore'
import { observer } from 'mobx-react'
import { View, Button, StyleSheet } from 'react-native'
import { SubHeader } from '../../styleguide/tsx_native/SubHeader'
import { DeviceListItem } from './DeviceListItem'
import { FormField } from '../../styleguide/tsx_native/FormField'

interface Props {
	appState: StateStore
}

@observer
export class Devices extends React.Component<Props, {}> {

	componentWillMount() {
		this.props.appState.devices.getDevices()
	}

	render() {
		const { appState } = this.props
		const deviceList = appState.devices.list
		return (
			<View>
				<SubHeader text={`Devices`} />
				{deviceList.map(device => <DeviceListItem key={device.id} item={device}/>)}
				<SubHeader text={'Add new'} />
				<FormField label="name" field={appState.devices.newNickname}/>
				<FormField label="type" field={appState.devices.newType}/>
				<Button title="Add" onPress={() => appState.devices.addDevice()} />
			</View>
		)
	}
}
