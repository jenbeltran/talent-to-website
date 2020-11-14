import styled from 'styled-components';
import { breakpoints } from '../../theme/breakpoints';
import { colors } from '../../theme/colors';

const { tablet, laptop } = breakpoints;
const { pink, indigo, black, white } = colors;

export const StyleNav = styled.section`
	justify-content: center;
	opacity: 0;
	transition: 0.2s opacity;

	width: 0px;
	height: 0px;
	position: fixed;

	@media screen and (min-width: ${laptop}px) {
		display: block;
		padding-top: 1rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;

		z-index: 10;
		opacity: 1;

		width: auto;
		height: auto;
		position: relative;
	}
`;

export const StyledNavBrand = styled.div`
	display: flex;
	justify-content: center;

	margin-bottom: 2rem;

	@media screen and (min-width: ${laptop}px) {
		margin-right: auto;
		margin-bottom: 0;
	}

	img {
		width: auto;
		display: block;
		height: 32px;
		@media screen and (min-width: ${laptop}px) {
			height: 30px;
		}
	}
`;

export const StyleNavLinks = styled.ul`
	display: flex;
	list-style: none;
	margin: auto;
	flex-direction: column;
	padding: 0;

	@media screen and (min-width: ${laptop}px) {
		align-items: center;
		margin: 0;
		flex-direction: row;
	}
`;

export const NavListItem = styled.li`
	text-align: center;
	font-size: 2rem;
	margin-bottom: 2rem;

	@media screen and (min-width: ${laptop}px) {
		padding: 0;
		margin-right: 55px;
		font-size: 1.1rem;
		text-align: left;
		margin-bottom: 0;
	}
`;

export const NavElement = styled.nav``;

export const CheckboxLabel = styled.label`
	height: 60px;
	width: 60px;
	border-radius: 50%;
	background-color: ${pink};

	display: flex;

	position: fixed;
	right: 10px;
	top: 10px;
	z-index: 10;
	pointer: cursor;

	@media screen and (min-width: ${laptop}px) {
		display: none;
	}
`;

export const CheckboxInput = styled.input`
  visibility: hidden;
  position: absolute;
  left: -9999px;

  &:checked + section {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: ${white};
    z-index: 9;

    opacity: 0.85;
    width: 100%;
    height 100%;
  }
`;
export const MobileNavIcon = styled.span`
  height: 2px;
  width: 30px;
  
  display: block;
  background: ${white};
  margin: auto;
  position: relative;

  &::before, &::after {
    content: "";
    display: block;
    background: ${white}
    width: 30px;
    height: 2px;
    position: absolute;
  }

  &::before {
    top: 10px;
  }

  &::after {
    bottom: 10px;
  }
`;

export const NavSection = styled.section`
	@media (min-width: ${laptop}px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0rem 3rem 0rem 3rem;
	}
	@media (max-width: ${tablet}px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		text-align: center;
		background-color: ${pink};
	}
`;

export const Wrapper = styled.div`
	@media (min-width: ${laptop}px) {
		display: flex;
		justify-content: flex-end;
	}
`;

export const Anchor = styled.a`text-decoration: none;`;

export const Headline = styled.p`
	@media (min-width: ${laptop}px) {
		font-size: 2rem;
		font-weight: 800;
		color: ${pink};
		padding-left: 3rem;
		&:hover {
			text-decoration: inherit;
			color: ${pink};
		}
	}
	@media (max-width: ${tablet}px) {
		font-size: 2rem;
		font-weight: 800;
		color: ${pink};
		&:hover {
			text-decoration: inherit;
			color: ${pink};
		}
	}
`;

export const Tab = styled.p`
	@media (min-width: ${laptop}px) {
		font-size: 1.2rem;
		padding: 0rem 1rem 0rem 1rem;
		color: ${black};
		&:hover {
			text-decoration: inherit;
			color: ${pink};
		}
	}
	@media (max-width: ${tablet}px) {
		font-size: 1.6rem;
		font-weight: 500;
		color: ${indigo};
		margin: 0;
		padding: 0;
		&:hover {
			text-decoration: inherit;
			color: ${pink};
		}
	}
`;
