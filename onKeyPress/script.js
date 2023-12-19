// Function to handle keypress events
function handleKeypress(event) {
  // Display the key code and key character
  const keyCode = event.keyCode;
  const keyCharacter = String.fromCharCode(keyCode);

  // Update the output div
  document.getElementById("output").innerHTML = `
    Key Code: ${keyCode} <br>
    Key Character: ${keyCharacter}
  `;
}

// Add an event listener to the document for the keypress event
document.addEventListener("keypress", handleKeypress);
