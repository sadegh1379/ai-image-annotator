import _objectSpread from '@babel/runtime/helpers/esm/objectSpread'
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties'
import React, { useRef, useCallback } from 'react'
import { makeStyles, styled } from '@material-ui/core/styles'
import ImageCanvas from '../ImageCanvas'
import styles from '../MainLayout/styles'
import useKey from 'use-key-hook'
import { useSettings } from '../SettingsProvider'

import { useFullScreenHandle } from 'react-full-screen'
import getActiveImage from '../Annotator/reducers/get-active-image'

var useStyles = makeStyles(styles)
var FullScreenContainer = styled('div')({
	width: '100%',
	height: '100%',
	'& .fullscreen': {
		width: '100%',
		height: '100%'
	}
})
export var DemoLayout = function DemoLayout(_ref2) {
	var state = _ref2.state,
		dispatch = _ref2.dispatch,
		_ref2$alwaysShowNextB = _ref2.alwaysShowNextButton,
		alwaysShowNextButton = _ref2$alwaysShowNextB === void 0 ? false : _ref2$alwaysShowNextB,
		_ref2$alwaysShowPrevB = _ref2.alwaysShowPrevButton,
		alwaysShowPrevButton = _ref2$alwaysShowPrevB === void 0 ? false : _ref2$alwaysShowPrevB,
		RegionEditLabel = _ref2.RegionEditLabel,
		onRegionClassAdded = _ref2.onRegionClassAdded,
		hideHeader = _ref2.hideHeader,
		hideHeaderText = _ref2.hideHeaderText,
		_ref2$hideNext = _ref2.hideNext,
		hideNext = _ref2$hideNext === void 0 ? false : _ref2$hideNext,
		_ref2$hidePrev = _ref2.hidePrev,
		hidePrev = _ref2$hidePrev === void 0 ? false : _ref2$hidePrev,
		rightExtraItems = _ref2.rightExtraItems,
		isEditable = _ref2.isEditable
	var classes = useStyles()
	var settings = useSettings()
	var fullScreenHandle = useFullScreenHandle()
	var memoizedActionFns = useRef({})

	var action = function action(type) {
		for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			params[_key - 1] = arguments[_key]
		}

		var fnKey = ''.concat(type, '(').concat(params.join(','), ')')
		if (memoizedActionFns.current[fnKey]) return memoizedActionFns.current[fnKey]

		var fn = function fn() {
			for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2]
			}

			return params.length > 0 ? dispatch(_objectSpread({
				type: type
			}, params.reduce(function (acc, p, i) {
				return acc[p] = args[i], acc
			}, {}))) : dispatch(_objectSpread({
				type: type
			}, args[0]))
		}

		memoizedActionFns.current[fnKey] = fn
		return fn
	}

	var _getActiveImage = getActiveImage(state),
		currentImageIndex = _getActiveImage.currentImageIndex,
		activeImage = _getActiveImage.activeImage

	var nextImage

	if (currentImageIndex !== null) {
		nextImage = state.images[currentImageIndex + 1]
	}

	useKey(function () {
		return dispatch({
			type: 'CANCEL'
		})
	}, {
		detectKeys: [27]
	})
    
	var canvas = React.createElement(ImageCanvas, Object.assign({}, settings, {
		showCrosshairs: settings.showCrosshairs && !['select', 'pan', 'zoom'].includes(state.selectedTool),
		key: state.selectedImage,
		showMask: state.showMask,
		fullImageSegmentationMode: state.fullImageSegmentationMode,
		autoSegmentationOptions: state.autoSegmentationOptions,
		showTags: state.showTags,
		allowedArea: state.allowedArea,
		modifyingAllowedArea: state.selectedTool === 'modify-allowed-area',
		regionClsList: state.regionClsList,
		regionTagList: state.regionTagList,
		regions: activeImage.regions || [],
		realSize: activeImage ? activeImage.realSize : undefined,
		videoPlaying: state.videoPlaying,
		imageSrc: state.annotationType === 'image' ? activeImage.src : null,
		videoSrc: state.annotationType === 'video' ? state.videoSrc : null,
		pointDistancePrecision: state.pointDistancePrecision,
		createWithPrimary: state.selectedTool.includes('create'),
		dragWithPrimary: state.selectedTool === 'pan',
		zoomWithPrimary: state.selectedTool === 'zoom',
		showPointDistances: state.showPointDistances,
		videoTime: state.annotationType === 'image' ? state.selectedImageFrameTime : state.currentVideoTime,
		keypointDefinitions: state.keypointDefinitions,
		onMouseMove: action('MOUSE_MOVE'),
		onMouseDown: action('MOUSE_DOWN'),
		onMouseUp: action('MOUSE_UP'),
		onChangeRegion: action('CHANGE_REGION', 'region'),
		onBeginRegionEdit: action('OPEN_REGION_EDITOR', 'region'),
		onCloseRegionEdit: action('CLOSE_REGION_EDITOR', 'region'),
		onDeleteRegion: action('DELETE_REGION', 'region'),
		onBeginBoxTransform: action('BEGIN_BOX_TRANSFORM', 'box', 'directions'),
		onBeginMovePolygonPoint: action('BEGIN_MOVE_POLYGON_POINT', 'polygon', 'pointIndex'),
		onBeginMoveKeypoint: action('BEGIN_MOVE_KEYPOINT', 'region', 'keypointId'),
		onAddPolygonPoint: action('ADD_POLYGON_POINT', 'polygon', 'point', 'pointIndex'),
		onSelectRegion: action('SELECT_REGION', 'region'),
		onBeginMovePoint: action('BEGIN_MOVE_POINT', 'point'),
		onImageLoaded: action('IMAGE_LOADED', 'image'),
		RegionEditLabel: RegionEditLabel,
		onImageOrVideoLoaded: action('IMAGE_OR_VIDEO_LOADED', 'metadata'),
		onChangeVideoTime: action('CHANGE_VIDEO_TIME', 'newTime'),
		onChangeVideoPlaying: action('CHANGE_VIDEO_PLAYING', 'isPlaying'),
		onRegionClassAdded: onRegionClassAdded,
		allowComments: state.allowComments,
		isEditable: isEditable
	}))
    
	return React.createElement(FullScreenContainer, null, canvas)
}
export default DemoLayout