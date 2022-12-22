import React from 'react'
import { makeStyles } from '@material-ui/core'
import classnames from 'classnames'
import { grey } from '@mui/material/colors'

var useStyles = makeStyles({
	container: {
		position: 'relative',
		flexGrow: 1,
		flexShrink: 1,
		height: '100%',
		backgroundColor: grey[50],
		overflowY: 'auto',
	},
	shadowOverlay: {
		content: '\' \'',
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		pointerEvents: 'none',
		boxShadow:
		'inset 0 3px 5px rgba(0,0,0,0.15), inset -3px 0 5px rgba(0,0,0,0.15), inset 3px 0 5px rgba(0,0,0,0.15)',
	}
})

export const WorkContainer = React.forwardRef(({ children }, ref) => {
	var classes = useStyles()

	return (
		<div ref={ref} className={classnames(classes.container)}>
			{children}
			<div className={classnames(classes.shadowOverlay)}></div>
		</div>
	)
})

export default WorkContainer
