export function allLongestStrings(inputArray: string[]): string[] {

        let longestLength=0;
        const longestString=[];
        inputArray.forEach((word)=>{
            longestLength=longestLength < word.length ? word.length:longestLength;

        })

        inputArray.forEach((wordArray:string)=>{
            if(wordArray.length === longestLength)
                longestString.push(wordArray);
        })
        return longestString;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));