//Agarra los valores qque le pases por la terminal
const args = process.argv.slice(2);
let min = 1;
let max = 100;

//Comprueba si se le paso un valor por consol 
if(args.length >= 2){
 const parsedMin = parseInt(args[0], 10);
 const parsedMax = parseInt(args[1], 10);

    if(!isNaN(parsedMin) && !isNaN(parsedMax) && parsedMin < parsedMax) {
        min = parsedMin;
        max = parsedMax;

        const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(`Random number between [${min} and ${max}]: ${randomnumber}`)
    } else {
        console.log("Rango invlido, usando vlores por efecto [1-100]");
    }
}

