# Assignment 5: Saving JSON data
(Note: gitignore file is in the master branch)

This app takes two variables in its path, a shape including:
- ellipse
- rectangle
- triangle
- circle
- square
and a positive integer.

When user input is valid, user will be redirected to a page which uses P5.js to draw the according number of the different shapes in the JSON file onto the webpage.

To see the JSON file, go to file path `/records` or `/records.json` as it is also served as a public file.

## Set Up the App
This app uses Node.js, file system module and Express framework.
1. Download the zip file or clone this respository to your desired directory on your computer.
2. Download [node.js](https://nodejs.org/en/download/)
3. In your terminal, navigate to your directory that contain the respository and type in `npm install express` to install the package.

## Run & Test the App
In your terminal, navigate to the directory containing the files, and type `node app.js` to run the bot. It should start a server at `localhost/3000`.

Here are some paths to test:
- `/YourShape/YourNumber`, if valid, it will redirect into `/sketch.html`.
- `/sketch.html` contains the P5 sketch. It will draw differently when you refresh the page.
- `/records` or `/records.json` will show the json file containing all data.
- a path with invalid shape name or invalid integer will instruct so.
- any other paths will contain instructions.

________________________
By Alex Yixuan Xu