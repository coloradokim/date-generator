var date = new Date()

var month = date.getUTCMonth() + 1; 
var day = date.getUTCDate();
var year = date.getUTCFullYear();


console.log(year + "-" + month + "-" + day)
