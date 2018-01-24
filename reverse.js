// This is a simple reverse string script.
  // Gets the button element and stores in button variable.
  var button = document.getElementById('reverse-btn');
  // Listens for clicks on the button element and starts
  //anonymous function
  button.addEventListener('click', function() {
    //gets the input fields value(what you type in it)
    var string = document.getElementById('string').value;
    //splits the value you type making it into an array
    //example hello turns to [h, e, l, l, o]
    var splitString = string.split("");
    // puts the array in reverse order
    //example: [o, l, l, e, h]
    var reverseArray = splitString.reverse();
    // 'Stitches back the reverse split string into a regular string'
    // Result: 'olleh'
    var joinArray = reverseArray.join("");

    //console.log(joinArray);
    //gets the empty div element with id of result
     var newContent = document.getElementById('result');
     //creates a paragraph element
     var result = document.createElement('p');

     //puts the final reverse string in the newly
     //created paragraph element
     result.innerHTML = joinArray;
     //Finally, it adds the Paragraph element with
     //the reverse string to the page appending it
     //to the #result div
     newContent.appendChild(result);
});
