import React from 'react';
import RightSidebar from './';
import SidebarBox from '../SidebarBox';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
export default {
  title: 'RightSidebar',
  component: RightSidebar
};
export const Basic = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 500,
    height: 500
  }
}, /*#__PURE__*/React.createElement(RightSidebar, null, /*#__PURE__*/React.createElement(SidebarBox, {
  icon: /*#__PURE__*/React.createElement(FeaturedVideoIcon, null),
  title: "Region Selector"
}, "Content inside sidebar box"), /*#__PURE__*/React.createElement(SidebarBox, {
  icon: /*#__PURE__*/React.createElement(FeaturedVideoIcon, null),
  title: "Region Selector"
}, "Content inside sidebar box")));
export const NoChildren = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 500,
    height: 500
  }
}, /*#__PURE__*/React.createElement(RightSidebar, null));
//# sourceMappingURL=index.stories.js.map