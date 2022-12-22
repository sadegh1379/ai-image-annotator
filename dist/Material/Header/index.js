function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import HeaderButton from '../HeaderButton';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';
import classnames from 'classnames';
var useStyles = makeStyles({
  container: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#313131',
    alignItems: 'center',
    flexShrink: 1,
    boxSizing: 'border-box',
    maxHeight: 1
  }
});
const emptyObj = {}; // type Props = {|
//   leftSideContent?: ?React.Node,
//   onClickItem?: Function,
//   items: Array<{|
//     name: string,
//     icon?: ?React.Node,
//     onClick?: Function,
//   |}>,
// |}

export const Header = ({
  leftSideContent = null,
  hideHeaderText = false,
  items,
  onClickItem
}) => {
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(classes.container)
  }, /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1
  }), items.map(item => /*#__PURE__*/React.createElement(HeaderButton, _extends({
    key: item.name,
    hideText: true,
    onClick: () => {}
  }, item))));
};
export default Header;
//# sourceMappingURL=index.js.map