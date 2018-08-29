import * as React from 'react'
import { StateStore } from './src/modules/base/state/StateStore'
import { Text, SafeAreaView } from 'react-native'

const appState = new StateStore()

export default class App extends React.Component<{}> {
	render() {
		return (
			<SafeAreaView>
				<Text>test</Text>
			</SafeAreaView>
		)
	}
}
