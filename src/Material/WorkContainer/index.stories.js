import React from 'react'
import WorkContainer from './'
import SidebarBox from '../SidebarBox'
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo'

export default {
	title: 'WorkContainer',
	component: WorkContainer,
}

export const Basic = () => (
  <WorkContainer>
    <div style={{ width: 300, height: 300, backgroundColor: '#aaa' }}>
      The work is in here
    </div>
  </WorkContainer>
)
