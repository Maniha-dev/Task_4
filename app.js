let banner=("Welcome to Mall")
alert(banner)
console.log(banner);

let item=prompt("Enter the item name ")
item = item.toLowerCase()
item = item.trim()
let price=prompt("Enter your own price")

let qua=prompt("Enter Quantity")

let print=("You buy " + item + " in quantity " + qua +" at Price Rs." + price )
console.log(print);
let total=(price *qua)
let pro=(alert("Your Total Bill is Rs." + total))

let dis=("Your Total Bill is Rs." + total)
console.log(dis);


