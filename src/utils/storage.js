

class Storage {

    static async clear(){
        return new Promise(res => {
            localStorage.clear()
            chrome.storage.sync.clear(() => {
                res();  
            });
        })
    }
    static async get(key){
        return new Promise(res => {
            chrome.storage.sync.get([key], result => {
                res(result[key]);  
            });
        })
    }

    static getAll(){
        return new Promise(res => {
            chrome.storage.sync.get(null, result => {
                res(result);  
            });    
        })
    }
    static async set(obj, value = false){

        return new Promise(res => {
            chrome.storage.sync.set(typeof obj === 'string' ? {[obj]:value} : obj, () => {
                res()
            })
        })
    }
}

export default Storage