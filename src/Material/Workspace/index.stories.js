import React from 'react'
import { action } from '@storybook/addon-actions'
import Workspace from './'
import SidebarBox from '../SidebarBox'
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo'
import PlayIcon from '@mui/icons-material/PlayArrow'

export default {
	title: 'Workspace',
	component: Workspace,
}

export const Basic = () => (
  <Workspace
    allowFullscreen
    headerItems={[{ name: 'Prev' }, { name: 'Next' }, { name: 'Save' }]}
    onClickHeaderItem={action('onClickHeaderItem')}
    onClickIconSidebarItem={action('onClickIconSidebarItem')}
    rightSidebarExpanded
    iconSidebarItems={[
	{
		name: 'Play',
		helperText: 'Play Tooltip',
	},
	{
		name: 'Pause',
		helperText: 'Pause Tooltip',
	},
]}
    rightSidebarItems={[
	<SidebarBox icon={<FeaturedVideoIcon />} title="Region Selector">
        Hello world!
      </SidebarBox>,
	<SidebarBox icon={<PlayIcon />} title="Playable GIFs">
        Hello world!
      </SidebarBox>,
]}
  >
    <div
      style={{ margin: 40, width: 400, height: 400, backgroundColor: '#f00' }}
    >
      Hello World
    </div>
  </Workspace>
)

Basic.story = {
	name: 'Basic',
}

export const WithIconDictionary = () => (
  <div style={{ height: 400 }}>
    <Workspace
      allowFullscreen
      iconDictionary={{
	'custom icon': FeaturedVideoIcon,
}}
      headerItems={[
        { name: 'Prev' },
        { name: 'Next' },
        { name: 'Save' },
        { name: 'Custom Icon' },
]}
      onClickHeaderItem={action('onClickHeaderItem')}
      onClickIconSidebarItem={action('onClickIconSidebarItem')}
      iconSidebarItems={[
	{
		name: 'Custom Icon',
	},
	{
		name: 'Pause',
	},
]}
      rightSidebarItems={[
	<SidebarBox icon={<FeaturedVideoIcon />} title="Region Selector">
          Hello world!
        </SidebarBox>,
]}
    >
      <div style={{ width: '150vw', height: '150vh' }}>Hello World!</div>
    </Workspace>
  </div>
)

WithIconDictionary.story = {
	name: 'WithIconDictionary',
}

export const FullWidthHeightViewport = () => (
  <div style={{ width: '90vw', height: '90vh' }}>
    <Workspace
      allowFullscreen
      headerItems={[{ name: 'Prev' }, { name: 'Next' }, { name: 'Save' }]}
      onClickHeaderItem={action('onClickHeaderItem')}
      onClickIconSidebarItem={action('onClickIconSidebarItem')}
      selectedTools={['play']}
      iconSidebarItems={[
	{
		name: 'Play',
		helperText: 'Play Tooltip',
	},
	{
		name: 'Pause',
		helperText: 'Pause Tooltip',
	},
]}
      rightSidebarItems={[
	<SidebarBox icon={<FeaturedVideoIcon />} title="Region Selector">
          Hello world!
        </SidebarBox>,
]}
    >
      <div
        style={{ margin: 40, width: 400, height: 400, backgroundColor: '#f00' }}
      >
        Hello World
      </div>
    </Workspace>
  </div>
)

FullWidthHeightViewport.story = {
	name: 'FullWidthHeightViewport',
}

export const HideHeader = () => (
  <div style={{ width: '90vw', height: '90vh' }}>
    <Workspace
      allowFullscreen
      hideHeader
      headerItems={[{ name: 'Prev' }, { name: 'Next' }, { name: 'Save' }]}
      onClickHeaderItem={action('onClickHeaderItem')}
      onClickIconSidebarItem={action('onClickIconSidebarItem')}
      selectedTools={['play']}
      iconSidebarItems={[
	{
		name: 'Play',
		helperText: 'Play Tooltip',
	},
	{
		name: 'Pause',
		helperText: 'Pause Tooltip',
	},
]}
      rightSidebarItems={[
	<SidebarBox icon={<FeaturedVideoIcon />} title="Region Selector">
          Hello world!
        </SidebarBox>,
]}
    >
      <div
        style={{ margin: 40, width: 400, height: 400, backgroundColor: '#f00' }}
      >
        Hello World
      </div>
    </Workspace>
  </div>
)

HideHeader.story = {
	name: 'HideHeader',
}

export const HideHeaderText = () => (
  <div style={{ width: '90vw', height: '90vh' }}>
    <Workspace
      allowFullscreen
      hideHeaderText
      headerItems={[{ name: 'Prev' }, { name: 'Next' }, { name: 'Save' }]}
      onClickHeaderItem={action('onClickHeaderItem')}
      onClickIconSidebarItem={action('onClickIconSidebarItem')}
      selectedTools={['play']}
      iconSidebarItems={[
	{
		name: 'Play',
		helperText: 'Play Tooltip',
	},
	{
		name: 'Pause',
		helperText: 'Pause Tooltip',
	},
]}
      rightSidebarItems={[
	<SidebarBox icon={<FeaturedVideoIcon />} title="Region Selector">
          Hello world!
        </SidebarBox>,
]}
    >
      <div
        style={{ margin: 40, width: 400, height: 400, backgroundColor: '#f00' }}
      >
        Hello World
      </div>
    </Workspace>
  </div>
)

HideHeaderText.story = {
	name: 'HideHeaderText',
}
