import * as React from 'react'
import { observer } from 'mobx-react'
import { StateStore } from '../state/StateStore'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

@observer
export class BaseApplication extends React.Component<{appState: StateStore}, {}> {

	componentWillMount() {
	}

	render() {
		return (
			<Text style={styles}>test</Text>
		)
	}
}
