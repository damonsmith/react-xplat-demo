import * as React from 'react'
import { registerServiceWorker } from './registerServiceWorker'
import { embedFonts } from '../../styleguide'
import { HomePage } from '../../home'
import { Devices, Device } from '../../devices'
import { Account } from '../../account'
import { observer } from 'mobx-react'
import { AppLayout } from './AppLayout'
import { Header } from '../../header'
import { StateStore } from '../state/StateStore'
import { Route } from '../../router'
import '../style/app.css'

@observer
export class BaseApplication extends React.Component<{appState: StateStore}, {}> {

	componentWillMount() {
		embedFonts()
		registerServiceWorker()
	}

	render() {
		console.log(this.props.appState.location)
			return (
				<AppLayout
					header={<Header appState={this.props.appState} />}
					content={(
						<div>
							<Route path="/" router={this.props.appState.router}><HomePage appState={this.props.appState} /></Route>
							<Route path="/account" router={this.props.appState.router}><Account appState={this.props.appState} /></Route>
							<Route path="/devices" router={this.props.appState.router}><Devices appState={this.props.appState} /></Route>
							<Route path="/device/:deviceId" router={this.props.appState.router}><Device appState={this.props.appState} /></Route>
						</div>
					)}
					footer={<div />}
				/>
			)
	}
}
