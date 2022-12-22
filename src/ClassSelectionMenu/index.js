import React, { useEffect } from 'react'
import { makeStyles, styled } from '@material-ui/core/styles'
import styles from './styles'
import Box from '@material-ui/core/Box'
import * as muiColors from '@material-ui/core/colors'
import SidebarBoxContainer from '../SidebarBoxContainer'
import colors from '../colors'
import BallotIcon from '@material-ui/icons/Ballot'
import capitalize from 'lodash/capitalize'
import classnames from 'classnames'

var useStyles = makeStyles(styles)

export var ClassSelectionMenu = function ClassSelectionMenu(_ref) {
	var classes = useStyles()
	var selectedCls = _ref.selectedCls,
		regionClsList = _ref.regionClsList,
		onSelectCls = _ref.onSelectCls

	useEffect(function () {
		var keyMapping = {}

		var _loop = function _loop(i) {
			keyMapping[i + 1] = function () {
				return onSelectCls(regionClsList[i])
			}
		}

		for (var i = 0; i < 9 && i < regionClsList.length; i++) {
			_loop(i)
		}

		var onKeyDown = function onKeyDown(e) {
			if (keyMapping[e.key]) {
				keyMapping[e.key]()
				e.preventDefault()
				e.stopPropagation()
			}
		}

		window.addEventListener('keydown', onKeyDown)
		return function () {
			return window.removeEventListener('keydown', onKeyDown)
		}
	}, [regionClsList, selectedCls])
	return React.createElement(SidebarBoxContainer, {
		title: 'Categories',
		subTitle: '',
		icon: React.createElement(BallotIcon, {
			style: {
				color: '#FFF'
			}
		}),
		expandedByDefault: true
	}, regionClsList.map(function (label, index) {
		return React.createElement('div', {
			key: `${index}-${label}-label-container`,
			className: classnames({
				selected: label.name === (selectedCls === null || selectedCls === void 0 ? void 0 : selectedCls.name)
			}, classes.labelContainer),
			onClick: function onClick() {
				return onSelectCls(label)
			}
		}, React.createElement('div', {
			key: `${index}-${label}-circle`,
			className: classnames(classes.circle),
			style: {
				backgroundColor: label.color
			}
		}), React.createElement('div', {
			key: `${index}-${label}-label`,
			className: classnames({
				selected: label.name === (selectedCls === null || selectedCls === void 0 ? void 0 : selectedCls.name)
			}, classes.label)
		}, capitalize(label.name)), React.createElement('div', {
			key: `${index}-${label}-deshsep`,
			className: classnames(classes.dashSep)
		}), React.createElement('div', {
			key: `${index}-${label}-number`,
			className: classnames({
				selected: label.name === (selectedCls === null || selectedCls === void 0 ? void 0 : selectedCls.name)
			}, classes.number)
		}, index < 9 ? 'Key ['.concat(index + 1, ']') : ''))
	}), React.createElement(Box, {
		pb: 2
	}))
}
export default ClassSelectionMenu
