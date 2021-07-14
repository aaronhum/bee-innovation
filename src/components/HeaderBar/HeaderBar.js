import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderPanel,
  Switcher,
  SwitcherDivider,
  SwitcherItem,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "carbon-components-react";
import { Link } from "react-router-dom";
import {
  AppSwitcher20,
  ShoppingBag20,
  User20,
} from "@carbon/icons-react";

const HeaderBar = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="IBM Platform Name">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="ShoppingApp"></HeaderName>
        <HeaderNavigation aria-label="ShoppingApp">
          <HeaderMenu aria-label="other-links" menuLinkName="Other Links">
            <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
          </HeaderMenu>
        </HeaderNavigation>

        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="cart"
            tooltipAlignment="end"
            href="/#/cart"
          >
            <ShoppingBag20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="account"
            tooltipAlignment="end"
            href="/#/account"
          >
            <User20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Menu" tooltipAlignment="end">
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>

        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/#/cart">Cart</HeaderMenuItem>
              <HeaderMenuItem href="/#/">Account</HeaderMenuItem>
              <HeaderMenu aria-label="Other Links" menuLinkName="Other Links">
                <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
              </HeaderMenu>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
      </Header>
    )}
  />
);

export default HeaderBar;
