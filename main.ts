/*You just found a bigger dinner table, so now more space is available. Think of three more guests 
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/

const myFriends: string [] = ["Zohaib", "Ayaz", "Faisal", "Rameez"];
console.log(myFriends)

console.log(`we have 3 more friends to invite on dinner\n`)

//adding three more friends
//add at beginning
myFriends.unshift("Kamran");
// ["Kamran", Zohaib", "Ayaz", "Faisal", "Rameez"];
console.log(myFriends);


//add at middle
myFriends.splice(2, 0, "Muhammad Ali");
console.log(myFriends);

//add at last

myFriends.push("Junaid");
console.log(myFriends);

//print all firends alongwith message
for(let i = 0; i < myFriends.length; i++){
    console.log(`Mr. ${myFriends[i]} you are invited to my dinner`);
}


