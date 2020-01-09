const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(pName)
});

function palindrome(str) {
    var palin = str.split("").reverse().join("");
    if (palin === str) {
        return true;
    } else {
        return false;
    }
}

const fs = require("fs");

var pName = "This name is a palindrome: ";

try {
    const data = fs.readFileSync("names.txt", "UTF-8"); //read file contents
    const lines = data.split(/\r?\n/); //split file contents by new line
    lines.forEach((line) => {
        if (palindrome(line)) {
            pName += line;
            console.log("The following name is a palindrome: " + line);
        } else {
            console.log("This name is NOT a palindrome: " + line);
        }
    });

} catch (e) {
    console.error(e);
}

app.listen(8000, () => {
    console.log("Example app listening on port 8000");
});