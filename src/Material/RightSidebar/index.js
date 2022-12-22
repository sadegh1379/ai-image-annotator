import React, { useReducer, useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core'
import classnames from 'classnames'
import ButtonBase from '@mui/material/ButtonBase';
import ExpandIcon from '@mui/icons-material/KeyboardArrowLeft';
import ContractIcon from '@mui/icons-material/KeyboardArrowRight';
import { grey } from '@mui/material/colors';

var useStyles = makeStyles({
	container: {
		width: 0,
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		flexShrink: 0,
		backgroundColor: '#313131',
		position: 'relative',
		transition: 'width 500ms',

		'&.expanded': {
			width: 300
		},

		'&.borderRight': {
			borderRight: '2px solid #393939',
		}
	},
	expander: {
		width: 23,
		height: 40,
		display: 'flex',
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderTopLeftRadius: '50%',
		borderBottomLeftRadius: '50%',
		boxSizing: 'border-box',
		borderBottom: '1px solid #535353',
		borderLeft: '1px solid #535353',
		boxShadow: '-1px 2px 5px rgba(0,0,0,0.2)',
		backgroundColor: '#fff',
		position: 'absolute',
		top: 'calc(50% - 20px)',
		left: -23,
		zIndex: 9999,
		transition: 'opacity 500ms, left 500ms, width 500ms',
		'&.expanded': {
			left: -20,
			width: 20,
			opacity: 0.4,
			'& .icon': {
				marginLeft: 0
			}
		},
		'& .icon': {
			marginLeft: 3
		}
	},
	slider: {
		position: 'absolute',
		right: 0,
		top: 0,
		width: 0,
		bottom: 0,
		overflow: 'hidden',
		transition: 'opacity 500ms, left 500ms, width 500ms',
		'&.expanded': {
			width: 300
		}
	},
	innerSliderContent: {
		width: 300,
		position: 'absolute',
		right: 0,
		top: 0,
		bottom: 0
	}
})

const getInitialExpandedState = () => {
	try {
		return JSON.parse(window.localStorage.__REACT_WORKSPACE_LAYOUT_EXPANDED);
	} catch (e) {
		return window.innerWidth > 1000 ? true : false;
	}
};

export const RightSidebar = ({ children, initiallyExpanded, height, toggleable = true }) => {
	const [ expanded, toggleExpanded ] = useReducer(
		(state) => !state,
		initiallyExpanded === undefined ? getInitialExpandedState() : initiallyExpanded
	);

	useEffect(
		() => {
			if (initiallyExpanded === undefined) {
				window.localStorage.__REACT_WORKSPACE_LAYOUT_EXPANDED = JSON.stringify(expanded);
			}
		},
		[ initiallyExpanded, expanded ]
	);

	const containerStyle = useMemo(() => ({ height: height || '100%' }), [ height ]);
	var classes = useStyles()

	return (
		<div className={classnames(classes.container, expanded ? 'expanded' : '', toggleable ? 'borderRight' : '')} style={containerStyle}>
			<div className={classnames(classes.slider, expanded ? 'expanded' : '')}>
				<div className={classnames(classes.innerSliderContent)}>{children}</div>
			</div>
			{toggleable && <ButtonBase onClick={toggleExpanded} className={classnames(classes.expander, expanded ? 'expanded' : '')}>
				{expanded ? <ContractIcon className="icon" /> : <ExpandIcon className="icon" />}
			</ButtonBase>}
		</div>
	);
};

export default RightSidebar;
