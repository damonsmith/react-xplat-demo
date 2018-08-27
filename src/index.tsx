import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BaseApplication, StateStore } from './modules/base'

const appState = new StateStore()

window['appState'] = appState

ReactDOM.render(
	<BaseApplication appState={appState} />,
	document.getElementById('root') as HTMLElement
)
