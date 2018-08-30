import * as React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { FormFieldState } from '../state/FormFieldState'
import { observer } from 'mobx-react'

const style = StyleSheet.create({
	field: {
		padding: '1rem',
		backgroundColor: '#dddddd',
		display: 'flex',
		color: 'black',
		justifyContent: 'space-between'
	},
	label: {
		minWidth: "20rem"
	}
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
			<View style={style.field}>
				<Text style={style.label}>{this.props.label}</Text>
				<TextInput value={this.props.field.value} onChange={(event) => this.props.field.value = event.target.value}/>
			</View>
		)
	}
}
