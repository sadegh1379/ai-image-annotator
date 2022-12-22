import React from 'react';
import Header from './';
import { action } from '@storybook/addon-actions';
export default {
  title: 'Header',
  component: Header
};
export const Basic = () => /*#__PURE__*/React.createElement(Header, {
  leftSideContent: "Left Side Content",
  onClickItem: action('onClickItem'),
  items: [{
    name: 'Prev'
  }, {
    name: 'Next'
  }, {
    name: 'Clone',
    disabled: true
  }, {
    name: 'Settings'
  }]
});
//# sourceMappingURL=index.stories.js.map