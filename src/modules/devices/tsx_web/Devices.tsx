import * as React from 'react'
import { StateStore } from '../../base/state/StateStore'
import { observer } from 'mobx-react'
import { SubHeader } from '../../styleguide/tsx_web/SubHeader'
import { ListButton } from '../../styleguide/tsx_web/ListButton'

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
				{deviceList.map(device => <ListButton key={device.id} icon="" text={device.nickname} clickHandler={() => appState.devices.select(device.id)}/>)}
				<SubHeader text={'Add new'} />

			</div>
		)
	}
}
