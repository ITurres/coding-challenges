const checkAnagram = (str1, str2) => {
  const str1Array = str1.toLowerCase().split("");
  const str2Array = str2.toLowerCase().split("");
  let charMatch = 0;

  if (str1Array.length !== str2Array.length) {
    // console.log(`${str1} and ${str2} are NOT anagrams`);
    return false;
  } else {
    str2Array.map((char) => {
      str1Array.includes(char) ? charMatch++ : charMatch--;
    });
  }

  if (charMatch === str1Array.length) {
    // console.log(`${str1} and ${str2} are anagrams!! :D`);
    return true;
  } else {
    // console.log(`${str1} and ${str2} are NOT anagrams`);
    return false;
  }
};

checkAnagram("micrOverse", "vermisecro"); //? true
checkAnagram("Argentina", "genartina"); //? true
checkAnagram("friend", "smile"); //? false
