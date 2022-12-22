import React from 'react'
import Header from './'
import { action } from '@storybook/addon-actions'

export default {
	title: 'Header',
	component: Header,
}

export const Basic = () => (
  <Header
    leftSideContent="Left Side Content"
    onClickItem={action('onClickItem')}
    items={[
      { name: 'Prev' },
      { name: 'Next' },
      { name: 'Clone', disabled: true },
      { name: 'Settings' },
]}
  />
)
