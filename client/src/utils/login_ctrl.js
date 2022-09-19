const STORAGE_KEY = 'MY-APPOINTMENT';
const loginRequired = () => {
    if(getUser){
        return;
    }
    localStorage.setItem(STORAGE_KEY,JSON.stringify({afterSignInPath: window.location.href}));
    window.location.href = '/Login';
}

const getUser = () => {
    try{
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if(data && data.user){
            return data.user;
        }
    }catch(err){

    }
    return null;
}

const getAfterSigninPath = () => {
    try{
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if(data && data.afterSignInPath){
            return data.afterSignInPath;
        }

    }catch{

    }
    return null;
}

const loggedInAs = (user) => {
    const path = getAfterSigninPath();
    localStorage.setItem(STORAGE_KEY,JSON.stringify({user:user}));
    if(!user){
        return;
    }
    if(path){
        window.location.href = path;
    }else{
        window.location.href = '/';
    }
}


const signout = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.href = '/';
}

const LoginCtrl = {
    loginRequired,getUser,loggedInAs,signout
}

export default LoginCtrl;