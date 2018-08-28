import { defaultConfig } from '../../../config/appConfig'
import { action, observable } from 'mobx'

export class AccountState {

	@observable loginInProgress: boolean
	@observable isLoggedIn: boolean
	@observable displayName: string
	@observable email: string

	constructor() {
		this.loginInProgress = false
		this.isLoggedIn = false
		this.displayName = ""
		this.email = ""
	}

	@action signOut = () => {
		this.isLoggedIn = false
		this.displayName = "",
		this.email = ""
	}

	@action signIn = () => {
		this.loginInProgress = true
		setTimeout(this.setSignedIn.bind(this), 500)
	}

	@action setSignedIn() {
		this.isLoggedIn = true
		this.loginInProgress = false
		this.displayName = "Fred bloggs"
		this.email = "fred@bloggs.com"
	}
}
