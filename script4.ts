//Index Multiplier
//Return the sum of all items in an array, where each item is multiplied by its index(zero-based).
//For empty arrays, return 0.

var FunctionAdditionofindex = (...arrg:number[]):number[] =>
{
    let result:number = 0;
    let addup: number;
    for (let i =0; i<arrg.length; i++)
    {
         addup= arrg[i]
         result += addup *i;
    }
    return [result];
}
console.log ( FunctionAdditionofindex());