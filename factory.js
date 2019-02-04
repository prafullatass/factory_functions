const doctorObject = (name, specality, address) => {
    return ` "name" : "${name}"
    "specality" : "${specality}"
    "address" : "${address}"`
}
console.log(doctorObject("Dr. Shah", "Dentist", "12 My Way"))

const petObject =(name, breed) => {
    return `"petName" : "${name}"
    "breed" : "${breed}"
     `
}
console.log(petObject("Doberman", "I don't know"))
console.log(petObject("mdsjf", "sdfksdjfh"))