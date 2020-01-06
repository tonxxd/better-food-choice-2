

class Storage {
    static async get(key){
        return new Promise(res => {
            chrome.storage.sync.get([key], result => {
                res(result[key]);
                
            });
        })
    }
    static async set(obj){
        return new Promise(res => {
            chrome.storage.sync.set(obj, () => {
                res()
            })
        })
    }
}

export default Storage