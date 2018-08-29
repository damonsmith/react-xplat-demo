import * as React from 'react'
import { style } from 'typestyle'
import { StateStore } from '../../base/state/StateStore'
import { observer } from 'mobx-react'
import { SubHeader } from '../../styleguide/tsx_web/SubHeader'

const homeContentStyle = style({
	margin: '2rem'
})

interface Props {
	appState: StateStore
	routeParams?: {
		deviceId: string
	}
}

@observer
export class Device extends React.Component<Props, {}> {

	componentWillMount() {

		const deviceId = this.props.routeParams ? this.props.routeParams.deviceId : undefined
	}

	render() {
		const device = this.props.appState.devices.selected
		if (device) {
			return (
				<div>
					<SubHeader text={`Device: ${device.nickname}`} />
				</div>
			)
		}
		else {
			return (<div> Loading </div>)
		}
	}
}
