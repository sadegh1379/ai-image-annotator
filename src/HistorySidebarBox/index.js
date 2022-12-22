import React, { setState, memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SidebarBoxContainer from '../SidebarBoxContainer'
import HistoryIcon from '@material-ui/icons/History'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import UndoIcon from '@material-ui/icons/Undo'
import moment from 'moment'
import { grey } from '@material-ui/core/colors'
import isEqual from 'lodash/isEqual'
import Box from '@material-ui/core/Box'
var useStyles = makeStyles({
	emptyText: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#fff',
		textAlign: 'center',
		padding: 20
	}
})
var listItemTextStyle = {
	paddingLeft: 16
}
export var HistorySidebarBox = function HistorySidebarBox(_ref) {
	var history = _ref.history,
		onRestoreHistory = _ref.onRestoreHistory
	var classes = useStyles()
	return React.createElement(SidebarBoxContainer, {
		title: 'History',
		icon: React.createElement(HistoryIcon, {
			style: {
				color: '#fff',
			}
		}),
		expandedByDefault: false
	}, React.createElement(List, null, history.length === 0 && React.createElement('div', {
		className: classes.emptyText
	}, 'No History Yet'), history.map(function (_ref2, i) {
		var name = _ref2.name,
			time = _ref2.time
		return React.createElement(ListItem, {
			button: true,
			dense: true,
			key: `${i}-${name}`,
		}, React.createElement(ListItemText, {
			style: listItemTextStyle,
			primary: name,
			secondary: moment(time).format('LT')
		}), i === 0 && React.createElement(ListItemSecondaryAction, {
			key: `${i}-${name}-secondary-action`,
			onClick: function onClick() {
				return onRestoreHistory()
			}
		}, React.createElement(IconButton, { key: `${i}-${name}-icon`, }, React.createElement(UndoIcon, null))))
	})))
}
export default memo(HistorySidebarBox, function (prevProps, nextProps) {
	return isEqual(prevProps.history.map(function (a) {
		return [a.name, a.time]
	}), nextProps.history.map(function (a) {
		return [a.name, a.time]
	}))
})