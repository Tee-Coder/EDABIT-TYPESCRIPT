//Add up the number from a single number(easy edabit)

var functionSumUp = (num:number):number=>
{
    let result:number = 0;
    for (let i=1; i<=num; i++)
    {
        result += i;
    }
    return result;
}
console.log (functionSumUp(4));