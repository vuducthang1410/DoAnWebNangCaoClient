class Utils {
  static regexValidEmail(email) {
    if (email.length === 0) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  static validataSignUp(dataSignUp) {
    return !Object.values(dataSignUp).some((value) => value.length < 5);
  }
  static validPassword(password, repeatPassword) {
    return password === repeatPassword;
  }
}
export default Utils;
