import accounts from "./accounts.mjs"

// Define a function that returns an array containing all of the ip4 addresses. The function should accept the accounts array as input. 

function getIPAddresses(accountArray) {
    const ipAddresses = []

    for (let i = 0; i < accountArray.length; i++) {
        const currentAccount = accountArray[i]
        const valueToAddToArray = currentAccount.last_login.ip4
        ipAddresses.push(valueToAddToArray)
    }

    return ipAddresses
}

console.log(getIPAddresses(accounts))
// ^^^^^^^ REWRITTEN WITH MAP:
const onlyAddress = accounts.map(
    function getIPAddresses (account) {
        return account.last_login.ip4
    }
)
console.log(onlyAddress)

// ^^^^^^^ CAN BE REWRITTEN:
const onlyAddress2 = accounts.map(account =>  account.last_login.ip4)
console.log(onlyAddress2)



// Define a function that will return an array that contains all of the values of a articular key on each object in an array. The function should accept the accounts array as input. 

// If you pass the string of "email" to this function as an argument value, you should get back an array containing all of the emails. 

function getKeyValues(accountArray, keyToAccess) {
    const arrayOfValues = []
    for (let i = 0; i < accountArray.length; i++) {
        const item = accountArray[i]
        const valueToAddToArray = item[keyToAccess]
        arrayOfValues.push(valueToAddToArray)
    }

    return arrayOfValues
}

console.log(getKeyValues(accounts, "email"))


/*
    Define a function that counts how many email addresses
    exist at yahoo, outlook, hotmail, and gmail. Return an
    object that has a key for each type, and the number of
    each. The function should accept the accounts array as
    input.
    {
        "yahoo": 3,
        etc...
    }
*/

function countEmailsByProvider(accountArray) {

    let emailTypes = {}

    const arrayOfEmails = []
    for (let i = 0; i < accountArray.length; i++) {
        const item = accountArray[i]
        const valueToAddToArray = item["email"]
        arrayOfEmails.push(valueToAddToArray)
    }

    arrayOfEmails.forEach(emailAddress => {
        let provider = (emailAddress.split("@")[1]).split(".")[0]
        emailTypes[provider] = (emailTypes[provider] + 1 || 1)
    });

    console.log(emailTypes)
}

countEmailsByProvider(accounts)

// ^^^ SHOULD BE DONE WITH HASH TABLE LOOKUP. Like so:
function emailAddress(accountsArray) {
    const emailDomains = {}

    for (let i = 0; i <accountsArray.length; i++) {
        const account = accountsArray[i]
        const domain = account.email.split("@")[1].split(".")[0]
        if (emailDomains.hasOwnProperty(domain)) {
            emailDomains[domain]++
        } else {
            emailDomains[domain] = 1
        }
    }
     return {emailDomains}
}

console.log(emailAddress(accounts))

/*
    Define a function that returns an array containing
    only female account holders. The function should
    accept the accounts array as input.
*/

function findFemaleUsers(accountsArray) {
    const femaleUsers= [];
    for (let i = 0; i <accountsArray.length; i++) {
        let gender = accountsArray[i].gender
        if (gender === "female") {
            femaleUsers.push(accountsArray[i])
        }
    }
    return femaleUsers
}

console.log(findFemaleUsers(accounts))

// ^^^^^^ CAN BE COMPLETED USING FILTER
const females = accounts.filter(
    function (account) {
        return account.gender === "female"
    }
)

console.log(females)

// ^^^^^^ CAN BE REWRITTEN
const females2 = accounts.filter( account => account.gender === "female")

console.log(females2)