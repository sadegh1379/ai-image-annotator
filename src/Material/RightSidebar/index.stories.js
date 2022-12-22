import React from 'react'
import RightSidebar from './'
import SidebarBox from '../SidebarBox'
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo'

export default {
	title: 'RightSidebar',
	component: RightSidebar
}

export const Basic = () => (
  <div style={{ width: 500, height: 500 }}>
    <RightSidebar>
      <SidebarBox icon={<FeaturedVideoIcon />} title="Region Selector">
        Content inside sidebar box
      </SidebarBox>
      <SidebarBox icon={<FeaturedVideoIcon />} title="Region Selector">
        Content inside sidebar box
      </SidebarBox>
    </RightSidebar>
  </div>
)

export const NoChildren = () => (
  <div style={{ width: 500, height: 500 }}>
    <RightSidebar></RightSidebar>
  </div>
)
