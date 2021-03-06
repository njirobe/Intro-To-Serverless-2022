
const morse = require("morse-code-converter");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const english = req.query.plaintext
    var code = "";
    if (typeof english === 'undefined' || english === "") {
        code = "Please enter some text to convert!"
    } else {
        code = morse.textToMorse(english);
    }
   
    context.res = {
        body: code
    };
}