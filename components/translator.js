const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  translate(text, locale) {
    let translation = text;
    let changes = false;

    if (locale == "american-to-british") {
      for (let key in americanOnly) {
        let regKey = new RegExp("(?<!\\S)" + key + "(?!\\w)", "ig");
        if (regKey.test(translation)) {
          let newWord = "<span class=\"highlight\">" + americanOnly[key] + "</span>";
          translation = translation.replace(regKey, newWord);
          changes = true;
        }
      }
      for (let key in americanToBritishSpelling) {
        let regKey = new RegExp("(?<!\\S)" + key + "(?!\\w)", "ig");
        if (regKey.test(translation)) {
          let newWord = "<span class=\"highlight\">" + americanToBritishSpelling[key] + "</span>";
          translation = translation.replace(regKey, newWord);
          changes = true;
        }
      }
      for (let key in americanToBritishTitles) {
        let regKey = new RegExp("(?<!\\S)" + key + "(?!\\w)", "ig");
        if (regKey.test(translation)) {
          let newWord = "<span class=\"highlight\">" + americanToBritishTitles[key] + "</span>";
          translation = translation.replace(regKey, newWord);
          changes = true;
        }
      }
      let timeRegex = /\d?\d:\d\d/g;
      let times = translation.match(timeRegex);
      if (times) {
        for (let i=0; i<times.length; i++) {
          let newTime = "<span class=\"highlight\">" + times[i].replace(":", ".") + "</span>";
          translation = translation.replace(times[i], newTime);
          changes = true;
        }
      }
    } else if (locale == "british-to-american") {
      for (let key in britishOnly) {
        let regKey = new RegExp("(?<!\\S)" + key + "(?!\\w)", "ig");
        if (regKey.test(translation)) {
          let newWord = "<span class=\"highlight\">" + britishOnly[key] + "</span>";
          translation = translation.replace(regKey, newWord);
          changes = true;
        }
      }
      for (let key in americanToBritishSpelling) {
        let regVal = new RegExp("(?<!\\S)" + americanToBritishSpelling[key] + "(?!\\w)", "ig");
        if (regVal.test(translation)) {
          let newWord = "<span class=\"highlight\">" + key + "</span>";
          translation = translation.replace(regVal, newWord);
          changes = true;
        }
      }
      for (let key in americanToBritishTitles) {
        let regVal = new RegExp("(?<!\\S)" + americanToBritishTitles[key] + "(?!\\.)(?!\\w)", "ig");
        if (regVal.test(translation)) {
          let newWord = "<span class=\"highlight\">" + key + "</span>";
          translation = translation.replace(regVal, newWord);
          changes = true;
        }
      }
      let timeRegex = /\d?\d\.\d\d/g;
      let times = translation.match(timeRegex);
      if (times) {
        for (let i=0; i<times.length; i++) {
          let newTime = "<span class=\"highlight\">" + times[i].replace(".", ":") + "</span>";
          translation = translation.replace(times[i], newTime);
          changes = true;
        }
      }
    }

    if (!changes) {
      translation = "Everything looks good to me!";
    } 

    return translation;
  }
}

module.exports = Translator;