class Utils {
  static regexValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  static validataSignUp(dataSignUp) {
    return !Object.values(dataSignUp).some((value) => value.length < 5);
  }
  static validPassword(password,repeatPassword){
    return password===repeatPassword
  }
}
export default Utils;
