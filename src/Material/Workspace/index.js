import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core'
import classnames from 'classnames'
import Header from '../Header';
import IconSidebar from '../IconSidebar';
import RightSidebar from '../RightSidebar';
import WorkContainer from '../WorkContainer';
import useDimensions from 'react-use-dimensions';
import { IconDictionaryContext } from '../icon-dictionary.js';

var useStyles = makeStyles({
	container: {
		display: 'flex',
		width: '100%',
		flexDirection: 'column',
		backgroundColor: '#313131',
		height: '100%',
		overflow: 'hidden',
		maxWidth: '100vw'
	},
	sidebarsAndContent: {
		display: 'flex',
		flexGrow: 1,
		width: '100%',
		height: '100%',
		minHeight: '500px',
		overflow: 'hidden',
		maxWidth: '100vw'
	}
})

const emptyAr = [];
const emptyObj = {};

export default ({
	style = emptyObj,
	iconSidebarItems = emptyAr,
	selectedTools = [ 'select' ],
	headerItems = emptyAr,
	rightSidebarItems = emptyAr,
	onClickHeaderItem,
	onClickIconSidebarItem,
	headerLeftSide = null,
	iconDictionary = emptyObj,
	rightSidebarExpanded,
	hideHeader = false,
	hideHeaderText = false,
	rightExtraItems = [],
	children
}) => {
	const [ sidebarAndContentRef, sidebarAndContent ] = useDimensions();
	var classes = useStyles()

	return (
		<IconDictionaryContext.Provider value={iconDictionary}>
			<div style={style} className={classnames(classes.container)}>
				<Header
					hideHeaderText={hideHeaderText}
					leftSideContent={headerLeftSide}
					onClickItem={onClickHeaderItem}
					items={headerItems}
				/>
				<div ref={sidebarAndContentRef} className={classnames(classes.sidebarsAndContent)}>
					{iconSidebarItems.length === 0 ? null : (
						<IconSidebar
							onClickItem={onClickIconSidebarItem}
							selectedTools={selectedTools}
							items={iconSidebarItems}
						/>
					)}
					<WorkContainer>{children}</WorkContainer>
					{rightSidebarItems.length === 0 ? null : (
						<Fragment>
							{rightExtraItems.length > 0 && (
								<RightSidebar
									initiallyExpanded={rightSidebarExpanded}
									height={sidebarAndContent.height || 0}
								>
									{rightExtraItems}
								</RightSidebar>
							)}
							<RightSidebar
								initiallyExpanded={rightSidebarExpanded}
								height={sidebarAndContent.height || 0}
								toggleable={false}
							>
								{rightSidebarItems}
							</RightSidebar>
						</Fragment>
					)}
				</div>
			</div>
		</IconDictionaryContext.Provider>
	);
};
