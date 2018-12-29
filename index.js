/* Your code goes here */
// global variable can be changed throughout code
var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

//avoid defining global variables

var bestCustomer

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overWriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

//cannot reassign const variable

const leastFavoriteCustomer = 'someone'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else'
}

//cannot double assign with let and const keywords

function attemptTwoFavoriteCustomers() {
    let favoriteCustomer = 'brad'
    let favoriteCustomer = 'not brad'
}
