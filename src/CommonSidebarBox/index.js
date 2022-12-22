import React from 'react'
import SidebarBoxContainer from '../SidebarBoxContainer'
import NoteIcon from '@material-ui/icons/Note'

export var CommonSidebarBox = function HistorySidebarBox(_ref) {
	return React.createElement(SidebarBoxContainer, {
		title: _ref.title || 'No title',
		icon: React.createElement(NoteIcon, {
			style: {
				color: '#fff',
			}
		}),
		expandedByDefault: _ref.expandedByDefault || false
	}, _ref.children)
}
export default CommonSidebarBox