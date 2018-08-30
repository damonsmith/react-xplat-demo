import * as React from 'react'
import { Colors } from '../../styleguide/colors'
import { StateStore } from '../../base/state/StateStore'
import { observer } from 'mobx-react'
import { Link } from '../../router/tsx_native/Link'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Txt } from '../../styleguide/tsx_native/Txt'

const styles = StyleSheet.create({
	safeAreaView: {
		backgroundColor: Colors.brandColor
	},
	container: {
		backgroundColor: Colors.brandColor,
		height: 50
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
			<SafeAreaView style={styles.safeAreaView}>
				<View style={styles.container}>
					<View style={styles.logoStyle}><Link to="/"><Txt>React XPLAT Demo</Txt></Link></View>
					<View style={styles.loginAreaStyle}>
						{appState.account.isLoggedIn
							? <Link to="/account"><View style={styles.attentionDot}/><Txt>{appState.account.displayName}</Txt></Link>
							: <Link to="/login"><View style={styles.attentionDot}/><Txt>Sign in</Txt></Link>
						}
					</View>
				</View>
			</SafeAreaView>
		)
	}
}
