import accounts from "./accounts.mjs"
import accountsUpdated from "./accountsUpdated.mjs"

// // Define a function that returns an array containing all of the ip4 addresses. The function should accept the accounts array as input. 

// function getIPAddresses(accountArray) {
//     const ipAddresses = []

//     for (let i = 0; i < accountArray.length; i++) {
//         const currentAccount = accountArray[i]
//         const valueToAddToArray = currentAccount.last_login.ip4
//         ipAddresses.push(valueToAddToArray)
//     }

//     return ipAddresses
// }

// console.log(getIPAddresses(accounts))
// // ^^^^^^^ REWRITTEN WITH MAP:
// const onlyAddress = accounts.map(
//     function getIPAddresses (account) {
//         return account.last_login.ip4
//     }
// )
// console.log(onlyAddress)

// // ^^^^^^^ CAN BE REWRITTEN:
// const onlyAddress2 = accounts.map(account =>  account.last_login.ip4)
// console.log(onlyAddress2)



// // Define a function that will return an array that contains all of the values of a articular key on each object in an array. The function should accept the accounts array as input. 

// // If you pass the string of "email" to this function as an argument value, you should get back an array containing all of the emails. 

// function getKeyValues(accountArray, keyToAccess) {
//     const arrayOfValues = []
//     for (let i = 0; i < accountArray.length; i++) {
//         const item = accountArray[i]
//         const valueToAddToArray = item[keyToAccess]
//         arrayOfValues.push(valueToAddToArray)
//     }

//     return arrayOfValues
// }

// console.log(getKeyValues(accounts, "email"))


// /*
//     Define a function that counts how many email addresses
//     exist at yahoo, outlook, hotmail, and gmail. Return an
//     object that has a key for each type, and the number of
//     each. The function should accept the accounts array as
//     input.
//     {
//         "yahoo": 3,
//         etc...
//     }
// */

// function countEmailsByProvider(accountArray) {

//     let emailTypes = {}

//     const arrayOfEmails = []
//     for (let i = 0; i < accountArray.length; i++) {
//         const item = accountArray[i]
//         const valueToAddToArray = item["email"]
//         arrayOfEmails.push(valueToAddToArray)
//     }

//     arrayOfEmails.forEach(emailAddress => {
//         let provider = (emailAddress.split("@")[1]).split(".")[0]
//         emailTypes[provider] = (emailTypes[provider] + 1 || 1)
//     });

//     console.log(emailTypes)
// }

// countEmailsByProvider(accounts)

// // ^^^ SHOULD BE DONE WITH HASH TABLE LOOKUP. Like so:
// function emailAddress(accountsArray) {
//     const emailDomains = {}

//     for (let i = 0; i <accountsArray.length; i++) {
//         const account = accountsArray[i]
//         const domain = account.email.split("@")[1].split(".")[0]
//         if (emailDomains.hasOwnProperty(domain)) {
//             emailDomains[domain]++
//         } else {
//             emailDomains[domain] = 1
//         }
//     }
//      return {emailDomains}
// }

// console.log(emailAddress(accounts))

// /*
//     Define a function that returns an array containing
//     only female account holders. The function should
//     accept the accounts array as input.
// */

// function findFemaleUsers(accountsArray) {
//     const femaleUsers= [];
//     for (let i = 0; i <accountsArray.length; i++) {
//         let gender = accountsArray[i].gender
//         if (gender === "female") {
//             femaleUsers.push(accountsArray[i])
//         }
//     }
//     return femaleUsers
// }

// console.log(findFemaleUsers(accounts))

// // ^^^^^^ CAN BE COMPLETED USING FILTER
// const females = accounts.filter(
//     function (account) {
//         return account.gender === "female"
//     }
// )

// console.log(females)

// // ^^^^^^ CAN BE REWRITTEN
// const females2 = accounts.filter( account => account.gender === "female")

// console.log(females2)



// /*
//     Define a function that sorts the accounts by the last
//     login date and returns the most recent login. The
//     function should accept the accounts array as input.
// */
// const months = {
//     "Jan": 1,
//     "Feb": 2,
//     "Mar": 3,
//     "Apr": 4,
//     "May": 5, 
//     "Jun": 6,
//     "Jul": 7,
//     "Aug": 8,
//     "Sep": 9,
//     "Oct": 10,
//     "Nov": 11,
//     "Dec": 12
// }

// const numericalLogins = []
// function sortDateStringsAsIntegers (accountArray) {
//     accountArray.forEach((user, idx) => {
//         let lastLogin = user.last_login.date_time.split(" ")
//         if (lastLogin.length === 7) {
//             lastLogin.splice(2, 1)
//         }
//         let year = parseInt(lastLogin[5])
//         let month = parseInt(months[lastLogin[1]])+100
//         let day = parseInt(lastLogin[2])+100
//         let time = lastLogin[3]
//         let hour = parseInt(time.split(":")[0])+100
//         let min = parseInt(time.split(":")[1])+100
//         let sec = parseInt(time.split(":")[2])+100
//         let userLastLoginNumber = [year, month, day, hour, min, sec].join("")
//         let userDateArray = [userLastLoginNumber, idx]
//         numericalLogins.push(userDateArray)
//     });
//     return numericalLogins.sort()

// }

// function sortUserLastLogins(accountArray){
//     let sortedArray = sortDateStringsAsIntegers(accountArray)
//     let mostRecentLoginIndex = sortedArray[sortedArray.length-1][1]
//     let mostRecentUser = accountArray[mostRecentLoginIndex].id
//     let mostRecentLogin = accountArray[mostRecentLoginIndex].last_login.date_time   
//     console.log( `${mostRecentUser} logged in most recently on ${mostRecentLogin}`)
// }

// sortUserLastLogins(accounts)


// // **********Kirren's answer:*************************
// const lastLogin = (accountsArray) => {
//     return accountsArray.map(account => account.last_login.date_time)
//     .sort((a, b) => {
//         let currentDate = new Date(a);
//         let previousDate = new Date(b);
//         if (currentDate === previousDate) {
//             return 0;
//         } else if (currentDate < previousDate) {
//             return 1;
//         } else {
//             return -1;
//         }
//     })[0];
// }

// console.log(lastLogin(accounts))




// *************NEW PROBLEM***************************
/*
    Define a function that returns the median age of all
    the accounts. The function should accept the accounts
    array as input. Use the reduce() method.
*/

function sortAges(array) {
    let sortedAges = []
    array.forEach(account => {
        sortedAges.push(account.account_age)
    });
    return sortedAges.sort()
}

function returnMedAge(array) {
    return (array[parseInt(Math.floor((array.length) / 2))])
}
// creates a "pipeline of function" to reduce over
const pipeline = [sortAges, returnMedAge]

// says (i think?) that we are going to insert an array in each function, then initiates the reduce with accountsUpdated as the initial value. First "func" is sortAges which produces a new array, which is passed into returnMedAge, which then outputs the final value? maybe?
const medAge = pipeline.reduce(function (array, func) {
    return func(array)
}, accountsUpdated)

console.log(medAge)