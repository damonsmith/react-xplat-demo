import * as React from 'react'
import { style } from 'typestyle'
import { StateStore } from '../../base'
import { observer } from 'mobx-react'
import { SubHeader, ListButton } from '../../styleguide'
import { navigate } from '../../router'

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
			<div>
				<SubHeader text={`Devices`} />
				{deviceList.forEach((device) => <ListButton icon="" text={device.nickname} clickHandler={() => appState.devices.select(device.id)}/>)}
			</div>
		)
	}
}
