# React Portfolio

## Summary
Welcome to my portfolio! I created this website to display projects that demonstrate my style and abilities as a web developer. React and Bootstrap were used in conjunction with HTML and CSS to build a responsive site. By using a responsive layout, my portfolio renders well on a variety of devices, everthing from phones to tablets to computers. This website will continue to be updated as more projects become available to share.

## Features
* React was used to build individual components that are combined to render the entire page
    * There are separate components for the header, jumbotron, footer, wrapper, project, about, and contact
    * The header and footer components are rendered to every page
    * React Router dynamically renders the about, contact, or portfolio page based on what a user selects from the navbar 

* Reactstrap was used to create components for a mobile responsive layout
    * The navbar at the top of each page renders as a toggle button to display a dropdown menu on all screen sizes
    * Boxes and their content resize to fit the size of any size screen

* The Bootstrap grid system was used to create a series of containers, rows, and columns in order to produce a responsive layout
    * The about page is comprised of a container that holds a row with columns to display the image and card with text
    * The portfolio page contains a card with rows and columns to display each project
    * The contact page is comprised of a container which holds a row with a column for each icon

* The AOS library was utilized to add animation to images and cards when a user scrolls

* The application is hosted and deployed on Heroku 

## Built With
* [React](https://reactjs.org/)- JavaScript library for building user interfaces
* [Express](https://expressjs.com/)- back end web application framework for Node.js for building web applications and APIs
* [Node.js](https://nodejs.org/en/) - JavaScript runtime environment that executes JavaScript outside the web browser
* [Reactstrap](https://reactstrap.github.io/) - used to create components for a mobile responsive layout
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - used to create the structure of the page
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - used to style HTML elements on the page
* [AOS Library](https://michalsnik.github.io/aos/) - Animate on Scroll library used to animate images and cards when a user scrolls
* [Heroku](https://heroku.com) - used to deploy website
* [Git](https://git-scm.com/) - version control system used to track changes in source code
* [GitHub](https://github.com/) - hosts repository and deploys page on GitHub

## Deployed Link
[View portfolio](https://engrebecca.herokuapp.com/)

![Portfolio GIF](portfolio/public/Portfolio.gif)

## Code
The below code demonstrates how React Router is used to display either the project, about, or contact component depending on which path the client requests from the navbar links.


        <Router>
            <div className="body">
                <Header />
                <Jumbotron />
                <Wrapper>
                    <Switch>
                        <Route path="/portfolio" exact>
                            <ProjectContext.Provider value={projects}>
                                <Project />
                            </ProjectContext.Provider>
                        </Route>
                        <Route path="/" exact>
                            <About />
                        </Route>
                        <Route path="/contact" exact>
                            <Contact />
                        </Route>
                        <Route path="*">
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </Wrapper>
            </div>
            <Footer />
        </Router>

## Author
* Rebecca Eng
* [GitHub](https://github.com/engrebecca)
* [LinkedIn](https://www.linkedin.com/in/engrebecca/)

## Credits
* Background image from [Unsplash](https://unsplash.com/images/stock)
* Icons from [Font Awesome](https://fontawesome.com/)

## License
This project is licensed under the MIT license