# functions-scoping-program-flow-debrief
<a href="https://github.com/txlocnguyen/functions-scoping-program-flow-debrief/blob/main/main.js">Finished</a>. Here's my solution <br/>
````
let printFirstLetter = (array) => array.forEach(element => console.log(element.charAt(0))) <br/>
printFirstLetter(arr)
````
### Write a function that takes an Array of strings as an argument and prints the first letter of each element out (one per line).
    For example the Array ["Hello", "World", "This", "Is", "My", "String"] should get printed as follows:

````
    H
    W
    T
    I
    M
    S
````

#### Resources: 
#### charAt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
#### For of Loop: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
#### Functions: https://www.w3schools.com/js/js_functions.asp
 

````
Part 1 - Fork and Clone the project
Begin by forking this project into a personal repository.
To do this, click the Fork button located at the top right of this page.
Navigate to your github profile to find the newly forked repository.
Clone the repository from your account into the directory on your computer that you use to keep your projects (ex. dev directory).
Remember this from the lessons on Git and Github?
Go to the green Code button in the top right of this repository
Select https and then COPY that url
Open Git Bash on your computer, cd to a directory where you wish to save this assignment to work on
Type git clone followed by the URL you copied from Github
cd into the repository for this assignment that you have just cloned.
Open the newly cloned project in a code editor (ex. Visual Studio Code).
````

````
Part 2 - Edit the cloned project
from a text editor (i.e. - Visual Studio Code, Notepad ++, etc...), select:
File > Add Folder to WorkSpace
Select the directory you use to store your projects (ex. dev directory)
From the text editor,in the directory you use to store your projects (ex. dev directory), locate the newly cloned project folder.
Expand the project from the project explorer (may just be called explorer)
Complete the exercises in the main.js file.
````

````
Part 3 - Pushing new changes to repository
From a terminal navigate to the root directory of the cloned project.
From the root directory of the project, execute the following commands:
git add .
Add all files in current directory to the staging area
git commit -m 'I have made an edit to a file!'
Save all staged changes to local repository
git push -u origin main
Push changes from local repository to remote repository
````

````
Part 4 - Submitting assignment
From the browser, navigate to the forked project from your Github account.
Click the Pull Requests tab.
Select New Pull Request
````
