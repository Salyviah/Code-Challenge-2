function generateAnArray(firstNumber, lastNumber){
if (firstNumber > lastNumber){
    const temp = firstNumber;
    firstNumber = lastNumber;
    lastNumber = temp;
}

const result = [];
for (let i = firstNumber; i <= lastNumber; i++){
    result.push(i);
}
    return result;
}

console.log(generateAnArray(4, 7));
console.log(generateAnArray(-4, 7));