// @flow
import React, { useState, memo, useCallback } from 'react';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core';
import ExpandIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { grey } from '@mui/material/colors';
import classnames from 'classnames';
import useEventCallback from 'use-event-callback';
import Typography from '@mui/material/Typography';
import { useIconDictionary } from '../icon-dictionary.js';
import ResizePanel from '@seveibar/react-resize-panel';
const useStyles = makeStyles(theme => ({
  container: {
    borderBottom: '2px solid #535353',
    '&:first-child': {
      borderTop: '1px solid #535353'
    }
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    paddingLeft: 16,
    paddingRight: 12,
    '& .iconContainer': {
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .MuiSvgIcon-root': {
        width: 16,
        height: 16
      }
    }
  },
  title: {
    fontSize: 11,
    flexGrow: 1,
    fontWeight: 800,
    paddingLeft: 8,
    color: '#fff',
    '& span': {
      color: '#fff',
      fontSize: 11
    }
  },
  expandButton: {
    padding: 0,
    width: 30,
    height: 30,
    color: '#fff',
    '& .icon': {
      width: 20,
      height: 20,
      transition: '500ms transform',
      color: '#fff',
      '&.expanded': {
        transform: 'rotate(180deg)'
      }
    }
  },
  expandedContent: {
    maxHeight: 300,
    overflowY: 'auto',
    '&.noScroll': {
      overflowY: 'visible',
      overflow: 'visible'
    }
  },
  resizeHandler: {
    backgroundColor: '#313133',
    border: '2px solid #535353',
    cursor: 'ns-resize',
    width: '50px',
    height: '12px',
    borderRadius: '8px',
    background: 'white',
    zIndex: 10,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    '&>span': {
      display: 'inline-block',
      overflow: 'hidden',
      fontSize: '12px',
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      lineHeight: '12px',
      marginTop: '-3px',
      letterSpacing: '1px',
      color: '#b3b3b3',
      textShadow: '1px 0 1px rgb(90, 90, 90)'
    },
    '&>span::after': {
      content: '"......"'
    }
  }
}));

const getExpandedFromLocalStorage = title => {
  try {
    return JSON.parse(window.localStorage[`__REACT_WORKSPACE_SIDEBAR_EXPANDED_${title}`]);
  } catch (e) {
    return false;
  }
};

const setExpandedInLocalStorage = (title, expanded) => {
  window.localStorage[`__REACT_WORKSPACE_SIDEBAR_EXPANDED_${title}`] = JSON.stringify(expanded);
};

export const SidebarBox = ({
  icon,
  title,
  subTitle,
  children,
  noScroll = false,
  expandedByDefault
}) => {
  const classes = useStyles();
  const content = /*#__PURE__*/React.createElement("div", {
    className: classnames(classes.expandedContent, noScroll && 'noScroll')
  }, children);
  const [expanded, changeExpandedState] = useState(expandedByDefault === undefined ? getExpandedFromLocalStorage(title) : expandedByDefault);
  const changeExpanded = useCallback(expanded => {
    changeExpandedState(expanded);
    setExpandedInLocalStorage(title, expanded);
  }, [changeExpandedState, title]);
  const toggleExpanded = useEventCallback(() => changeExpanded(!expanded));
  const customIconMapping = useIconDictionary();
  const TitleIcon = customIconMapping[title.toLowerCase()];
  return /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.header
  }, /*#__PURE__*/React.createElement("div", {
    className: "iconContainer"
  }, icon || /*#__PURE__*/React.createElement(TitleIcon, {
    className: classes.titleIcon
  })), /*#__PURE__*/React.createElement(Typography, {
    className: classes.title
  }, title, " ", /*#__PURE__*/React.createElement("span", null, subTitle)), /*#__PURE__*/React.createElement(IconButton, {
    onClick: toggleExpanded,
    className: classes.expandButton
  }, /*#__PURE__*/React.createElement(ExpandIcon, {
    className: classnames('icon', expanded && 'expanded')
  }))), noScroll ? expanded ? content : null : /*#__PURE__*/React.createElement(Collapse, {
    in: expanded
  }, /*#__PURE__*/React.createElement(ResizePanel, {
    direction: "s",
    style: {
      height: 200
    },
    handleClass: classes.resizeHandler
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel",
    style: {
      display: 'block',
      overflow: 'hidden',
      height: 500
    }
  }, content))));
};
export default /*#__PURE__*/memo(SidebarBox, (prev, next) => prev.title === next.title && prev.children === next.children);
//# sourceMappingURL=index.js.map