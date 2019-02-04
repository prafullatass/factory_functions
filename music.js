/*Your job is to sign each of these promising young music stars to the 
appropriate label.

JumpStop Records works with Funk and Rap artists.
Chatten Records works with Country and Bluegrass artists.
Polar Records works with Pop artists.

Create an array for each of these record labels.

Create a factory function for each possible genre (e.g. createBluegrassArtist()). 
Then invoke the appropriate function for each of the following artists and 
place the resulting object in the corresponding label array.

Bruce Atikins is a Country artist and is 23 years old
Jensen Brown is a Pop artist and is 20 years old
Dre Funkz is a Funk artist and is 25 years old
Dusta Grimes is a Rap artist and is 21 years old
Bartholomew Danielson is a Bluegrass artist and is 23 years old
Avilee Dallas is a Country artist and is 19 years old
Austin Kinkaid is a Pop artist and is 22 years old
Loyoncé Branis is a Rap artist and is 27 years old*/

const JumpStopRecord = []
const chattenRecord = []
const polarRecord = []

const createJumpStopArtist = (name, age) => {
    return {"artistName" : name, "age" : age}
}

const insertIntoArray = (genre, obj) => {
    if (genre === "Funk" || genre === "Rap")
        JumpStopRecord.push(obj)
    else if (genre === "Country" || genre === "Bluegrass")
        chattenRecord.push(obj)
    else
        polarRecord.push(obj)
}

insertIntoArray("Country", createJumpStopArtist("Bruce Atikins", 23))
insertIntoArray("Pop", createJumpStopArtist("Jensen Brown", 20))
insertIntoArray("Funk", createJumpStopArtist("Dre Funkz", 25))
insertIntoArray("Rap", createJumpStopArtist("Dusta Grimes", 21))
insertIntoArray("Bluegrass", createJumpStopArtist("Bartholomew Danielson", 23))
insertIntoArray("Country", createJumpStopArtist("Avilee Dallas", 19))
insertIntoArray("Pop", createJumpStopArtist("Austin Kinkaid", 22))
insertIntoArray("Rap", createJumpStopArtist("Loyoncé Branis", 27))


console.log(JumpStopRecord)
console.log(chattenRecord)
console.log(polarRecord)



