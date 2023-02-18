let varName: string = "Alif"; 
console.log(`Asalam o Alaikum ${varName}, would you like to learn typescript?`);
const varName1: string = "Ahmad"
console.log(varName1.toLowerCase()); 
console.log(varName1.toUpperCase()); 
console.log(varName1.toLocaleUpperCase()); 
// I am Muhammad Awais Ahmad and I am working on typescript program on 18th Feb, 2023
// Below program provides one quotation of Imam Hussain A.S
const quote: string = "Death with dignity is better than a life of abasement.";
const author: string = "Imam Hussain A.S";
console.log(`"${quote}" - ${author}`);
const famous_person: string = "Imam Hussain A.S"
const message: string = (`"${quote}" - ${famous_person}`);
console.log(message)
const varName2: string = "\t\n Muhammad Ahmad \t\n";
console.log(`Name with whitespace: "${varName2}"`);
const strippedvarName2: string = varName2.trim();
console.log(`Name without whitespace: "${strippedvarName2}"`);
// I am Muhammad Awais Ahmad and I am working on typescript program on 18th Feb, 2023
// Below program provides detail regarding addtion, subtraction, multiplication and division functions
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
const favoriteNumber = 7;
console.log(`My favorite number is ${favoriteNumber}!`);
const friendNameList = ['Sajjad', 'Sikander', 'Sheraz', 'Zaheer'];
console.log(friendNameList[0]);
console.log(friendNameList[1]);
console.log(friendNameList[2]);
console.log(friendNameList[3]);
const friendNameListmessage = 'Hello, ';
// Printing a personalized message to each person
console.log(friendNameListmessage + friendNameList[0] + '!');
console.log(friendNameListmessage + friendNameList[1] + '!');
console.log(friendNameListmessage + friendNameList[2] + '!');
console.log(friendNameListmessage + friendNameList[3] + '!');
const vehicles = ['Bicycle', 'Car', 'train', 'Jet'];
// Printing statements about each item in the list
console.log("I would like to own a " + vehicles[0] + ".");
console.log("I wish I had a " + vehicles[1] + ".");
console.log("It would be cool to travel in a " + vehicles[2] + ".");
console.log("It would be cool to fly a " + vehicles[3] + ".");
const dinnerGuests = ['Rana Salahudin', 'Rana Bilal', 'Rana Ahmad'];
console.log("Dear " + dinnerGuests[0] + ",\nI would like to invite you to dinner  on Sunday, feb 19th, 2023.\nPlease let me know if you can attend. Sincerely,\n[Muhammad Awais]");
console.log("Dear " + dinnerGuests[1] + ",\nI would like to invite you to dinner  on Sunday, feb 19th, 2023.\nPlease let me know if you can attend. Sincerely,\n[Muhammad Awais]");
console.log("Dear " + dinnerGuests[2] + ",\nI would like to invite you to dinner  on Sunday, feb 19th, 2023.\nPlease let me know if you can attend. Sincerely,\n[Muhammad Awais]");
console.log('Original guest list: ' + dinnerGuests);
// Update the guest list with a new guest
// Print the updated guest list
console.log('New guest list: ' + dinnerGuests);
// Send out new invitations to each guest
dinnerGuests.forEach(function(dinnerGuests) {
  console.log('Dear ' + dinnerGuests + ',\nI wanted to let you know that Rana Salahudin could not attend the dinner but Rana Umair is joining us. Sincerely,\n[Muhammad Awais]');
});
console.log('Original guest list: ' + dinnerGuests);
// Add three new guests to the list
dinnerGuests.push('Ahasn', 'Shuja', 'Muzamil');
// Print the updated guest list
console.log('New guest list: ' + dinnerGuests);
// Send out invitations to each guest
console.log('Sorry, we can only invite two people for dinner.');

// Loop through the guest list and remove guests until only two remain
while (dinnerGuests.length > 2) {
  const removedGuest = dinnerGuests.pop();
  console.log('Sorry ' + removedGuest + ', we are unable to invite you to dinner.');
}
// Send out invitations to each remaining guest
dinnerGuests.forEach(function(dinnerGuests) {
  console.log('Dear ' + dinnerGuests + ',\nI would like to invite you to dinner  on Sunday, feb 19th, 2023.\nPlease let me know if you can attend. Sincerely,\n[Muhammad Awais]');
});
// Remove the last two guests from the list
dinnerGuests.pop();
// Print the final guest list to make sure it's empty
console.log('Final guest list: ' + dinnerGuests);

// Store the locations in an array
let locations: string[] = ["Saudi Arab", "UAE", "Malaysia"];
// Print the original order of the array
console.log("Original Order: ", locations);
// Print the alphabetical order of the array without modifying the actual list
console.log("Alphabetical Order: ", [...locations].sort());
// Show that the array is still in its original order by printing it
console.log("Original Order: ", locations);
// Print the reverse alphabetical order of the array without modifying the actual list
console.log("Reverse Alphabetical Order: ", [...locations].sort().reverse());
// Show that the array is still in its original order by printing it again
console.log("Original Order: ", locations);
// Reverse the order of the array and print it to show the order has changed
locations.reverse();
console.log("Reversed Order: ", locations);
// Reverse the order of the array again and print it to show it's back to its original order
locations.reverse();
console.log("Original Order: ", locations);
// Sort the array so it's stored in alphabetical order and print it to show the order has been changed
locations.sort();
console.log("Sorted Alphabetical Order: ", locations);
locations.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
// Store the names of a few of your friends in an array called names.
const guests: string[] = ['Ahasn', 'Shuja', 'Muzamil'];
// Print each person's name by accessing each element in the list, one at a time.
for (let i = 0; i < guests.length; i++) {
  console.log(guests[i]);
}
// Print a personalized message to each person.
for (let i = 0; i < guests.length; i++) {
  console.log(`Hi ${guests[i]}, would you like to come to dinner?`);
}

const programmingLanguages: string[] = ["Python", "JavaScript", "Java", "C++", "Ruby"];
console.log(programmingLanguages);

let apple = { name: "Apple", color: "Red", origin: "Central Asia" };
let banana = { name: "Banana", color: "Yellow", origin: "Southeast Asia" };
let orange = { name: "Orange", color: "Orange", origin: "China" };
let fruits = { apple, banana, orange };
console.log(fruits);
// 22 is missing 






