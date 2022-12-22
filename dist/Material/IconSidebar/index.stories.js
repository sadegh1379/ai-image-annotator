import React from 'react';
import IconSidebar from './';
import { action } from '@storybook/addon-actions';
export default {
  title: 'IconSidebar',
  component: IconSidebar
};
export const Basic = () => /*#__PURE__*/React.createElement(IconSidebar, {
  onClickItem: action('onClickItem'),
  items: [{
    name: 'Play',
    helperText: 'Play the game'
  }, {
    name: 'Start',
    helperText: 'Start the game'
  }, {
    name: 'Next',
    helperText: 'Next option'
  }]
});
//# sourceMappingURL=index.stories.js.map