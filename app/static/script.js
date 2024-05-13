function updateCounts() {
    var inputText = document.getElementById("input_text").value;
    var characterCount = inputText.length;
    var wordCount = inputText.trim().split(/\s+/).filter(Boolean).length;
    document.getElementById("character_count").innerHTML = "<strong>Characters:</strong> " + characterCount;
    document.getElementById("word_count").innerHTML = "<strong>Words:</strong> " + wordCount;

    // Dynamically adjust textarea height based on word count
    var textarea = document.getElementById("input_text");
    var rows = Math.max(4, Math.ceil(wordCount / 10)); // Adjust this factor as needed
    textarea.rows = rows;
}


// script.js

// Function to create the footer dynamically
function createFooter() {
    var footer = document.querySelector(".footer");
    var footerContent = document.createElement("div");
    footerContent.classList.add("container", "text-center");
    footerContent.innerHTML = `
        Made by Abhishek <br>
        <a href="https://www.linkedin.com/in/abhishek-saud/" target="_blank">
            <img src="static/linkedin.png" alt="LinkedIn" style="width: 30px;">
        </a>
        <a href="https://github.com/Aviisaud" target="_blank">
            <img src="static/github.png" alt="GitHub" style="width: 30px;">
        </a>
    `;
    footer.appendChild(footerContent);
}

// Call the createFooter function when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    createFooter();
});
