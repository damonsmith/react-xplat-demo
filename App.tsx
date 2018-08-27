import * as React from 'react'
import { StateStore } from './src/modules/base/state/StateStore'
import { Text } from 'react-native'
const appState = new StateStore()

export default class App extends React.Component<{}> {
	render() {
		return (
			<Text>test</Text>
		)
	}
}
