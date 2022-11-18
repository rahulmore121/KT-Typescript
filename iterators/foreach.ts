//Foreach method is most common way to loop through the array.
//Foreach takes a callback function and executes the function once for each array element.
//Basically, it loop through every element of array one by one, and perform some actions on them. When you perform certain action using ForEach loop it changes the data on the original array.


var number = [1, 2, 6, 8, 12, 14];
number.forEach((element, index) => {
    console.log('index: ' + index + ' number: ' + element)
  })