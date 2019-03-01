# Project Overview

Project is deployed at: https://eager-bassi-54b0a2.netlify.com/

## Project Description

The idea for this project was to create a small weather app using React. Using the OpenWeatherMap Api, the app will render weather information for a given location and display it to the user. 

## Wireframes

Will upload soon

### MVP/PostMVP

The MVP for this project should include 3 major sections: a welcome page allowing the user to search for the weather for a desired location, a List area which will allow the user to toggle through their locations displaying a 5 day forcast for each, and a detailed page that will show more indepth weather information about a designated location from their list. Post MVP, the user should be able to remove locations from their list, rearrange their list via a drag and drop edit option, and images will be added as backdrop to each location from a seperate api.   

#### MVP Outline
- Obtaining all information from the weather API
- Data should be displayed in a stylized fashion using CSS
- Each location searched should be added into user list
- All components on Detailed page and List page should interact properly

#### PostMVP Outline

- Implemenation to edit user list and rearrange via drag and drop feature
- Cities list should be collapseable and accessable using a hamburger menu
- A second images API will be used to create dynamic backdrops for each city

## React Component Hierarchy

Will Upload Soon

## Components


The following table is not exaustive of every component used in the App, but provides a basic outline:

| Component | Description | 
| --- | :---: |  
| Welcome Page | This will render the opening page with an area to search for a locations weather | 
| Nav | This will render the nav that will be on the sites two other main pages |
| List View | This will render the list view outlining the cities searched and basic information about their weather |
| Detailed View | This will render more details for a selected location including a map with various layers |

##  Time 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| WireFrame & Component Hierarchy | H | 4hrs| / | / |
| Assembling Component Skeleton | H | 5hrs| / | / |
| Working with API | H | 3hrs| / | / |
| Integrating Data into App | H | 4hrs| / | / |
| Routing | M | 4hrs| / | / |
| Sytling using CSS | M | 8hrs| / | / |
| Post MVP | L | 12hrs| / | / |
| Total | H | 40hrs| / | / |


## Additional Libraries
 - React
 - React Router
 - axios
 - moment
 - Chartkick
 
## Code Snippet

Just a quick example of how I chained array methods to extra data, component class methods to update state, and render conditionally based on state.  

```
  {days.slice(1, this.state.showDays).map((el, idx) => (
          <div className="day" key={idx}>
            <div className="day-base-data">
              <div className="day-name">{getDay(el.sunriseTime)}</div>
              <div className="day-icon">{el.icon}</div>
              <div className="day-high-low">
                <div className="day-high">&uarr;{Math.round(el.temperatureHigh)}&deg;</div>
                <div className="day-low">&darr;{Math.round(el.temperatureLow)}&deg;</div>
                <div
                  className="day-show-more"
                  onClick={(ev)=> {
                    ev.preventDefault();
                    this.expandDay(idx)}
                  }>{idx === this.state.showMore ? '-' : '+'}</div>
                </div>
            </div>
            <div className="day-extended-data">
              {this.state.showMore === idx &&
                <div className="extended-data">
                  <div className="day-summary">{el.summary}</div>
                  <div className="day-prop">There is a {el.precipProbability * 100}% chance of {el.precipType}</div>
                  <div className="day-sunrise-sunset">Sunrise: {getTime(el.sunriseTime)}<br/>Sunset: {getTime(el.sunsetTime)}</div>
                </div>
              }
            </div>
          </div>
        ))}

```

## Issues and Resolutions
 The original API I was going to used turned out to have fundamental issues in the middle of the project. Learning when to just cut loses and find a new one was a growth opportunity. In the end I was able find another weather api and use a few additional libraries to clean up the data. As a final note, this was my first project that had some intensive CSS elements, so learning to use that through trial and error was an excellent experience.

