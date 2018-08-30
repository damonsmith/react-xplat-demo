import * as React from 'react'
import { observer } from 'mobx-react'
import { StateStore } from '../state/StateStore'
import { View, StyleSheet } from 'react-native'
import { Route } from '../../router/src/Route'
import { Header } from '../../header/tsx_native/Header'
import { Colors } from '../../styleguide/colors'
import { Devices } from '../../devices/tsx_native/Devices'
import { Login } from '../../account/tsx_native/Login'
import { Account } from '../../account/tsx_native/Account'

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: Colors.globalBackground
	}
})

@observer
export class BaseApplication extends React.Component<{appState: StateStore}, {}> {

	componentWillMount() {
	}

	render() {
		console.log(this.props.appState.location)
		return (
			<View style={{flex: 1}}>
				<Header appState={this.props.appState} />
				<View style={styles.content}>
					<Route path="/" router={this.props.appState.router}><Devices appState={this.props.appState} /></Route>
					<Route path="/login" router={this.props.appState.router}><Login appState={this.props.appState} /></Route>
					<Route path="/account" router={this.props.appState.router}><Account appState={this.props.appState} /></Route>
				</View>
			</View>
		)
	}
}
