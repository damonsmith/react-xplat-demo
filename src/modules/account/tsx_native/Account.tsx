import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { StateStore } from '../../base/state/StateStore'
import { observer } from 'mobx-react'
import { Redirect } from '../../router/src/Redirect'

const topStyle = StyleSheet.create({
	account: {
		flexDirection: 'column',
		height: '100%'
	}
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
				<View style={topStyle.account}>
					<View>Logged in as: {appState.account.displayName} - {appState.account.email}</View>
					<View onTouchEnd={this.props.appState.account.signOut}>Log out</View>
				</View>
			)
		}
		else {
			return <Redirect path="/login" router={appState.router} />
		}
	}
}
