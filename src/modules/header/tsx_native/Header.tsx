import * as React from 'react'
import { Colors } from '../../styleguide/colors'
import { StateStore } from '../../base/state/StateStore'
import { observer } from 'mobx-react'
import { Link } from '../../router/src/Link'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logoStyle: {

	},
	loginAreaStyle: {

	},
	attentionDot: {

	}
})

interface HeaderProps {
	appState: StateStore
}

@observer
export class Header extends React.Component<HeaderProps, {}> {
	render() {
		const { appState } = this.props
		return (
			<View style={styles.container}>
				<View style={styles.logoStyle}><Link to="/">React XPLAT Demo</Link></View>
				<View style={styles.loginAreaStyle}>
					{appState.account.isLoggedIn
						? <Link to="/account"><span style={styles.attentionDot}/>{appState.account.displayName}</Link>
						: <Link to="/login"><span style={styles.attentionDot}/>Sign in</Link>
					}
				</View>
			</View>
		)
	}
}
