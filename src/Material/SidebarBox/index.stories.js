import React, { useState, useEffect } from 'react'
import SidebarBox from './'
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo'

export default {
	title: 'SidebarBox',
	component: SidebarBox
}

export const Basic = () => (
  <div style={{ width: 300, height: 400 }}>
    <SidebarBox icon={<FeaturedVideoIcon />} title="Region Selector">
      Content inside sidebar box
    </SidebarBox>
  </div>
)

export const NoChildren = () => (
  <div style={{ width: 300, height: 400 }}>
    <SidebarBox icon={<FeaturedVideoIcon />} title="Region Selector" />
  </div>
)

export const StopRendering = () => {
	const [t, setT] = useState(0)
	useEffect(() => {
		let tLocal = 0
		setInterval(() => {
			setT(tLocal)
			tLocal = (tLocal + 1) % 4
		}, 500)
	}, [])
	return (
    <div key={t} style={{ width: 300, height: 500 }}>
      {(t === 0 || t === 3) && (
        <SidebarBox icon={<FeaturedVideoIcon />} title="Region Selector">
          {t === 0 || t === 2 ? <div style={{ height: 300 }}>hello</div> : null}
        </SidebarBox>
      )}
    </div>
	)
}
