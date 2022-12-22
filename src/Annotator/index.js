import _objectSpread from '@babel/runtime/helpers/esm/objectSpread';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import React, { useReducer, useEffect, useState } from 'react';
import MainLayout from '../MainLayout';
import DemoLayout from '../DemoLayout';
import SettingsProvider from '../SettingsProvider';
import combineReducers from './reducers/combine-reducers.js';
import generalReducer from './reducers/general-reducer.js';
import imageReducer from './reducers/image-reducer.js';
import videoReducer from './reducers/video-reducer.js';
import historyHandler from './reducers/history-handler.js';
import useEventCallback from 'use-event-callback';
import makeImmutable, { without } from 'seamless-immutable';
import getFromLocalStorage from '../utils/get-from-local-storage';
import { JssProvider } from 'react-jss';
import { create } from 'jss';
import { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';

export var Annotator = function Annotator(_ref) {
	const generateClassName = createGenerateClassName();
	const jss = create({
		...jssPreset(),
		// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
		insertionPoint: 'jss-insertion-point'
	});

	var images = _ref.images,
		demo = _ref.demo,
		allowedArea = _ref.allowedArea,
		_ref$selectedImage = _ref.selectedImage,
		selectedImage =
			_ref$selectedImage === void 0 ? (images && images.length > 0 ? 0 : undefined) : _ref$selectedImage,
		showPointDistances = _ref.showPointDistances,
		pointDistancePrecision = _ref.pointDistancePrecision,
		_ref$showTags = _ref.showTags,
		showTags = _ref$showTags === void 0 ? getFromLocalStorage('showTags', true) : _ref$showTags,
		_ref$enabledTools = _ref.enabledTools,
		enabledTools =
			_ref$enabledTools === void 0
				? [
						'select',
						'create-point',
						'create-box',
						'create-polygon',
						'create-line',
						'create-expanding-line',
						'show-mask'
					]
				: _ref$enabledTools,
		_ref$selectedTool = _ref.selectedTool,
		selectedTool = _ref$selectedTool === void 0 ? 'select' : _ref$selectedTool,
		_ref$regionTagList = _ref.regionTagList,
		regionTagList = _ref$regionTagList === void 0 ? [] : _ref$regionTagList,
		_ref$regionClsList = _ref.regionClsList,
		regionClsList = _ref$regionClsList === void 0 ? [] : _ref$regionClsList,
		_ref$imageTagList = _ref.imageTagList,
		imageTagList = _ref$imageTagList === void 0 ? [] : _ref$imageTagList,
		_ref$imageClsList = _ref.imageClsList,
		imageClsList = _ref$imageClsList === void 0 ? [] : _ref$imageClsList,
		_ref$keyframes = _ref.keyframes,
		keyframes = _ref$keyframes === void 0 ? {} : _ref$keyframes,
		_ref$taskDescription = _ref.taskDescription,
		taskDescription = _ref$taskDescription === void 0 ? '' : _ref$taskDescription,
		_ref$fullImageSegment = _ref.fullImageSegmentationMode,
		fullImageSegmentationMode = _ref$fullImageSegment === void 0 ? false : _ref$fullImageSegment,
		RegionEditLabel = _ref.RegionEditLabel,
		videoSrc = _ref.videoSrc,
		_ref$videoTime = _ref.videoTime,
		videoTime = _ref$videoTime === void 0 ? 0 : _ref$videoTime,
		videoName = _ref.videoName,
		onExit = _ref.onExit,
		onNextImage = _ref.onNextImage,
		onPrevImage = _ref.onPrevImage,
		keypointDefinitions = _ref.keypointDefinitions,
		_ref$autoSegmentation = _ref.autoSegmentationOptions,
		autoSegmentationOptions =
			_ref$autoSegmentation === void 0
				? {
						type: 'autoseg'
					}
				: _ref$autoSegmentation,
		hideHeader = _ref.hideHeader,
		hideHeaderText = _ref.hideHeaderText,
		hideNext = _ref.hideNext,
		hidePrev = _ref.hidePrev,
		rightExtraItems = _ref.rightExtraItems,
		onCanvasImageLoadSuccess = _ref.onCanvasImageLoadSuccess,
		onCanvasImageLoadError = _ref.onCanvasImageLoadError,
		allowComments = _ref.allowComments,
		onStateUpdate = _ref.onStateUpdate,
		isEditable = _ref.isEditable != null ? _ref.isEditable : true;

	if (typeof selectedImage === 'string') {
		selectedImage = (images || []).findIndex(function(img) {
			return img.src === selectedImage;
		});
		if (selectedImage === -1) selectedImage = undefined;
	}

	var annotationType = images ? 'image' : 'video';

	var _useReducer = useReducer(
			historyHandler(combineReducers(annotationType === 'image' ? imageReducer : videoReducer, generalReducer)),
			makeImmutable(
				_objectSpread(
					{
						annotationType: annotationType,
						showTags: showTags,
						allowedArea: allowedArea,
						showPointDistances: showPointDistances,
						pointDistancePrecision: pointDistancePrecision,
						selectedTool: selectedTool,
						fullImageSegmentationMode: fullImageSegmentationMode,
						autoSegmentationOptions: autoSegmentationOptions,
						mode: null,
						taskDescription: taskDescription,
						showMask: true,
						labelImages: imageClsList.length > 0 || imageTagList.length > 0,
						regionClsList: regionClsList,
						regionTagList: regionTagList,
						imageClsList: imageClsList,
						imageTagList: imageTagList,
						currentVideoTime: videoTime,
						enabledTools: enabledTools,
						history: [],
						videoName: videoName,
						keypointDefinitions: keypointDefinitions,
						allowComments: allowComments
					},
					annotationType === 'image'
						? {
								selectedImage: selectedImage,
								images: images,
								selectedImageFrameTime: images && images.length > 0 ? images[0].frameTime : undefined
							}
						: {
								videoSrc: videoSrc,
								keyframes: keyframes
							}
				)
			)
		),
		_useReducer2 = _slicedToArray(_useReducer, 2),
		state = _useReducer2[0],
		dispatchToReducer = _useReducer2[1];

	var dispatch = useEventCallback(function(action) {
		if (action.type === 'HEADER_BUTTON_CLICKED') {
			if ([ 'Exit', 'Done', 'Save', 'Complete' ].includes(action.buttonName)) {
				return onExit(without(state, 'history'));
			} else if (action.buttonName === 'Next' && onNextImage) {
				return onNextImage(without(state, 'history'));
			} else if (action.buttonName === 'Prev' && onPrevImage) {
				return onPrevImage(without(state, 'history'));
			}
		}

		dispatchToReducer(action);

		if (onStateUpdate) {
			onStateUpdate(without(state, 'history'));
		}
	});
	var onRegionClassAdded = useEventCallback(function(cls) {
		dispatchToReducer({
			type: 'ON_CLS_ADDED',
			cls: cls
		});

		if (onStateUpdate) {
			onStateUpdate(without(state, 'history'));
		}
	});
	useEffect(
		function() {
			if (selectedImage === undefined) return;
			dispatchToReducer({
				type: 'SELECT_IMAGE',
				imageIndex: selectedImage,
				image: state.images[selectedImage]
			});
		},
		[ selectedImage, state.images ]
	);
	if (!images && !videoSrc) return 'Missing required prop "images" or "videoSrc"';
	return demo
		? React.createElement(DemoLayout, {
				RegionEditLabel: RegionEditLabel,
				alwaysShowNextButton: Boolean(onNextImage),
				alwaysShowPrevButton: Boolean(onPrevImage),
				state: state,
				dispatch: dispatch,
				onRegionClassAdded: onRegionClassAdded,
				hideHeader: hideHeader,
				hideHeaderText: hideHeaderText,
				hideNext: hideNext,
				hidePrev: hidePrev,
				rightExtraItems: rightExtraItems || [],
				onCanvasImageLoadSuccess: onCanvasImageLoadSuccess,
				onCanvasImageLoadError: onCanvasImageLoadError,
				isEditable: isEditable,
			})
		: React.createElement(
				JssProvider,
				{ generateClassName: generateClassName, jss: jss },
				React.createElement(
					SettingsProvider,
					null,
					React.createElement(
						StylesProvider,
						{ injectFirst: true },
						React.createElement(MainLayout, {
							RegionEditLabel: RegionEditLabel,
							alwaysShowNextButton: Boolean(onNextImage),
							alwaysShowPrevButton: Boolean(onPrevImage),
							state: state,
							dispatch: dispatch,
							onRegionClassAdded: onRegionClassAdded,
							hideHeader: hideHeader,
							hideHeaderText: hideHeaderText,
							hideNext: hideNext,
							hidePrev: hidePrev,
							rightExtraItems: rightExtraItems || [],
							onCanvasImageLoadSuccess: onCanvasImageLoadSuccess,
							onCanvasImageLoadError: onCanvasImageLoadError,
							isEditable: isEditable,
						})
					)
				)
			);
};
export default Annotator;
