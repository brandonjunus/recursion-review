// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    returnString = ""
    for (var i = 0; i < obj.length; i++) {
      returnString += stringifyJSON(obj[i]);
      returnString += ","
    }
    returnString = returnString.slice(0, -1)
    returnString = "[" + returnString + "]"
    return returnString;
  }

  if (typeof obj === "object" && obj !== null) {
    returnObj = ""
    for (var key in obj) {
      if(typeof obj[key] === "function" || obj[key] === undefined){
        continue
      }
      returnObj += stringifyJSON(key) + ":"
      returnObj += stringifyJSON(obj[key]);
      returnObj += ","
    }
    returnObj = returnObj.slice(0, -1)
    returnObj = "{" + returnObj + "}"
    return returnObj;
  }

  if (obj === null) {
    return "null"
  } 
  if (typeof obj === "string") {
    return '"' + obj + '"'
  }
  return obj + "";  
};
