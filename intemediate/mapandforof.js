var john = {
    name : 'I am JOHN',
    age : 29,
    isActive : true
}
var Marry = {
    name : 'I am Marry',
    age : 23,
    isActive : true
}
var sam = {
    name : 'I am Sam',
    age : 25,
    isActive : false
}

let user = new Map()

console.log(typeof(user));

user.set('john', john)
user.set('Marry', Marry)

console.log(user);
console.log(user.size);
console.log(user.get('john'));
console.log(user.keys());
console.log(user.values());

for(const keys of user.keys()){
    console.log(keys);
}

for(const [key, value] of user.entries()){
    console.log(key + ' = ' + value.age);
}

user.forEach((value,key) => console.log(key +' = ' + value.name))