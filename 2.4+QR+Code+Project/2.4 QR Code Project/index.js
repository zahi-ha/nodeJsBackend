/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// Step 1: Get User Input for the URL
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your url?',
        name: 'url'
    }
    ]).then((answers) => {
        console.log(answers);
        const url = answers.url; // Extract the URL from the answer object
        // Step 2: Generate QR Code Image
        const qr_image = qr.image(url, { type: "png" }); 
        // Save the QR Code Image (png format)
        qr_image.pipe(fs.createWriteStream("qr_code.png"));
        // Step 3: Save User Input as Text File
        fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    console.error("An error occurred:", error); // Handle errors
  });

