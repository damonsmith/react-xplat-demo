import * as React from 'react'
import { style } from 'typestyle'
import { StateStore } from '../../base/state/StateStore'
import { observer } from 'mobx-react'
import { Redirect } from '../../router/src/Redirect'

const topStyle = style({
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	margin: '2rem'
})

interface Props {
	appState: StateStore
}

@observer
export class Account extends React.Component<Props, {}> {

	render() {
		const { appState } = this.props
		if (appState.account.isLoggedIn) {
			return (
				<div className={topStyle}>
					<h1>Logged in as: {appState.account.displayName} - {appState.account.email}</h1>
					<div onClick={this.props.appState.account.signOut}>Log out</div>
				</div>
			)
		}
		else {
			return <Redirect path="/login" router={appState.router} />
		}
	}
}
