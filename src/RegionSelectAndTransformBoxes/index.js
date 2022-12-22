import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray'
import React, { Fragment, memo } from 'react'
import HighlightBox from '../HighlightBox'
import { styled } from '@material-ui/core/styles'
import PreventScrollToParents from '../PreventScrollToParents'
import { Tooltip } from '@material-ui/core'
var boxCursorMap = [['nw-resize', 'n-resize', 'ne-resize'], ['w-resize', 'grab', 'e-resize'], ['sw-resize', 's-resize', 'se-resize']]

var arePropsEqual = function arePropsEqual(prev, next) {
	return prev.region === next.region && prev.dragWithPrimary === next.dragWithPrimary && prev.createWithPrimary === next.createWithPrimary && prev.zoomWithPrimary === next.zoomWithPrimary && prev.mat === next.mat
}

export var RegionSelectAndTransformBox = memo(function (_ref) {
	var r = _ref.region,
		mouseEvents = _ref.mouseEvents,
		projectRegionBox = _ref.projectRegionBox,
		dragWithPrimary = _ref.dragWithPrimary,
		createWithPrimary = _ref.createWithPrimary,
		zoomWithPrimary = _ref.zoomWithPrimary,
		onBeginMovePoint = _ref.onBeginMovePoint,
		onSelectRegion = _ref.onSelectRegion,
		layoutParams = _ref.layoutParams,
		_ref$fullImageSegment = _ref.fullImageSegmentationMode,
		fullImageSegmentationMode = _ref$fullImageSegment === void 0 ? false : _ref$fullImageSegment,
		mat = _ref.mat,
		onBeginBoxTransform = _ref.onBeginBoxTransform,
		onBeginMovePolygonPoint = _ref.onBeginMovePolygonPoint,
		onBeginMoveKeypoint = _ref.onBeginMoveKeypoint,
		onAddPolygonPoint = _ref.onAddPolygonPoint,
		showHighlightBox = _ref.showHighlightBox,
		isEditable = _ref.isEditable
	var pbox = projectRegionBox(r)
	var _layoutParams$current = layoutParams.current,
		iw = _layoutParams$current.iw,
		ih = _layoutParams$current.ih
	return React.createElement(Fragment, null, React.createElement(PreventScrollToParents, null, showHighlightBox && r.type !== 'polygon' && React.createElement(HighlightBox, {
		region: r,
		mouseEvents: mouseEvents,
		dragWithPrimary: dragWithPrimary,
		createWithPrimary: createWithPrimary,
		zoomWithPrimary: zoomWithPrimary,
		onBeginMovePoint: onBeginMovePoint,
		onSelectRegion: onSelectRegion,
		pbox: pbox,
		isEditable: isEditable
	}), r.type === 'box' && !dragWithPrimary && !zoomWithPrimary && !r.locked && r.highlighted && mat.a < 1.2 && [[0, 0], [0.5, 0], [1, 0], [1, 0.5], [1, 1], [0.5, 1], [0, 1], [0, 0.5], [0.5, 0.5]].map(function (_ref2, i) {
		var _ref3 = _slicedToArray(_ref2, 2),
			px = _ref3[0],
			py = _ref3[1]
		
		return React.createElement('div', Object.assign({
			key: `${i}-${px}-${py}`
		}, mouseEvents, {
			onMouseDown: function onMouseDown(e) {
				if (isEditable) {
					if (e.button === 0) return onBeginBoxTransform(r, [px * 2 - 1, py * 2 - 1])
					mouseEvents.onMouseDown(e)
				}
			},
			style: {
				width: 8,
				height: 8,
				zIndex: 2,
				border: '2px solid #535353',
				position: 'absolute',
				left: pbox.x - 4 - 2 + pbox.w * px,
				top: pbox.y - 4 - 2 + pbox.h * py,
				cursor: boxCursorMap[py * 2][px * 2],
				borderRadius: px === 0.5 && py === 0.5 ? 4 : 0
			}
		}))
	}), r.type === 'polygon' && !dragWithPrimary && !zoomWithPrimary && !r.locked && r.highlighted && r.points.map(function (_ref4, i) {
		var _ref5 = _slicedToArray(_ref4, 2),
			px = _ref5[0],
			py = _ref5[1]

		var proj = mat.clone().inverse().applyToPoint(px * iw, py * ih)
		return React.createElement('div', Object.assign({
			key: `${i}-${px}-${py}`
		}, mouseEvents, {
			onMouseDown: function onMouseDown(e) {
				if (isEditable) {
					if (e.button === 0 && (!r.open || i === 0)) return onBeginMovePolygonPoint(r, i)
					mouseEvents.onMouseDown(e)
				}
			},
			style: {
				width: 8,
				height: 8,
				border: '2px solid #FFF',
				position: 'absolute',
				cursor: !r.open ? 'move' : i === 0 ? 'pointer' : undefined,
				zIndex: 10,
				pointerEvents: r.open && i === r.points.length - 1 ? 'none' : undefined,
				left: proj.x - 4,
				top: proj.y - 4
			}
		}))
	}), r.type === 'polygon' && r.highlighted && !dragWithPrimary && !zoomWithPrimary && !r.locked && !r.open && r.points.length > 1 && r.points.map(function (p1, i) {
		return [p1, r.points[(i + 1) % r.points.length]]
	}).map(function (_ref6) {
		var _ref7 = _slicedToArray(_ref6, 2),
			p1 = _ref7[0],
			p2 = _ref7[1]

		return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2]
	}).map(function (pa, i) {
		var proj = mat.clone().inverse().applyToPoint(pa[0] * iw, pa[1] * ih)
		return React.createElement('div', Object.assign({
			key: `${i}-${proj.x}-${proj.y}`
		}, mouseEvents, {
			onMouseDown: function onMouseDown(e) {
				if (isEditable) {
					if (e.button === 0) return onAddPolygonPoint(r, pa, i + 1)
					mouseEvents.onMouseDown(e)
				}
		},
			style: {
			width: 8,
			height: 8,
			zIndex: 2,
			position: 'absolute',
			cursor: 'copy',
			left: proj.x - 4,
			top: proj.y - 4,
			border: '2px dotted #fff',
			opacity: 0.5
		}
		}))
	}), r.type === 'keypoints' && !dragWithPrimary && !zoomWithPrimary && !r.locked && r.highlighted && Object.entries(r.points).map(function (_ref8, i) {
		var _ref9 = _slicedToArray(_ref8, 2),
			keypointId = _ref9[0],
			_ref9$ = _ref9[1],
			px = _ref9$.x,
			py = _ref9$.y

		var proj = mat.clone().inverse().applyToPoint(px * iw, py * ih)
		return React.createElement(Tooltip, {
			title: keypointId,
			key: `${i}-${px}-${py}`
		}, React.createElement('div', Object.assign({
		key: i
	}, mouseEvents, {
		onMouseDown: function onMouseDown(e) {
			if (isEditable) {
				if (e.button === 0 && (!r.open || i === 0)) return onBeginMoveKeypoint(r, keypointId)
				mouseEvents.onMouseDown(e)
			}
		},
		style: {
			width: 8,
			height: 8,
			border: '2px solid #FFF',
			position: 'absolute',
			cursor: !r.open ? 'move' : i === 0 ? 'pointer' : undefined,
			zIndex: 10,
			pointerEvents: r.open && i === r.points.length - 1 ? 'none' : undefined,
			left: proj.x - 4,
			top: proj.y - 4
		}
	})))
	})))
}, arePropsEqual)
export var RegionSelectAndTransformBoxes = memo(function (props) {
	return props.regions.filter(function (r) {
		return r.visible || r.visible === undefined
	}).filter(function (r) {
		return !r.locked
	}).map(function (r, i) {
		return React.createElement(RegionSelectAndTransformBox, Object.assign({
			key: `${i}-${r.id}`,
		}, props, {
			region: r
		}))
	})
}, function (n, p) {
	return n.regions === p.regions && n.mat === p.mat
})
export default RegionSelectAndTransformBoxes