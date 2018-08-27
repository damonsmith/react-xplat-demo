import * as React from 'react'
import { style } from 'typestyle'
import { StateStore } from '../../base'
import { observer } from 'mobx-react'
// import { Redirect } from 'react-router-dom'

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
		return (
			<div className={topStyle}>
				<h1>Logged in as: {appState.login.displayName} - {appState.login.email}</h1>
				<div onClick={this.props.appState.login.signOut}>Log out</div>
			</div>
		)
	}
}
