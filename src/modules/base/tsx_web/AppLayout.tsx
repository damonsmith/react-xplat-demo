import * as React from 'react'
import { style } from 'typestyle'
import { Colors } from '../../styleguide/colors'
import { observer } from 'mobx-react'

const styles = {
	page: style({
		color: Colors.text,
		fontFamily: 'Arial, Helvetica, sans-serif',
		display: 'flex',
		width: '100%',
		maxWidth: '50rem',
		margin: '0 auto',
		height: '100%',
		flexDirection: 'column',
		backgroundColor: Colors.globalBackground,
		minHeight: '100vh',
		$nest: { '& a': { color: Colors.text } }
	}),

	header: style({
		height: "3.25rem",
		display: "flex",
		backgroundColor: Colors.brandColor
	}),
	content: style({
		flex: 1,
		display: "flex",
		flexDirection: 'column'
	}),
	footer: style({
		backgroundColor: Colors.brandColor,
		color: Colors.white
	})
}

interface AppLayoutProps {
	header: JSX.Element,
	content: JSX.Element,
	footer: JSX.Element
}

@observer
export class AppLayout extends React.Component<AppLayoutProps, {}> {

	render() {
		return (
			<div className={styles.page}>
				<div className={styles.header}>{this.props.header}</div>
				<div className={styles.content}>{this.props.content}</div>
				<div className={styles.footer}>{this.props.footer}</div>
			</div>
		)
	}
}
