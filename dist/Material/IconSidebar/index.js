import React from 'react';
import { makeStyles } from '@material-ui/core';
import classnames from 'classnames';
import IconButton from '@mui/material/IconButton';
import { iconMapping } from '../icon-mapping.js';
import { useIconDictionary } from '../icon-dictionary';
import Tooltip from '@mui/material/Tooltip';
var useStyles = makeStyles({
  container: {
    width: 50,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#313131',
    color: '#fff',
    flexShrink: 0
  }
}); // type Props = {
//   items: Array<{|
//     name: string,
//     helperText: string,
//     icon?: ?React.Node,
//     onClick: Function,
//   |}>,
// }

const emptyAr = [];
export const IconSidebar = ({
  items = emptyAr,
  onClickItem,
  selectedTools = emptyAr
}) => {
  const customIconMapping = useIconDictionary();
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(classes.container)
  }, items.map(item => {
    let NameIcon = customIconMapping[item.name.toLowerCase()] || iconMapping[item.name.toLowerCase()] || iconMapping['help'];
    const buttonPart = /*#__PURE__*/React.createElement(IconButton, {
      style: {
        color: item.selected || selectedTools.includes(item.name.toLowerCase()) ? '#1874f4' : '#fff'
      },
      key: item.name,
      disabled: Boolean(item.disabled),
      onClick: item.onClick ? item.onClick : () => onClickItem(item)
    }, item.icon || /*#__PURE__*/React.createElement(NameIcon, null));
    if (!item.helperText) return buttonPart;
    return /*#__PURE__*/React.createElement(Tooltip, {
      key: item.name,
      title: item.helperText,
      placement: "right"
    }, buttonPart);
  }));
};
export default IconSidebar;
//# sourceMappingURL=index.js.map