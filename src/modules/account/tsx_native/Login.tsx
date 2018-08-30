import * as React from 'react'
import { StyleSheet } from 'react-native'
import { StateStore } from '../../base/state/StateStore'
import { observer } from 'mobx-react'
import { Colors } from '../../styleguide/colors'
import { Redirect } from '../../router/src/Redirect'
import { Txt } from '../../styleguide/tsx_native/Txt'

const style = StyleSheet.create({
	container: {
		backgroundColor: Colors.modalBackground
	}
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
				<Txt>Login</Txt>
			)
		}
	}
}
