let str = "hello,this,is,a,difficult,to,read,sentence";


var newRE = str.replace(/,/g, ' ');

console.log(newRE);


// g - Global replace. Replace all instances of the matched string in the provided text.
// i - Case insensitive replace.Replace all instances of the matched string, ignoring differences in case.
// m - Multi - line replace.The regular expression should be tested for matches over multiple lines.