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
  return UserPool.signUp(
    email,
    password,
    [
      { Name: "given_name", Value: firstname },
      { Name: "family_name", Value: lastname },
    ],
    null,
    (err, data) => {
      if (err) alert(err);
      return "success";
    }
  );
};

export const loginUser = async ({ email, password }) => {
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
