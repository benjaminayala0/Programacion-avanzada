
function pick(obj,keys){
    return keys.reduce ((acc,key)=>{
        if(key in obj){
            acc[key] = obj[key];
        }
        return acc;
    },{});
}

console.log(pick({a:1, b:2, c:3}, ['a','c','z']));

