const person = {
    name : "babul",
    father : "abul",
    place : "kabul",
    friend :"Rahul"
}

console.log(person, typeof person)

const personJson = JSON.stringify(person)
console.log(personJson, typeof personJson)

const parseJson = JSON.parse(personJson)
console.log(parseJson, typeof parseJson)