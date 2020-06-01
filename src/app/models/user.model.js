class User {
  constructor(userObj) {
    this.userId = userObj.userId;
    this.userUUID = userObj.userUUID;
    this.userFirstName = userObj.userFirstName;
    this.userLastName = userObj.userLastName;
    this.userPassword = userObj.userPassword;
    this.userEmail = userObj.userEmail;
    this.userCreteadAt = userObj.userCreteadAt;
    this.userUpdatedA = userObj.userUpdatedA;
    this.userAccssToken = userObj.userAccessToken;
    this.userRefreshToken = userObj.userRefreshToken;
  }
}

export default User;

// class UserBuilder {
//   setUserId(userId) {
//     this.userId = userId;
//     return this;
//   }
//   setUserUUID(userUUID) {
//     this.userUUID = userUUID;
//     return this;
//   }
//   setUserFirstName(userFirstName) {
//     this.userFirstName = userFirstName;
//     return this;
//   }
//   setUserLastName(userLastName) {
//     this.userLastName = userLastName;
//     return this;
//   }
//   setUserPassword(userPassword) {
//     this.userPassword = userPassword;
//     return this;
//   }
//   setUserEmail(userEmail) {
//     this.userEmail = userEmail;
//     return this;
//   }
//   setUserCreteadAt(userCreteadAt) {
//     this.userCreteadAt = userCreteadAt;
//     return this;
//   }
//   setUserUpdatedA(userUpdatedA) {
//     this.userUpdatedA = userUpdatedA;
//     return this;
//   }
//   setUserAccssToken(userAccssToken) {
//     this.userAccssToken = userAccssToken;
//     return this;
//   }
//   setUserRefreshToken(userRefreshToken) {
//     this.userRefreshToken = userRefreshToken;
//     return this;
//   }

//   build() {
//     return new User(this);
//   }
// }

// const userBuilder = new UserBuilder();

// const user = userBuilder.setUserAccssToken("asdasd-213-23").setUserEmail("picon@gmail.com").build()
