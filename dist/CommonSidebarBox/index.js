import React from 'react';
import SidebarBoxContainer from '../SidebarBoxContainer';
import NoteIcon from '@material-ui/icons/Note';
export var CommonSidebarBox = function HistorySidebarBox(_ref) {
  return /*#__PURE__*/React.createElement(SidebarBoxContainer, {
    title: _ref.title || 'No title',
    icon: /*#__PURE__*/React.createElement(NoteIcon, {
      style: {
        color: '#fff'
      }
    }),
    expandedByDefault: _ref.expandedByDefault || false
  }, _ref.children);
};
export default CommonSidebarBox;
//# sourceMappingURL=index.js.map