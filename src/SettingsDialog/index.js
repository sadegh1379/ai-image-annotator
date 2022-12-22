import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
// import * as Survey from 'material-survey/components/Survey'
import { useSettings } from '../SettingsProvider'
export var SettingsDialog = function SettingsDialog(_ref) {
	var open = _ref.open,
		onClose = _ref.onClose
	var settings = useSettings()
	return React.createElement(Dialog, {
		open: open || false,
		onClose: onClose
	}, React.createElement(DialogTitle, null, 'Settings'), React.createElement(DialogContent, {
		style: {
			minWidth: 400
		}
	}), React.createElement(DialogActions, null, React.createElement(Button, {
		onClick: onClose
	}, 'Close')))
}
export default SettingsDialog