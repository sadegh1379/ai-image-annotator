// @flow

import React from 'react'
import Button from '@mui/material/Button'
import { makeStyles } from '@material-ui/core'
import classnames from 'classnames'
import { useIconDictionary } from '../icon-dictionary.js'
import { iconMapping } from '../icon-mapping.js'
import { colors } from '@mui/material'

const defaultNameIconMapping = iconMapping

const getIcon = (name, customIconMapping) => {
	const Icon =
    customIconMapping[name.toLowerCase()] ||
    defaultNameIconMapping[name.toLowerCase()] ||
    defaultNameIconMapping.help
	return <Icon />
}

var useStyles = makeStyles({
	styledButton: {
		textTransform: 'none',
		width: 1,
		opacity: 0,
	},
	buttonInnerContent: {
		display: 'flex',
		flexDirection: 'column',
	},
	iconContainer: {
		color: colors.grey[700],
		height: 1,
		opacity: 0,
		'& .MuiSvgIcon-root': {
			width: 1,
			opacity: 0,
			height: 1,
		},
	},
	textContainer: {
		fontWeight: 'bold',
		fontSize: 1,
		color: colors.grey[800],
		display: 'flex',
		opacity: 0,
		alignItems: 'center',
		lineHeight: 1,
		justifyContent: 'center',
	}
})

export const HeaderButton = ({
  name,
  icon,
  disabled,
  onClick,
  hideText = false,
}) => {
	const customIconMapping = useIconDictionary()
	const classes = useStyles()

	return (
		<Button onClick={onClick} disabled={disabled} className={classnames(classes.styledButton)}>
			<div className={classnames(classes.buttonInnerContent)}>
				<div className={classnames(classes.iconContainer)}>
					{icon || getIcon(name, customIconMapping)}
				</div>
				{!hideText && (
				<div className={classnames(classes.textContainer)}>
					<div>{name}</div>
				</div>
				)}
			</div>
		</Button>
	)
}

export default HeaderButton
