let person={
    fname:'tim',
    lname:'roy',
    age:30
}

console.log(person.fname)

person.fname='tom'
console.log(person.fname)
person.gender='male'
console.log(person)
delete person.age
console.log(person)

console.log('gender' in person)

for(let ks in person){
    console.log(person[ks])
}