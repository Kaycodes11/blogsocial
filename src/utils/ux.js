/*
one function will call to fectch results from DB = function login()
another will check if that has error code of 0 or 1 = function allowLogin()
based on that a generator function that expects email
& password parameter which will come from login() and then allowLogin() will check if it's
0 then throw error which will be within catch block of signInWithEmail if any error and from
ther error object could easily be dispatched via put(signInFaliure(error)) and
thereafter generator function will work accordingly

function* signWithEmailAndPassword({email, password}) {
  try {
    const val = yield call(allowLogin(login));
    yield put(signInSuccess(val))
  } catch(error) {
    yield put(signInFaliure(val))
  }
}



(async function allowLogin(login) {
  try {
    if (login.error.code === 1) {
      // email and password is proper : response 200
      return login;
    } else if (login.error.code === 0) {
      // email and password is proper : response 200
      return new Error(login);
    }
  } catch (error) {
    alert(error.message);
  }
})({error: {code: 1}, response: null}).then(res => console.log(res))


create a function that will have an argument and based on that argument I'll yield call()
function something(fn) {
  return fn => {
    yield call(someValue, {})
  }
}



*/
