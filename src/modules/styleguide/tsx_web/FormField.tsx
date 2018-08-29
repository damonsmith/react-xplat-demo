import * as React from 'react'
import { style } from 'typestyle'
import { FormFieldState } from '../state/FormFieldState'
import { observer } from 'mobx-react'

const formFieldStyle = style({
	padding: '1rem',
	backgroundColor: '#dddddd',
	display: 'flex',
	color: 'black',
	justifyContent: 'space-between',
	cursor: 'pointer'
})

const labelStyle = style({
	border: "2px solid black",
	minWidth: "20rem"
})

interface FormFieldProps {
	label: string
	field: FormFieldState
	type?: string
}

@observer
export class FormField extends React.Component<FormFieldProps, {}> {
	render() {
		return (
			<div className={formFieldStyle}>
				<label>{this.props.label}</label>
				<input type={this.props.type || "text"} className={labelStyle} value={this.props.field.value} onChange={(event) => this.props.field.value = event.target.value}/>
			</div>
		)
	}
}
