import * as React from 'react'
import { style } from 'typestyle'
import { StateStore } from '../../base'
import { observer } from 'mobx-react'
import { Colors } from '../../styleguide'
import { Link } from '../../router'

const homeContentStyle = style({
	padding: '10rem 2rem',
	margin: '0 auto',
	maxWidth: '40rem'
})

const iconButtonStyle = style({
	fontSize: '1.15rem',
	padding: '1rem',
	backgroundColor: Colors.primary,
	borderRadius: '0.25rem',
	cursor: 'pointer',
	marginBottom: '2rem'
})

interface Props {
	appState: StateStore
}

@observer
export class HomePage extends React.Component<Props, {}> {

	render() {

		return (
			<div>
				<div className={homeContentStyle}>
					<Link to="/devices"><div className={iconButtonStyle}>See my devices</div></Link>
				</div>
			</div>
		)
	}
}
