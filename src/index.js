module.exports = function check(str, bracketsConfig) 
{
  // your solution
  var openBracket = [];
  var currElem = [];
  
  var isEven = function(brIndex) 
  {
    return (brIndex % 2 == 0) ? true : false;
  }
  var brArr = []
  for(var i = 0; i < bracketsConfig.length; i++)
  {
    brArr.push(bracketsConfig[i][0]);
    brArr.push(bracketsConfig[i][1]);
  }
  // console.log("this is brArr: ", brArr);
  for(var i = 0; i < str.length; i++)
  {
    currElem = str[i];// 
    if (!isEven(brArr.indexOf(currElem)))
    {
      if(!openBracket.length)
      {
        return false;
      }
      if(brArr[brArr.indexOf(currElem) - 1] != openBracket[openBracket.length - 1])
      {
       // ([)]
        return false;
      }
      openBracket.pop();
    }
    else
    {
     if(openBracket[openBracket.length - 1] == brArr[brArr.indexOf(currElem) + 1])
     {
      openBracket.pop();
     }
     else
      openBracket.push(currElem);
    }  
  }
  return (!openBracket.length) ? true : false;
}

