// Write your solution in this file!

var customerName = "bob";

const leastFavoriteCustomer = "bleh";

var bestCustomer;

function upperCaseCustomerName()
{
    customerName = customerName.toUpperCase();
}

function setBestCustomer()
{
    return bestCustomer = "not bob";
}

function overwriteBestCustomer()
{
    return bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer()
{
    return leastFavoriteCustomer = "bob";
}