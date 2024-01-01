export const formValidation = (email,password) => {
    const isEmailValid = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(email) ;
    const isPasswordValid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
    
    if(!isEmailValid) return 'Email is not valid';
    if(!isPasswordValid) return 'Password is not valid';
    return null;
}
