let original = {
    name: "Bob",
    age: 30
};
console.log(original);
let copy = JSON.parse(JSON.stringify(original));
copy.name = "Charlie"
console.log(copy);