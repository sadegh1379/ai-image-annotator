import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SidebarBoxContainer from '../SidebarBoxContainer'
import CollectionsIcon from '@material-ui/icons/Collections'
import { grey } from '@material-ui/core/colors'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import isEqual from 'lodash/isEqual'
var useStyles = makeStyles({
	img: {
		width: 40,
		height: 40,
		borderRadius: 8
	}
})
export var ImageSelectorSidebarBox = function ImageSelectorSidebarBox(_ref) {
	var images = _ref.images,
		onSelect = _ref.onSelect
	var classes = useStyles()
	return React.createElement(SidebarBoxContainer, {
		title: 'Images',
		subTitle: '('.concat(images.length, ')'),
		icon: React.createElement(CollectionsIcon, {
			style: {
				color: grey[700]
			}
		})
	}, React.createElement('div', null, React.createElement(List, null, images.map(function (img, i) {
		return React.createElement(ListItem, {
			button: true,
			onClick: function onClick() {
				return onSelect(img)
			},
			dense: true,
			key: i
		}, React.createElement('img', {
			className: classes.img,
			src: img.src
		}), React.createElement(ListItemText, {
			primary: img.name,
			secondary: ''.concat((img.regions || []).length, ' Labels')
		}))
	}))))
}

var mapUsedImageProps = function mapUsedImageProps(a) {
	return [a.name, (a.regions || []).length, a.src]
}

export default memo(ImageSelectorSidebarBox, function (prevProps, nextProps) {
	return isEqual(prevProps.images.map(mapUsedImageProps), nextProps.images.map(mapUsedImageProps))
})