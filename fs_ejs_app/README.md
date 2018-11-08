# Assignment 7: FS-EJS App
This is an extension on web app ["Shiba or Cat?"](https://github.com/alexyixuanxu/AlexXu_DynamicWeb/tree/master/simple_express_apps). Users need to sign up and log in first and then be redirected into the main app page, in which the user select shiba or cat and input a number (1-100) to see that number of images of the selected animal. The images are grabbed from http://shibe.online API.

## Set Up the App
This app uses Node.js, body parser module, request module, file system module, EJS templating,  and Express framework.
1. Download the zip file or clone this respository to your desired directory on your computer.
2. Download [node.js](https://nodejs.org/en/download/)
3. In your terminal, navigate to your directory that contain the respository and type in `npm install express`, `npm install body-parser`, `npm install request`, `npm install ejs`, `npm install fs` to install the packages.

## Run & Test the App
1. In your terminal, navigate to the directory containing the files, and type in `node app.js` to run the app. It should start a server at `localhost/3000`.
2. Visit the page and the sign up page should be rendered. Sign up with a username and confirm passwords. The page should render error when the app detects already existed username. Also, the user need to make sure to enter the same password twice to successfully register.
3. Once registered, user can go to the log in page (which is linked). In sign up page, user can input their username and correct password. The page will render error message if username does not exist or password is not correct. Once logged in, user will be redirected to the main app page.
4. The main page takes a choice of shiba or cat and a number. Once user submit the form, the page should display the according number of images. The page should display error message if the user did not input valid selection or valid number.

## Next Steps
To let user vote only after they sign up & log in. Right now if the user goes to page `localhost/3000/vote` they can still use the app.


________________________
By Alex Yixuan Xu