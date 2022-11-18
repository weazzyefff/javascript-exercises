
let string = 'hey';
let num = 3;

function repeatString(string, times) {
    // Step 1. Create an empty string that will host the repeated string
    var repeatedString = "";
  
    // Step 2. Set the While loop with (times > 0) as the condition to check
    while (times > 0) { // As long as times is greater than 0, the statement is executed
      // The statement
      repeatedString += string; // Same as repeatedString = repeatedString + string;
      times--; // Same as times = times - 1;
    }
    /* While loop logic
                        Condition       T/F       repeatedString += string      repeatedString        times
      First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
      Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
      Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
      Fourth iteration   (0 > 0)        false
      }
    */
    
    // Step 3. Return the repeated string
    return repeatedString; // "abcabcabc"
  }
  
  repeatString("abc", 3);

function repeatString(string, num) {
    for (let i = 0; i <= num; i++) {
        let repeatedString = '';
        repeatedString += string;
    }
    return repeatedString;
}

console.log(repeatString(string, num));
console.log()

// Do not edit below this line
module.exports = repeatString;
