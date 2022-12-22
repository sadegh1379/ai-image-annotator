import React, { useState, useEffect } from 'react';
import SidebarBox from './';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
export default {
  title: 'SidebarBox',
  component: SidebarBox
};
export const Basic = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 300,
    height: 400
  }
}, /*#__PURE__*/React.createElement(SidebarBox, {
  icon: /*#__PURE__*/React.createElement(FeaturedVideoIcon, null),
  title: "Region Selector"
}, "Content inside sidebar box"));
export const NoChildren = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 300,
    height: 400
  }
}, /*#__PURE__*/React.createElement(SidebarBox, {
  icon: /*#__PURE__*/React.createElement(FeaturedVideoIcon, null),
  title: "Region Selector"
}));
export const StopRendering = () => {
  const [t, setT] = useState(0);
  useEffect(() => {
    let tLocal = 0;
    setInterval(() => {
      setT(tLocal);
      tLocal = (tLocal + 1) % 4;
    }, 500);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      width: 300,
      height: 500
    }
  }, (t === 0 || t === 3) && /*#__PURE__*/React.createElement(SidebarBox, {
    icon: /*#__PURE__*/React.createElement(FeaturedVideoIcon, null),
    title: "Region Selector"
  }, t === 0 || t === 2 ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 300
    }
  }, "hello") : null));
};
//# sourceMappingURL=index.stories.js.map