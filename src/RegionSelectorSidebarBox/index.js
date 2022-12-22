import _objectSpread from '@babel/runtime/helpers/esm/objectSpread'
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray'
import React, { Fragment, useState, memo } from 'react'
import SidebarBoxContainer from '../SidebarBoxContainer'
import { makeStyles, styled } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import RegionIcon from '@material-ui/icons/PictureInPicture'
import Grid from '@material-ui/core/Grid'
import ReorderIcon from '@material-ui/icons/SwapVert'
import PieChartIcon from '@material-ui/icons/PieChart'
import TrashIcon from '@material-ui/icons/Delete'
import LockIcon from '@material-ui/icons/Lock'
import UnlockIcon from '@material-ui/icons/LockOpen'
import VisibleIcon from '@material-ui/icons/Visibility'
import VisibleOffIcon from '@material-ui/icons/VisibilityOff'
import styles from './styles'
import classnames from 'classnames'
import isEqual from 'lodash/isEqual'
var useStyles = makeStyles(styles)
var HeaderSep = styled('div')({
	borderTop: '1px solid #fff',
	marginTop: 2,
	marginBottom: 2
})

var Chip = function Chip(_ref) {
	var color = _ref.color,
		text = _ref.text
	var classes = useStyles()
	return React.createElement('span', {
		className: classes.chip
	}, React.createElement('div', {
		className: 'color',
		style: {
			backgroundColor: color
		}
	}), React.createElement('div', {
		className: 'text'
	}, text.name ? text.name : text))
}

var RowLayout = function RowLayout(_ref2) {
	var header = _ref2.header,
		highlighted = _ref2.highlighted,
		order = _ref2.order,
		classification = _ref2.classification,
		area = _ref2.area,
		tags = _ref2.tags,
		trash = _ref2.trash,
		lock = _ref2.lock,
		visible = _ref2.visible,
		onClick = _ref2.onClick
	var classes = useStyles()

	var _useState = useState(false),
		_useState2 = _slicedToArray(_useState, 2),
		mouseOver = _useState2[0],
		changeMouseOver = _useState2[1]

	return React.createElement('div', {
		onClick: onClick,
		onMouseEnter: function onMouseEnter() {
			return changeMouseOver(true)
		},
		onMouseLeave: function onMouseLeave() {
			return changeMouseOver(false)
		},
		className: classnames(classes.row, {
			header: header,
			highlighted: highlighted
		})
	}, React.createElement(Grid, {
		container: true,
		alignItems: 'center'
	}, React.createElement(Grid, {
		item: true,
		xs: 2
	}, React.createElement('div', {
		style: {
			textAlign: 'right',
			paddingRight: 10
		}
	}, order)), React.createElement(Grid, {
		item: true,
		xs: 5
	}, classification), React.createElement(Grid, {
		item: true,
		xs: 2
	}, React.createElement('div', {
		style: {
			textAlign: 'right',
			paddingRight: 6
		}
	}, area)), React.createElement(Grid, {
		item: true,
		xs: 1
	}, trash), React.createElement(Grid, {
	item: true,
	xs: 1
}, lock), React.createElement(Grid, {
	item: true,
	xs: 1
}, visible)))
}

var RowHeader = function RowHeader() {
	return React.createElement(RowLayout, {
		header: true,
		highlighted: false,
		order: React.createElement(ReorderIcon, {
			className: 'icon'
		}),
		classification: React.createElement('div', {
			style: {
				paddingLeft: 10
			}
		}, 'Class'),
		area: React.createElement(PieChartIcon, {
			className: 'icon'
		}),
		trash: React.createElement(TrashIcon, {
			className: 'icon'
		}),
		lock: React.createElement(LockIcon, {
			className: 'icon'
		}),
		visible: React.createElement(VisibleIcon, {
			className: 'icon'
		})
	})
}

var MemoRowHeader = memo(RowHeader)

var Row = function Row(_ref3) {
	var r = _ref3.region,
		highlighted = _ref3.highlighted,
		onSelectRegion = _ref3.onSelectRegion,
		onDeleteRegion = _ref3.onDeleteRegion,
		onChangeRegion = _ref3.onChangeRegion,
		visible = _ref3.visible,
		locked = _ref3.locked,
		color = _ref3.color,
		cls = _ref3.cls,
		index = _ref3.index
	return React.createElement(RowLayout, {
		header: false,
		highlighted: highlighted,
		onClick: function onClick() {
			return onSelectRegion(r)
		},
		order: '#'.concat(index + 1),
		classification: React.createElement(Chip, {
			text: cls || 'no-name',
			color: color
		}),
		area: '',
		trash: React.createElement(TrashIcon, {
			onClick: function onClick() {
				return onDeleteRegion(r)
			},
			className: 'icon2'
		}),
		lock: r.locked ? React.createElement(LockIcon, {
			onClick: function onClick() {
				return onChangeRegion(_objectSpread({}, r, {
					locked: false
				}))
			},
			className: 'icon2'
		}) : React.createElement(UnlockIcon, {
			onClick: function onClick() {
				return onChangeRegion(_objectSpread({}, r, {
					locked: true
				}))
			},
			className: 'icon2'
		}),
		visible: r.visible || r.visible === undefined ? React.createElement(VisibleIcon, {
			onClick: function onClick() {
				return onChangeRegion(_objectSpread({}, r, {
					visible: false
				}))
			},
			className: 'icon2'
		}) : React.createElement(VisibleOffIcon, {
			onClick: function onClick() {
				return onChangeRegion(_objectSpread({}, r, {
					visible: true
				}))
			},
			className: 'icon2'
		})
	})
}

var MemoRow = memo(Row, function (prevProps, nextProps) {
	return prevProps.highlighted === nextProps.highlighted && prevProps.visible === nextProps.visible && prevProps.locked === nextProps.locked && prevProps.id === nextProps.id && prevProps.index === nextProps.index && prevProps.cls === nextProps.cls && prevProps.color === nextProps.color
})
var emptyArr = []
export var RegionSelectorSidebarBox = function RegionSelectorSidebarBox(_ref4) {
	var _ref4$regions = _ref4.regions,
		regions = _ref4$regions === void 0 ? emptyArr : _ref4$regions,
		onDeleteRegion = _ref4.onDeleteRegion,
		onChangeRegion = _ref4.onChangeRegion,
		onSelectRegion = _ref4.onSelectRegion
	var classes = useStyles()
	return React.createElement(SidebarBoxContainer, {
		title: 'Regions',
		subTitle: '',
		icon: React.createElement(RegionIcon, {
			style: {
				color: '#FFF'
			}
		}),
		expandedByDefault: true
	}, React.createElement('div', {
		className: classes.container
	}, React.createElement(MemoRowHeader, { key: 'row-header' }), React.createElement(HeaderSep, { key: 'header-sep' }), regions.map(function (r, i) {
		return React.createElement(MemoRow, Object.assign({
			key: `${i}-${r.id}`,
		}, r, {
			region: r,
			index: i,
			onSelectRegion: onSelectRegion,
			onDeleteRegion: onDeleteRegion,
			onChangeRegion: onChangeRegion
		}))
	})))
}

var mapUsedRegionProperties = function mapUsedRegionProperties(r) {
	return [r.id, r.color, r.locked, r.visible, r.highlighted]
}

export default memo(RegionSelectorSidebarBox, function (prevProps, nextProps) {
	return isEqual((prevProps.regions || emptyArr).map(mapUsedRegionProperties), (nextProps.regions || emptyArr).map(mapUsedRegionProperties))
})