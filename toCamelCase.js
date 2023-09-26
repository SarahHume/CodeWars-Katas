function toCamelCase(str) {

    let strArr = str.split("");

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === "-" || strArr[i] === "_") {
            strArr[i + 1] = strArr[i + 1].toUpperCase();
        }
    }

    const filtArr = strArr.filter((char) => char != "-" && char != "_");

    let newStr = filtArr.join("");

    console.log(newStr);

    return newStr;
}

module.exports = toCamelCase;