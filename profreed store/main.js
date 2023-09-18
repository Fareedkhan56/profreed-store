

alert("welcome to PROFREED store");
alert("available items 1. Laptops 2. USB 3. Monitor");
var userName = prompt("enter your name")

var product = prompt("enter product name")

if (product.toLowerCase() == "mike" || product.toLowerCase() == "speaker" || product.toLocaleUpperCase() == "keyboard")
{
    var price = 2000;
    var quantity =+ prompt("enter quantity");
    var bill = quantity*price;
}

else if (product.toLowerCase() == "laptop")
{
    var price = 60000;
    var quantity =+ prompt("enter quantity");
    var bill = quantity*price;
}

else if (product.toLowerCase() == "usb")
{
    var price = 1000;
    var quantity =+ prompt("enter quantity");
    var bill = quantity*price;
}

else if (product.toLowerCase() == "monitor")
{
    var price = 10000;
    var quantity =+ prompt("enter quantity");
    var bill = quantity*price;
}


else{
    console.error("you type or do something wrong please refreash page and do properly")
}

if (bill > 199){
    document.write("<center><h1 style='margin-top: 10rem;'>Thank Yout To Visit PROFREED store </h1></center>");
    document.write( userName + " order's " + quantity + " pieces of " + product + " and the bill is " + bill)
}

else {
    document.write("center><h1 style='margin-top: 10rem;'>Thank Yout To Visit PROFREED store </h1></center>")
}