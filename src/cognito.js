import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_izWlxSppc",
  ClientId: "7gtbhov4htcuiehjf1tcqvrams",
};

const UserPool = new CognitoUserPool(poolData);

export const registerUser = ({ email, password, firstname, lastname }) => {
  return new Promise(function (resolve, reject) {
    UserPool.signUp(
      email,
      password,
      [
        { Name: "given_name", Value: firstname },
        { Name: "family_name", Value: lastname },
      ],
      null,
      (err, data) => {
        if (err) {
            return reject(err);
        }
        resolve(data);
      }
    );
  });
};

export const loginUser = ({ email, password }) => {
  var userData = {
    Username: email,
    Pool: UserPool,
  };

  var cognitoUser = new CognitoUser(userData);
  return new Promise(function (resolve, reject) {
    cognitoUser.authenticateUser(
      new AuthenticationDetails({
        Username: email,
        Password: password,
      }),
      {
        onSuccess: resolve,
        onFailure: reject,
      }
    );
  });
};

export const logoutUser = (email) => {
  var userData = {
    Username: email,
    Pool: UserPool,
  };

  var cognitoUser = new CognitoUser(userData);
  cognitoUser.signOut();
};
