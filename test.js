var number = 25;
// Makeing a Number.
let factoriel = Factoriel(number);
/**
 * Invocation of the factorial function.
 */
console.log(factoriel);
//Print a Factorial in Ineger form.
function Factoriel (number)
{
    /**
     * Makeing a factorial fuction.
     */ 
    let arrayNumber = [];
    arrayNumber = numberOfDigits(number);
    /**
     * Invocation of the numberOfDigits Becuse To provide a report of the figures.  
     */ 
    for(var counter = number ; counter>1 ; counter--)
    {
        for(var counterTwo = 0 ; counterTwo<arrayNumber.length ; counterTwo++)
        {
            arrayNumber[counterTwo] = arrayNumber[counterTwo] * (counter-1);
        }
        arrayNumber = cleaner(arrayNumber);
        /**
         * Converts numbers to less than 10.
         */
    }
    /**
     * Computes the factorial as an array.
     */
    for(let counter = 0 ; counter<arrayNumber.length ; counter++)
    {
        arrayNumber[counter] = arrayNumber[counter].toString();
    }
    //Convert all array members to strings.
    var sum = "" ;
    for(let counter = 0 ; counter<arrayNumber.length ; counter++)
    {
        sum += arrayNumber[counter]; 
    }
    /**
     * Converts an array to a string.
     */
    return sum ;
    function numberOfDigits(factorial)
    {
        let array = [] ;
        while(factorial>=1)
        {
            array.push(factorial%10);
            factorial = factorial/10 ;
        }
        // Pour numbers into the array.
        for(let counter = 0 ; counter <array.length ; counter++)
        {
            array[counter] =  Math.floor(array[counter]);
        }
        /**
         * Because the division of numbers into 10 is between zero and one and is decimal.
         * So round the number down.
         */
        array.reverse();
        return array ;
    }
    function cleaner(arrayNumber)
    {
        arrayNumber.reverse();
        for(var counter=0 ; counter<arrayNumber.length;counter++)
        {
            if(arrayNumber[counter]>=10)
            {
                arrayNumber[counter] = arrayNumber[counter]-10;
                if(counter == arrayNumber.length-1)
                {
                    arrayNumber.push(1);
                }
                else
                {
                    arrayNumber[counter+1] = arrayNumber[counter+1] +1;
                }
                counter  = -1 ;
            }
        }
        arrayNumber.reverse();
        return arrayNumber ;
    }
}
