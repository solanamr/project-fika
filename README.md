# Filmbox

Welcome to Filmbox, the test for Orion company.

![Filmbox](https://user-images.githubusercontent.com/87136807/227970470-02a6d7b3-2951-45a6-873d-ae6a35963009.png)

## Roadmap
This test was made in the period of 7 days, where it had to be created a managment system platform for movies. 

The platform has to have a search input for searching movies, an add movie component, two sorts: an alphabetic one and a genre one. Also it has to have a detail of all the movies. This movies were created by making a JSON file that simulates an API. 

When you first enter the web you can see the landing where there's a display of all the movies.
![image](https://user-images.githubusercontent.com/87136807/227972878-6940a441-4c5d-49f9-9e14-935b2b7d5c5e.png)

If you click on any movie you can see the details of it. Where you can find: a poster, the title, the genre, a brief description, the cast and crew and the rating of such movie 
![image](https://user-images.githubusercontent.com/87136807/227975502-5ab8eab8-385c-47b1-bc89-2f77e46e6659.png)

To create a movie you have to click the "Agregar película" button, this leads to another component where you have the form to create the movie.
![image](https://user-images.githubusercontent.com/87136807/227976837-c0d8f404-3242-4fd8-8b26-5de7a311d02f.png)


The technologies use for this project are:
- Javascript.
- React.
- Redux Toolkit to manage the information of the API and requests for such.
- JSON server.
- Tailwind for the design.
- Sweetalert for the alerts.
- And Axios for handling the asynchronous parts of the project.

## Usage

To run the project you have to run some scripts. 

The first one is the one to run JSON server.
To do this you have to enter the folder project, open the console and go to the public file. To do this you have to type in the console `cd public` and press enter, this enters the public file where the fake API is located. Then you have to run: `json-server --watch movies.json --port 3001` (The port part is because the project runs in port 3000 which is the same port that runs JSON server, so the library gives you the option to run it in another port, which has to be include in the script).

After this script is up, you have to run the script to load the project. This time, you have to open another console (since you have to let running the JSON server port). For this it's not necessary to enter to any file since the script have to be running in the entire folder. You just have to type `npm start` and wait for the project to load. And voilá, you now have running the test and you can start trying it.

Hope your experience with the platform is a good one!


Have an awesome day 👋
