//BASIC CALCULATOR

var FunctionOperator = (input1: number, operator: any, input2: number) => {
  let result: number = 0;

  if (input1 >= 0 && input2 >= 0 && operator == "+") {
    result += input1 + input2;
  } else if (input1 >= 0 && input2 >= 0 && operator == "-") {
    result += input1 - input2;
  } else if (input1 >= 0 && input2 >= 0 && operator == "*") {
    result += input1 * input2;
  } else if (input1 >= 0 && input2 > 0 && operator == "/") {
    result = input1 / input2;
  } else if (input1 >= 0 && input2 == 0 && operator == "/") {
    console.log("Can't divide by 0!");
  } else {
    console.log("not a valid input");
  }
  //Now the division condition

  return result;
};

console.log(FunctionOperator(5, "-", 0));
