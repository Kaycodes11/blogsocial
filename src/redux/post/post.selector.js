import { reselect } from "reselect";
const selectPosts = state => state.post;

/*
now what to do with it: return a
specific property from it/do some calculation then return a property etc.
*/
export const selectCurrentPosts = createSelector([selectCurrentPosts], user => user.postCollection);
