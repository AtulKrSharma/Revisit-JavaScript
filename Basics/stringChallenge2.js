// Challenge is to take normal sentence with spaces, remove them and converter them into an arr

// const myString = 'Thequickbrownfoxjumpsoverthelazydog';
const string = 'The quick brown fox jumps over the lazy dog';

console.log('******Using ReplaceAll******************');
// The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

const updatedString1 = string.replaceAll(' ', '').toLowerCase();
console.log(updatedString1.split(''));

console.log('******Using Replace******************');

const updatedString11 = string.replace(/ /gi, '').toLowerCase();

//g flag ==> to make replace for all occurances
//i flg ==> to make ignore the case

console.log(updatedString1.split(''));
