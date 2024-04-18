# Note Taker
## Author: Thomas Stranick

## Description

The note taker web app allows the user to add and store notes for future reference. The user can enter the site and type out a title and description for a note that they would like to make. This note can then be saved and referenced on the left hand side bar for future use. The note can also be deleted in case it is no longer needed. The app utilizes express.js to create different back-end routes for each action the user takes.

## Visuals

<img src="./assets/Screenshot 2024-04-18 084853.png" >
<img src="./assets/Screenshot 2024-04-18 084933.png" >

## Deployment

Provided as a link here - [Note Taker](https://github.com/ThStranick15/note_taker)

## Usage

On the main page, the Get Started button can be pressed to direct to the notes page. A note title and text can be entered within the text boxes, which can be cleared or saved when completed. Once the note is saved, it appears on the left hand side bar. The note can be clicked to display it on the main page or be deleted from the database. GET routes are used for when the application needs to reference the database of notes, POST routes are used when the user wants to add a note to the database, and DELETE routes are used for deleting notes from the database.

## Credits

- Npm - Express, uuid
- JD (Bootcamp Instructor) - demonstration on Express Usage

## License

Please refer to the LICENSE in the repo.