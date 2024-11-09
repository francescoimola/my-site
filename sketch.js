let fonts = [
    'Arial', 'Verdana', 'Courier New', 'Georgia', 'Times New Roman', 'Trebuchet MS', 
    'Impact', 'Comic Sans MS', 'Lucida Console', 'Palatino', 'Garamond', 'Tahoma', 
    'Century Gothic', 'Arial Black', 'Gill Sans', 'Calibri', 'Cambria', 'Helvetica', 
    'Optima', 'Monaco', 'Baskerville', 'Futura', 'Book Antiqua', 'Didot', 'Rockwell', 
    'Consolas'
  ];
  let currentFont;
  let lastChangeTime = 0;
  let changeInterval = 1250;  // 1.25 seconds in milliseconds
  let sketchContainer;
  let canvas;
  
  function setup() {
    console.log("Page loaded. Initializing sketch...");
  
    // Select the sketch container div
    sketchContainer = document.querySelector('.sketch-container');
    
    // Check if the container exists before creating the canvas
    if (sketchContainer) {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.parent(sketchContainer);  // Attach canvas to the div
      console.log("Sketch container found. Creating canvas...");
      
      // Set text properties
      textAlign(LEFT, CENTER);  // Align text to the left horizontally, center vertically
      textSize(getTextSizeFromCSS());  // Set the text size based on CSS font size
      fill(219, 220, 221);  // White text color
      currentFont = random(fonts);  // Random font
      background(1, 4, 9);  // Dark background
      
      resizeCanvasBasedOnText();  // Resize canvas based on initial text
    } else {
      console.error("Sketch container not found.");
    }
  }
  
  function draw() {
    background(1, 4, 9);  // Clear the background each frame
  
    // Check if it's time to change the font
    if (millis() - lastChangeTime > changeInterval) {
      currentFont = random(fonts);
      lastChangeTime = millis();
    }
  
    // Set the font and display the text
    textFont(currentFont);
    text("Careering", 0, height / 2);  // Set x to 0 to align text to the left
  
    // Resize canvas only when the window is resized or on load
    // We are no longer resizing on every frame for performance.
  }
  
  function resizeCanvasBasedOnText() {
    let textWidthValue = textWidth("Careering");
    let textHeightValue = textAscent() + textDescent();  // Calculate the height of the text
    console.log("Text width:", textWidthValue, "Text height:", textHeightValue);
  
    // Resize the canvas based on the width of the text + padding
    resizeCanvas(textWidthValue + 40, textHeightValue + 40);  // Add padding for both width and height
  
    // Dynamically resize the container to fit the canvas
    if (sketchContainer) {
      sketchContainer.style.width = `${textWidthValue + 40}px`;
      sketchContainer.style.height = `${textHeightValue + 40}px`;
  
      console.log("Canvas resized to:", textWidthValue + 40, textHeightValue + 40);
    }
  }
  
  function windowResized() {
    console.log("Window resized. Adjusting canvas size...");
  
    // Recalculate text width and height when the window is resized
    resizeCanvasBasedOnText();
  }
  
  // Function to get the font size from CSS applied to a <p> element
  function getTextSizeFromCSS() {
    const pElement = document.querySelector('p');
    if (pElement) {
      const fontSize = window.getComputedStyle(pElement).fontSize;
      console.log("CSS Font Size:", fontSize);  // Log for debugging
      return parseInt(fontSize, 10);  // Convert to integer value
    }
    return 64;  // Fallback to 64px if no <p> element is found
  }
  