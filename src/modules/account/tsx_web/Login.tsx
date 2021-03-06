import * as React from 'react'
import { style } from 'typestyle'
import { StateStore } from '../../base/state/StateStore'
import { observer } from 'mobx-react'
import { Colors } from '../../styleguide/colors'
import { Redirect } from '../../router/src/Redirect'
import { FormField } from '../../styleguide/tsx_web/FormField'

const loginModalStyle = style({
	display: 'flex',
	backgroundColor: Colors.modalBackground,
	flexDirection: 'column',
	height: '100%',
	margin: '0.6rem',
	padding: '0.6rem'
})

interface Props {
	appState: StateStore
}

@observer
export class Login extends React.Component<Props, {}> {
	render() {
		const { appState } = this.props
		if (appState.account.isLoggedIn) {
			console.log("redirecting to /account")
			return <Redirect path="/account" router={this.props.appState.router} />
		}
		else {
			return (
				<div className={loginModalStyle}>
					<h1>Log in</h1>
					<FormField label="username" field={appState.account.usernameField} />
					<FormField label="password" type="password" field={appState.account.passwordField} />
					<button onClick={appState.account.signIn}>Log in</button>
				</div>
			)
		}
	}
}
