import { action, observable } from 'mobx'
import { FormFieldState } from '../../styleguide/state/FormFieldState'

export class AccountState {

	@observable loginInProgress: boolean
	@observable isLoggedIn: boolean
	@observable displayName: string
	@observable email: string

	@observable usernameField: FormFieldState
	@observable passwordField: FormFieldState

	constructor() {
		this.loginInProgress = false
		this.isLoggedIn = false
		this.displayName = ""
		this.email = ""

		this.usernameField = new FormFieldState()
		this.passwordField = new FormFieldState()
	}

	@action signOut = () => {
		this.isLoggedIn = false
		this.displayName = "",
		this.email = ""
	}

	@action signIn = () => {
		this.isLoggedIn = true
		this.loginInProgress = false
		this.displayName = this.usernameField.value
		this.email = ""
	}
}
