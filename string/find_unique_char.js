const chars = 'aabdddefbchhcfk';
let map = {}
let unique = []
for(let i  = 0; i < chars.length; i++){
    if(chars[i] in map){
        let prvCount = map[chars[i]]
        map[chars[i]] = prvCount + 1
    }else{
        map[chars[i]] = 1
    }
}

Object.keys(map).forEach(key=>{
    if(map[key] == 1){
        unique.push(key)
    }
})

console.log(unique)