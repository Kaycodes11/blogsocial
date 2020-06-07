import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import { ReactComponent as Logo } from '../../../assets/images/crown.svg';
// import { auth } from '../../../firebase/firebase.utils';
// import CartIcon from '../../components/cart-icon/cart-icon.component';
// import CartDropDown from '../cart-dropdown/cart-dropdown.component';
// import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { signOutStart } from "../../../redux/user/user.action";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";
// import './header.styles.scss';

/* what does this component will hold? Logo, some links
From which component will it take data(props)? And what properties are exactly needed here? */

const Header = ({ currentUser, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      {/* <Logo className="logo" /> for svg*/}
      <h2>Blog</h2>
    </LogoContainer>

    <OptionsContainer>
      {currentUser ? <OptionLink to="/create">Create</OptionLink> : <OptionLink to="/signin">Create</OptionLink>}

      <OptionLink to="/myprofile">Profile</OptionLink>
      {// if true render div that will sign out onClick else show a link that will route to signin
      currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      {/* <CartIcon /> */}
    </OptionsContainer>
    {/* {hidden ? null : <CartDropDown />} */}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  // thanks to importing connect; accesessing rootReducers as state parameter here to modify this component as needed
  currentUser: selectCurrentUser
  // hidden: selectCartHidden
  // here, modified this 'header' component to be the receving the currentUser value from our reducer
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
