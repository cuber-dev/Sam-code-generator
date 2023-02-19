// console.log("Page opened")

let imgHeight;
let imgWidth;
//================ Taking input from user =======================
let getWidth = parseInt(window.prompt('Please Enter the Width You Want\nIt must be a number'), 10);
let getHeight = parseInt(window.prompt('Please Enter the Height You Want\nIt must be a number'), 10);

if (isNaN(getWidth) || isNaN(getHeight)) {
  // Check if either input is not a number
  alert('Please enter a valid number for both width and height.');
  window.location.reload(); // Reload the page if either input is not a valid number
} else {
  // Both inputs are valid numbers
  console.log(`Width: ${getWidth}, Height: ${getHeight}`);
  imgWidth = getWidth
  imgHeight = getHeight
}
//==================== Adding code strings =======================
const image_code_1 = document.getElementById("code-img-1");
const image_code_2 = document.getElementById("code-img-2");
const div_code_1 = document.getElementById("code-img-div-1");
const div_code_2 = document.getElementById("code-img-div-2");
const bg_code_1 = document.getElementById("code-img-bg-1");
const bg_code_2 = document.getElementById("code-img-bg-2");



image_code_1.innerText = `<img src="https://unsplash.it/${imgWidth}/${imgHeight}" alt="image">\n`;
image_code_2.innerText = `<img src="https://picsum.photos/${imgWidth}/${imgHeight}" alt="image">\n`;
div_code_1.innerText = `<div class="container">\n  <img src="https://unsplash.it/${imgWidth}/${imgHeight}" alt="image">\n</div>\n`;
div_code_2.innerText = `<div class="container">\n  <img src="https://picsum.photos/${imgWidth}/${imgHeight}" alt="image">\n</div>\n`;
bg_code_1.innerText = `background-image: url("https://unsplash.it/${imgWidth}/${imgHeight}");\nbackground-size: cover;\nbackground-position: center;\n`;
bg_code_2.innerText = `background-image: url("https://picsum/${imgWidth}/${imgHeight}");\nbackground-size: cover;\nbackground-position: center;\n`;

// ======================= Copy icon code ============================

// Get all copy buttons
const copyButtons = document.querySelectorAll(".copy");

// Add click event listener to each copy button
copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Get the pre tag element that contains the code
        const preTag = button.parentElement.querySelector("pre");

        // Create a temporary textarea element to hold the code
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = preTag.innerText;

        // Append the textarea to the document
        document.body.appendChild(tempTextarea);

        // Select the text in the textarea
        tempTextarea.select();

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Remove the temporary textarea from the document
        document.body.removeChild(tempTextarea);
    });
});




//Copy tooltip code 
const copiedElement = document.querySelector('.copied');

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener('click', function() {
    copiedElement.classList.add('show-copied');

    setTimeout(function() {
      copiedElement.classList.remove('show-copied');
    }, 800);
  });
}


//navbar disappear code

