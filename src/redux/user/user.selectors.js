import { createSelector } from "reselect";

// Which one(or slice) from from the main root-reducer(state) ?? Here it's user slice
const selectUser = state => state.user;

// now what to do with it: return a specific property from it/do some calculation then return a property etc.
export const selectCurrentUser = createSelector([selectUser], user => user.currentUser);

/*
userReducer is saved to user property & it returns ...state, currentUser and error property, as selectUser returns
an object from that It'll just take currentUser property

Selector allows to manipulate/modify as needed and then it can be imported to whichever component as needed and
instead of using mapStateToProps, I can use Selectors just like here [selectors memoizes the state and doesn't render
if there's no changes on it]

*/
