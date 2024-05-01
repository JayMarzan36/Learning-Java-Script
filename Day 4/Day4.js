// User input
const array = [];
const UserInp = prompt("Input: ");
if (UserInp !== null) {
    alert("You inputed: " + UserInp);
    array.push(UserInp);
}

const display = document.getElementById("display")
const newArray = [];
array.forEach(function (array) {
    newArray.push(array.length);
})
display.value = newArray;
