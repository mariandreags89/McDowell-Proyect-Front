import axios from "axios";

class UsersManager {
  static async login(infoUser, setLoggedIn, setNotLoggedIn) {
    let response;
    try {
      response = await axios.post(
        "http://localhost:3001/api/users/signin",
        infoUser
      );
      setLoggedIn(true);
    } catch (error) {
      setNotLoggedIn(true);
    }
    return (setLoggedIn, setNotLoggedIn, response)
  }

  static async register(userInformation, setCreated, setNotCreated, setErrors) {
    let response;
    console.log(userInformation)
    try {
      response = await axios.post("http://localhost:3001/api/users/register", userInformation );
      setCreated(true);
    } catch (error) {
      setErrors(error.response.data.errorsMsg);
      setNotCreated(true);
    }
    return (setCreated, setNotCreated, setErrors, response)
  }
}

export default UsersManager;
