import * as React from 'react'
import { style } from 'typestyle'
import { Colors } from '../../styleguide'
import { StateStore } from '../../base'
import { observer } from 'mobx-react'
import { Link } from '../../router'

const topStyle = style({
	display: 'flex',
	height: '100%',
	width: '100%',
	justifyContent: "space-between",
	boxShadow: '0 0 0.5rem black'
})

const logoStyle = style({
	fontSize: "1.5rem",
	color: Colors.text,
	margin: 'auto 0 auto 1rem'
})

const loginAreaStyle = style({
	display: 'flex',
	margin: 'auto 1rem'
})

const attentionDot = style({
	display: 'inline-block',
	width: '0.55rem',
	height: '0.55rem',
	backgroundColor: Colors.primary,
	borderRadius: '0.25rem',
	margin: 'auto 0.5rem'
})

interface HeaderProps {
	appState: StateStore
}

@observer
export class Header extends React.Component<HeaderProps, {}> {
	render() {
		const { appState } = this.props
		return (
			<div className={topStyle}>
				<div className={logoStyle}><Link to="/">React XPLAT Demo</Link></div>
				<div className={loginAreaStyle}>
					{appState.login.displayName
						? <Link to="/account"><span className={attentionDot}/>{appState.login.displayName}</Link>
						: <Link to="/login"><span className={attentionDot}/>Sign in</Link>
					}
				</div>
			</div>
		)
	}
}
