export function validateData(username: string, password: string) {
    //Add validation here and then submit
    validateUsername(username) ? alert('valid username'): alert('invalid username')
    validatePassword(password) ? alert('valid password'): alert('invalid password')
    return true;
}

export function validateUsername(username: string){
    return false;
}

export function validatePassword(password: string){
    return false;
}

function validateBarberInfo(){

}

function validateCustomerInfo(){

}

