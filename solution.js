expandedForm = (num) => {
    let arr = []
    var str = num.toString()
    for (var i = 0; i < str.length; i++) {
        if (str[i] != 0) {
            let onum = Math.pow(10, str.length - 1 - i)
            arr.push(str[i]*onum)
        }

    } return arr.toString().replace(/,/g, " + ")
}