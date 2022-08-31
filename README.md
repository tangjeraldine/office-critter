# Adulting for the Millenial Zombie - an API Project 

## Project Description 

This project was completed as part of the full-time immersive Software Engineering course with General Assembly. The requirement is to build a frontend application using React and available APIs. 

### **Background of Project**
"Office Critter" was conceived off my personal interests towards improving daily productivity, as well as my personal desire for a self-built app that could help me track the things that mattered to me. Office Critter can be used by anyone on a desktop/laptop, whether they're at the office or working from home.

Objectives to be met with this topic:
- [ ] Build a web application using React framework;
- [ ] Use 3rd party API(s);
- [ ] Create wireframes for the app
- [ ] Use the CRUD method (Create, Read, Update, Delete).

### **Tools Used and Crediting Sources** 

- Vite 
- ReactJS 
- JavaScript 
- API documentation
  - UnSplash Photos
  - OpenWeatherMap
  - Numbers API (which unfortunately could not be deployed in Vercel, so it had to be scrapped)
  - New York Times API
- Libraries 
  - Tailwind CSS
  - DaisyUI
  - ChartJS 
### **The Planning Process**

To kick off my planning for this project, I began by brainstorming ideas of digital products that I wished I had when I was working. I had originally envisioned working on a project focused on visual experiences, where I intended to use the API by NASA to create a project displaying the marvels of humanity's scientific milestones. However for the purposes of this project, I decided to keep NASA as a pet project, so that I could work on building a work resource that would focus on either: 
- enhancing business operations, or
- personal productivity. 

With these 2 ideas in tow, I decided to build an app in a way that was important to me, while merging together ideas from brief feedback sessions with my close friends and loved ones on what tools (on top of existing ) could help them manage day-to-day tasks. The Office Critter idea was then born. 

### Wireframing 

For illustration purposes, I will be sharing the wireframes for two of the main features of my webpage - the main entry page and the task management page. If you wish to explore the page on your own, you may visit it at https://react-office-critter-app.vercel.app/. 

![Main Entry Page](/Media/WireframeHomePage.JPG "Main Entry Page")

I wanted to create a starting page that would give the user the overall feeling of beginning a new day, and that they were being greeted by a task helper. This wireframe is a very rudimentary mock up of the actual interface, which will be visited in the next section. 

![Task Management Page](/Media/WireframeTaskPage.JPG "Task Management Page")

Another example of one of my wireframes is the Task Management Page, which is the principal feature of my webpage. The idea was to have an text field that would take in instructions from the user, who would then submit their task for the day and have it added to the field below. Tasks marked as done would be removed from the list, and in the actual interface, I also used ChartJS to map out the number of tasks input versus the tasks completed, to allow the user to know how large their gap in productivity is. This idea will be elucidated in subsequent sections.

### **App Interface** 

This section will cover the salient functionalities of Office Critter[^1]. 

> **Start** 

On loading the page, users will begin by viewing the page in the GIF illustration below.

![Introduction](/Media/StartIntro.gif "Introduction Page")

The changes in page layout were organised by using `Outlet` to place all the other pages as children of the Layout page:

```
function App() {
...
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<LayoutPage/>}>
            <Route index element={<RootPage/>}/>
            <Route path='/home' element={<HomePage/>}/>
           ...
            <Route path='/entertainment' element={<EntertainmentPage/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

```

This way, the wallpaper background could be preserved in the Layout page, and props could be passed between the navigation bar (child) and the Layout page, allowing the theme of the wallpaper to change state and hence render a different API every time the button is pressed. This can be seen in the next section, Changing Wallpaper.

[^1]: In Office Critter, I decided against using local storage to save individual profiles (which sounds great and I'm sure that's what some people prefer to experience) because the app is currently focused on day-to-day tasks and is, at the moment, not meant to 'keep the tasks overnight'. The app focuses on helping users to accomplish achievable targets for the day and, hopefully, spurs the individual to focus solely on the tasks they absolutely need to complete on the day. On this note, I do have future plans to improve and expand this system, and it will be elaborated on in the Future Plans section at the end of this README document.

> **Changing WallPaper**

The wallpaper can be changed using the drop-down list at the navigation bar. The list provided here is exhaustive and was selected based on common popular themes that can be found on other websites as well. (See GIF demonstration below.)

![Wallpaper Changing](/Media/ChangeWallpaper.gif "How to change wallpaper")

The useState hook was set up in the App.jsx file to allow the passing of props between the Layout page and other components. The wallpapers derived from the UnSPlash API server were fetched with the following onclick function: 

```
  const fetchWP = () => {
    const WPURL = `https://api.unsplash.com/photos/random?client_id=GdUVswihOUZQbPBprLpHirAHvbdsxnrRq_98puNbwCs&orientation=landscape&query=${wpTheme}`;
    fetch(WPURL)
      .then((response) => response.json())
      .then((data) => setWP(data?.urls?.raw));
  };
  ```

> **Task Management**

The task management tab was set up by passing several props an inordinate number of times due to the number of nested components I had. View some of the functionalities in the GIF below: 

![Task Management](/Media/TasksAddition.gif "Adding and Managing Tasks")

I did consider using the useContext hook, given the volume and number of times I needed to pass my props around, but my consideration was that it may have made my code less legible and more confusing. 

> **Weather and Lifestyle**

![Weather](/Media/WeatherPage.gif "Weather Page")

The weather page titled "#Skies" fetches information from the OpenWeatherMap API. Here, I'd like to talk about the CSS libraries that I've been using so far, which are Tailwind CSS and DaisyUI, which is a framework dependent on Tailwind CSS. Templates like the carousel aren't hard to use. My experience with it so far has been largely a positive one, though I'd try Material UI to experiment with page transitions moving forward. 

![Entertainment Page](/Media/EntertainmentLifestyle.gif "Entertainment Page")
### **My Coding Experience**

On the whole, React was fun to code with and the greatest benefit to using React was the level of organisation that I could have with my components. At every step of the way I could keep a clear head on where my components were stored, how to position them, and yet maintain a mental map of where to store the states despite the volume of props that needed to be passed through each parent component. 

I was however unable to get my favourite API, the numbers API (which generates really awesome and interesting trivia pertaining to numbers), to work due to a CORS issue and I was unable to find the remedy to it. This was the main reason that my entertainment page (Brain Fart!) had to be reorganised to contain other elements like the YouTube carousel and books recommendation sections instead. 

Another area that I'd like to have worked on further was page-responsiveness. As of now, my CSS code has only had applications specific to desktop browsers. Expanding on viewing specifications for tablets and handphones would be something I'd like to explore next. 

### **Future Plans**

In the previous section I talked about expanding my CSS code to include tablet and mobile viewings as part of future improvements. On top of that, I would definitely also include backend (or local) storage to store personal user profiles and their tasks so that users can continue from where they left off the day before instead of having to type everything in again.

## A Summary 

Looking back, completing this project in React has been most enjoyable and educational for me. It's given me a wide berth to explore putting in different features and I had plenty of room to make mistakes and learn from them. Office Critter was absolutely a great avenue for me to eperiment in the following areas:
- Deliberating over user stories
- Conducting my own user research on a mini scale
- Exploring libraries and discovering awesome APIs to contribute to the app
- Deciding on functionalities and breaking it down into smaller portions to make the code, make the functionality happen!
- Practicing creating websites using React.

For the next few projects, I hope to keep pushing the boundaries of what I can do and sourcing for solutions to understand coding problems better. 

==END==