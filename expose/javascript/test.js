function sumValues(num1, num2, add) {
    if (add) {
        const result = 0;

        result = num1 + num2; 

        console.log('value added: ', result); 
    } else return; 

    console.log('final result: ', result);
}

function discountPrices(prices, discount) {
    const discounted = []; 
    const length = prices.length
    // const finalPrice = 0; 

    for (let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        // finalPrice = Math.round(discountPrices * 100) / 100;
        discounted.push(discountedPrice); 
    }

    // console.log(i); 
    // console.log(discountedPrice); 
    // console.log(finalPrice); 
    console.log(length); 

    return discounted; 
}



// sumValues(10, 10, true)

console.log(discountPrices([100, 200, 300], 0.5)); 