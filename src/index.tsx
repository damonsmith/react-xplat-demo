import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BaseApplication } from './modules/base/tsx_web/BaseApplication'
import { StateStore } from './modules/base/state/StateStore'

const appState = new StateStore()

ReactDOM.render(
	<BaseApplication appState={appState} />,
	document.getElementById('root') as HTMLElement
)
