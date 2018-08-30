import * as React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { FormFieldState } from '../state/FormFieldState'
import { observer } from 'mobx-react'

const style = StyleSheet.create({
	field: {
		backgroundColor: '#dddddd',
		display: 'flex',
		justifyContent: 'space-between'
	},
	label: {
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
				<TextInput value={this.props.field.value} onChangeText={text => this.props.field.value = text}/>
			</View>
		)
	}
}
