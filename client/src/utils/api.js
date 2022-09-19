import LoginCtrl from "./login_ctrl";

const headers = () => {
    let token = '';
    const user = LoginCtrl.getUser();
    if(user){
        token = user.accessToken;
    }
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
}
const get = (url) => {
    return new Promise(function(resolve,reject){
        fetch(url,{
            method: 'GET',
            headers: headers()
        }).then((res) => res.json())
        .then((data) => {
            if(data.error){
                console.error(data.error);
                return;
            }
            resolve(data);
        }).catch((err) => {
            console.error(err);
        })
    })
}


const post = (url,data) => {
    return new Promise(function(resolve,reject){
        fetch(url,{
            method: 'POST',
            headers: headers(),
            body: JSON.stringify(data),
        })
        .then((res) => res.json)
        .then((data) => {
            if(data.error){
                console.error(data.error);
                return;
            }
            resolve(data);
        }).catch((err) => {
            console.error(err);
        })
    }
)}

const put = (url,data) => {
    return new Promise(function(resolve,reject){
        fetch(url, {
            method: 'PUT',
            headers: headers(),
            body: JSON.stringify(data),
        }).then((res) => res.json())
        .then((data) => {
            if(data.error){
                console.error(data.error);
            }
            resolve(data);
        }).catch((err) => {
            console.error(err);
        })
    })
}

const remove = (url,data) => {
    return new Promise(function(resolve,reject){
        fetch(url, {
            method: 'DELETE',
            headers: headers(),
            body: JSON.stringify(data),
        }).then((res) => {
            if(res.ok){
                resolve(res);
            }else{
                console.error("error");
            }
        }).catch((err) => {
            console.error(err);
        })
    })
}

const api = {
    get,put,post,remove
}

export default api;