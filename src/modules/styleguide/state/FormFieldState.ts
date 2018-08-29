import { action, observable } from 'mobx'

export class FormFieldState {
	@observable value: string = ""

	@action reset = () => {
		this.value = ""
	}
}
