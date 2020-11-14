import React from 'react';
import { Link } from 'gatsby';

import {
	StyleNav,
	StyledNavBrand,
	StyleNavLinks,
	NavListItem,
	CheckboxInput,
	CheckboxLabel,
	MobileNavIcon,
	NavElement,
	Headline,
	Tab
} from './css';

const Nav = () => {
	return (
		<div id="navbar">
			<CheckboxLabel htmlFor="mobile-nav-icon">
				<MobileNavIcon />
			</CheckboxLabel>
			<CheckboxInput type="checkbox" id="mobile-nav-icon" name="mobile-nav-icon" />

			<StyleNav id="#nav">
				<StyledNavBrand id="icon">
					<Link to="/" aria-label="Click to navigate to homepage">
						<Headline>Jen Beltran</Headline>
					</Link>
				</StyledNavBrand>

				<NavElement>
					<StyleNavLinks>
						<NavListItem>
							<Link to="/">
								<Tab>About Me</Tab>
							</Link>
						</NavListItem>
						<NavListItem>
							<Link to="/projects">
								<Tab>Projects</Tab>
							</Link>
						</NavListItem>
					</StyleNavLinks>
				</NavElement>
			</StyleNav>
		</div>
	);
};

export default Nav;
