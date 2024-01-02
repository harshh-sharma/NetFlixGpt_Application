export const formValidation = (email,password,name) => {
    const isEmailValid = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(email) ;
    const isPasswordValid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
    if(name != null) {
        if(typeof(name) !== 'string' || name.length > 5) return 'Name is not valid'
    }
    if(!isEmailValid) return 'Email is not valid';
    if(!isPasswordValid) return 'Password is not valid';
    return null;
}
