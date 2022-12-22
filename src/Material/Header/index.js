import React from 'react'
import HeaderButton from '../HeaderButton'
import Box from '@mui/material/Box'
import { makeStyles } from '@material-ui/core'
import classnames from 'classnames'

var useStyles = makeStyles({
  container: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#313131',
    alignItems: 'center',
    flexShrink: 1,
    boxSizing: 'border-box',
    maxHeight: 1,
  }
})
const emptyObj = {}

// type Props = {|
//   leftSideContent?: ?React.Node,
//   onClickItem?: Function,
//   items: Array<{|
//     name: string,
//     icon?: ?React.Node,
//     onClick?: Function,
//   |}>,
// |}

export const Header = ({
  leftSideContent = null,
  hideHeaderText = false,
  items,
  onClickItem,
}) => {
  var classes = useStyles()

	return (
    <div className={classnames(classes.container)}>
        <Box flexGrow={1}></Box>
        {items.map((item) => (
          <HeaderButton
            key={item.name}
            hideText={true}
            onClick={() => {}}
            {...item}
          />
        ))}
    </div>
	)
}

export default Header
