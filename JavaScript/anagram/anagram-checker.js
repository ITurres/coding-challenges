module.exports = function (str1, str2) {
  // write your code here

  let word = str1.toLowerCase().replace(/\W/g, "");
  let word2 = str2.toLowerCase().replace(/\W/g, "");
  let count1 = 0;
  let count2 = 0;

  if (word.length != word2.length) {
    return false;
  } else {
    for (let i = 0; i < word.length; i++) {
      if (word2.includes(word[i])) {
        count1++;
      } else {
        count2++;
      }
    }
    if (count2 > 0) {
      return false;
    } else {
      return true;
    }
  }
};
