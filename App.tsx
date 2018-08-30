import * as React from 'react'
import { StateStore } from './src/modules/base/state/StateStore'
import { Text, SafeAreaView } from 'react-native'
import { BaseApplication } from './src/modules/base/tsx_native/BaseApplication'

const appState = new StateStore()

export default class App extends React.Component<{}> {
	render() {
		return (
			<BaseApplication appState={appState} />
		)
	}
}
