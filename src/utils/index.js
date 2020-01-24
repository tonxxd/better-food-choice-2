export const indexOfMany = (str, arr) => {
    for(let a of arr){
        if(str.indexOf(a)> -1){
            return true;
        }
    }
    return false
}