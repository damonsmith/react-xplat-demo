import * as React from 'react'
import { registerServiceWorker } from './registerServiceWorker'
import { embedFonts } from '../../styleguide/font'
import { Devices } from '../../devices/tsx_web/Devices'
import { Account } from '../../account/tsx_web/Account'
import { Login } from '../../account/tsx_web/Login'
import { observer } from 'mobx-react'
import { AppLayout } from './AppLayout'
import { Header } from '../../header'
import { StateStore } from '../state/StateStore'
import { Route } from '../../router/src/Route'
import '../../styleguide/tsx_web/app.css'

const appState = new StateStore()

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
						<Route path="/" router={this.props.appState.router}><Devices appState={this.props.appState} /></Route>
						<Route path="/login" router={this.props.appState.router}><Login appState={this.props.appState} /></Route>
						<Route path="/account" router={this.props.appState.router}><Account appState={this.props.appState} /></Route>
					</div>
				)}
				footer={<div />}
			/>
		)
	}
}
