# React, Node/Express Full Stack Web App Architecture

This is a format for a database-agnostic full stack web app architecture, using JavaScript on the front end as well as the back end.

## Front End
The app uses React-TypeScript on the front end. It was created all at once from a template, using a tool called Vite. Vite is responsible for creating the front end project directory, as well as serving it locally, and eventually in production.

Optional extensions to the structure on the front end are as follows:

- Integrating a CSS preprocessor such as Sass
- Integrating a CSS library or framework, such as Tailwind
- Integrating more complex state management with Redux
- Using socket.io-client if sockets are required

## Back End
While there are tools available for bootstrapping a Node/Express backend, I tend to do it myself, because the workflow in Node back ends is so modular. My steps were as follows:

- Create a server directory
- In this directory, run ``npm init -y`` to create an npm project
- Install the necessary dependencies to build out a back end with express
- Make some basic preparations for directory structure, to the extent to which is possible in the early stages of a project such as this.
    - ``db``: this directory will hold resources for connecting between JS and our database of choice
    - ``loaders``: a useful method of achieving separation of concerns, and loading all required services in the correct sequence before providing them on the main server
    - ``routes``: hosts our API endpoints for each route