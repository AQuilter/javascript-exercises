const repeatString = function(string, num) {
    let finalString = "";

    if (num > 0) {
        for (i = 0; i < num; i++){
            finalString += string;
        }
        return finalString;
    } else if (num == 0){
        return "";
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
