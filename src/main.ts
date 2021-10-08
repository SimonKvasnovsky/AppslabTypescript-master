
   
   function getPosition(elementToFind, arrayElements) {
    var i;
    for (i = 0; i < arrayElements.length; i += 1) {
        if (arrayElements[i] === elementToFind) {
            return i;
        }
    }
    return null; //not found
}let  numbers: number[] =  [10, 52, 14, 98];
   let  smallest :number = numbers[0];
   let  largest: number = numbers[0];

     for(let i=1; i< numbers.length; i++)
     {
         if(numbers[i] > largest)
             largest = numbers[i];
         else if (numbers[i] < smallest)
             smallest = numbers[i];

     }
     console.log("Smallest Number is : " + smallest);
     console.log("Largest Number is : " + largest);
 
