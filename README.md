# Project Overview


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

Will upload soon

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

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 React
 React Router

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
