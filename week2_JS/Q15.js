
function addContact(refreshCallback) {
    
    console.log("Hello from the other side!");
    
    refreshCallback();
    
}

function refreshContactList() {
    
console.log("Hello World!");
 let sum = 2+2;

 console.log(sum);
}

addContact(refreshContactList); 