# ExpressNoteTaker
This is an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

## User Walkthrough

When users navigates to the app the first page they will encounter is the home page. There will be a button titled "Get Started" which will navigate users to the note taking page. Users will see two text spaces, one for the title of the note and one for the actual content of the note. As soon as the user click on the title of the note text box , a save icon should appear . This icon is what sends the request to the server to add the note that the user types in to the "database" , which in this case the database is actually an array of objects located in the db.json file. Everytime the page is refreshed a series of api calls are made to the "server" in oder to retrieve the saved notes and display them on the left side of the screen. The user has the ability to delete previously saved notes by clicking on the red icon next to each notes. Since the app utilizes an arrray as a database , it uses the individual indexes as IDs for each of the individuals notes written. Everytime a note is deleted, the app restructures the index IDs looping throguh the array's length and re-assigning each note an updated index.  

## How to use:

Step 1 - Open app 
![Alt text](/assets/Screenshot1.jpg)


Step 2 - Click on the button title "Lets get Started" which will navigate the user to the main note entry page.

![Alt text](/assets/Screenshot2.jpg)

Step 3 - Click on the text space that has a "Note Title" and "Note Text"  place holder text and enter the title and note content.
![Alt text](/assets/Screenshot3.jpg)

Step 4 - Click the SAVE icon at the top right corner of the screen. This icon is what sends the request to the server to add the note that the user types in to the "database" , which in this case the data base is actually an array of objects located in the db.json file. 

![Alt text](/assets/Screenshot4.jpg)

Stept 5 - Navigate to the left side of the screen and click te newly created note. When user click on the note it should display the content on the screen.

![Alt text](/assets/Screenshot5.jpg)

Step 6 - Click on the pencil icon at the top right corner. This will allow you to enter a new note. Repeat step 3 and 4.

![Alt text](/assets/Screenshot6.jpg)

Step 7 - Click on the Note Taker icon letters and this should navigate the user back to the main home page.

![Alt text](/assets/Screenshot7.jpg)


## Live Page Link:

https://note-taker-app-armandojhc.herokuapp.com/



