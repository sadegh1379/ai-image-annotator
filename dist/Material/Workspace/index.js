import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import classnames from 'classnames';
import Header from '../Header';
import IconSidebar from '../IconSidebar';
import RightSidebar from '../RightSidebar';
import WorkContainer from '../WorkContainer';
import useDimensions from 'react-use-dimensions';
import { IconDictionaryContext } from '../icon-dictionary.js';
var useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#313131',
    height: '100%',
    overflow: 'hidden',
    maxWidth: '100vw'
  },
  sidebarsAndContent: {
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    height: '100%',
    minHeight: '500px',
    overflow: 'hidden',
    maxWidth: '100vw'
  }
});
const emptyAr = [];
const emptyObj = {};
export default (({
  style = emptyObj,
  iconSidebarItems = emptyAr,
  selectedTools = ['select'],
  headerItems = emptyAr,
  rightSidebarItems = emptyAr,
  onClickHeaderItem,
  onClickIconSidebarItem,
  headerLeftSide = null,
  iconDictionary = emptyObj,
  rightSidebarExpanded,
  hideHeader = false,
  hideHeaderText = false,
  rightExtraItems = [],
  children
}) => {
  const [sidebarAndContentRef, sidebarAndContent] = useDimensions();
  var classes = useStyles();
  return /*#__PURE__*/React.createElement(IconDictionaryContext.Provider, {
    value: iconDictionary
  }, /*#__PURE__*/React.createElement("div", {
    style: style,
    className: classnames(classes.container)
  }, /*#__PURE__*/React.createElement(Header, {
    hideHeaderText: hideHeaderText,
    leftSideContent: headerLeftSide,
    onClickItem: onClickHeaderItem,
    items: headerItems
  }), /*#__PURE__*/React.createElement("div", {
    ref: sidebarAndContentRef,
    className: classnames(classes.sidebarsAndContent)
  }, iconSidebarItems.length === 0 ? null : /*#__PURE__*/React.createElement(IconSidebar, {
    onClickItem: onClickIconSidebarItem,
    selectedTools: selectedTools,
    items: iconSidebarItems
  }), /*#__PURE__*/React.createElement(WorkContainer, null, children), rightSidebarItems.length === 0 ? null : /*#__PURE__*/React.createElement(Fragment, null, rightExtraItems.length > 0 && /*#__PURE__*/React.createElement(RightSidebar, {
    initiallyExpanded: rightSidebarExpanded,
    height: sidebarAndContent.height || 0
  }, rightExtraItems), /*#__PURE__*/React.createElement(RightSidebar, {
    initiallyExpanded: rightSidebarExpanded,
    height: sidebarAndContent.height || 0,
    toggleable: false
  }, rightSidebarItems)))));
});
//# sourceMappingURL=index.js.map