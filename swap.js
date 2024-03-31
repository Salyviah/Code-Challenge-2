function swapsCaseCharacter(str){
    let swaps = '';

    for (let s = 0; s < str.length; s++){
        const char = str[s];

    if (char === char.toUpperCase()){
        swaps += char.toLowerCase();
    }else{
        swaps += char.toUpperCase();
    }
    }
    return swaps;
}

console.log(swapsCaseCharacter('The Quick Brown Fox'))