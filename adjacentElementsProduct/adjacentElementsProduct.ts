export function adjacentElementsProduct(inputArray: number[]): number {
        let largestProduct=inputArray[0]*inputArray[1];
        for (let i = 1; i < inputArray.length-1; i++) {
            const element = inputArray[i] * inputArray[i+1];
            // console.log(element)
            
            // if(element>largestProduct){
            //     largestProduct=element;
            // }
            largestProduct=largestProduct<element? element : largestProduct
            
        }
        return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));