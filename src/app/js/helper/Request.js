
class Request {
    constructor(){
        this._requestHeaders = {
            mode: 'no-cors',
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            contentType: 'application/json',
            headers: {
                Authorization: 'Token c7d27f85cf45c7fde5cc746f5eb1d37f3b3ca4ff',
                contentType: 'application/json',
            }
        }
    }
    get(url, callback){
        console.log(this._requestHeaders);
        fetch(url, this._requestHeaders)
        .then(response => {
            if (!response.ok){
                return null; 
            }
            return response.text();
        })
        .catch(err =>{
            console.log(err);
        })
    }
}

export default Request;