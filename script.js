const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0
let country;
let shipping = null
let currency = '$'
let customers = 1


if (country === 'RSA') { 
    shipping = 400; 
    currency === 'R' }
    else if ( country === 'NAM') {
        shipping = 600
    }
    else {
        shipping = 800
    }

// if (location === NAM) { shipping === 400 && currency === 'R' }
// shipping = 600 
// else shipping = 800

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED

const totalCost = shoes + toys + shirts + batteries + pens;



if (totalCost >= 1000 && (country === 'RSA' || country === 'NAM') && country === '1'  ) {
    shipping = 0
}
else {
    console.log(FREE_WARNING)
}

if ( country === 'NK') {
    console.log(BANNED_WARNING)
} else {
    console.log("PRICE" , currency, totalCost = shipping)
}
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
    




//////
const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Only change below this line

const primaryValid = typeof number == primaryPhone; // needs to be false 
const secondaryValid = typeof number == secondaryPhone; //needs to be true 

console.log("Primary phone is valid numerical string:", primaryValid);
console.log("Secondary phone is valid numerical string:", secondaryValid);

// turn the string into a number parse int
// is else 