### My React Journey  Samples with react 0.16
### State managed by **REDUX**.

*Note:* This is an exercise to make the UI same as that of, however managing state of the application with the help of REDUX framework. 

This is a react based application where we are creating some sample components and displaying the UI with the help of **BLUEPRINTJS** library components. 

This project contains a number of enhancements over my existing REACT projects, as here i decided to use a template defined at [https://github.com/SophieDeBenedetto/catbook-redux] ](https://github.com/SophieDeBenedetto/catbook-redux]  "https://github.com/SophieDeBenedetto/catbook-redux] ")



## Steps
1. Clone the Project
2. Make sure that webpack is installed globally "npm install -g webpack" or "yarn global add webpack"
3. run npm install
4. run "npm start" 
6. open http://localhost:3000 and it will display a sample application. 
  Image 1: 
   ![](https://github.com/panbhatt/ReactTutBookSearchWithFlux/blob/master/images/initial_image.JPG)

  Image 2: 
   ![](https://github.com/panbhatt/ReactTutBookSearchWithFlux/blob/master/images/FLUX_image.jpg)	

Click around to play with the various functionality available. 

- Search something in the search box based upon the title
- Edit a specific Book present in the table. 
- Update the data regarding a specific book. 
- Add a new book in the table. 
- Delete an existing book in the table. 

### Code files & Folder Description  ###
1. **index.js**-> This is the main reactjs file and everything is being loaded by this file. Here are configuring the root Store and dispatching the initial loading of the books. Also we are wrapping our main component in PROVIDER that is provided by REDUX.
2. **app.js** -> This is our main react file, that will contain Header/MainPage/footer.
3. **src/actions** This folder will contain all the files related to  the actions like the type of actions and the actions that can be categorized by component and can be used by the components.
4. **api/** : This folder will contain all the API related stuff, that our client application is suppose to call. In this project we have an sample express application that will serve us the initial book through server.js (which starts the express server). 
5. **src/components** This folde will have all the components that are being used in the application. That includes BookEdit Component, BookList Component and Book Search component, Header/Footer. Every Book related component use  BLUEPRINTJS as the react library and use mapStateToProps and mapDispatchToProps to map REDUX staet and actiosn to the props of the component. 
6. **src/reducers** This contains all the reducers in this case (only two). One will contain all the functions related to the Book (list) and one with the EditBook. This folder also contains the initial state and the Root Reducer. Root reducer will define as how our State is being mapped to the Key in the REDUX tree. 

  *NOTE* -> Some of the sub component will implement componentWillReceiveProps function to update the internal state of the component based upon what present in the new props.  

###Flow Description###

----------


		user action on component etc ->
			component calls actions passed by mapDispatchToProps (Present in action files)->
			    Action dispatches to dispatcher with EVENT n DATA  ->
		    		Reducer got executed, update the state ->
		        		Provider, update state and call mapStateToProps ->
		          			Components componentWillReceiveProps will upate state from props 

###Links:
[https://medium.com/a-beginners-guide-for-webpack-2](https://medium.com/a-beginners-guide-for-webpack-2 "WebPack  2- Begineers Guide, Good one")

[https://toddmotto.com/react-create-class-versus-component/](https://toddmotto.com/react-create-class-versus-component/ "react.createClass vs Component")

[https://mxstbr.blog/2017/02/react-children-deepdive/](https://mxstbr.blog/2017/02/react-children-deepdive/ "React Children Understanding")

###REDUX: 
[http://www.thegreatcodeadventure.com/building-a-simple-crud-app-with-react-redux-part-1/ ](http://www.thegreatcodeadventure.com/building-a-simple-crud-app-with-react-redux-part-1/  "http://www.thegreatcodeadventure.com/building-a-simple-crud-app-with-react-redux-part-1/ ")

[http://www.github.com/SophieDeBenedetto/catbook-redux] ](http://www.github.com/SophieDeBenedetto/catbook-redux]  "http://www.github.com/SophieDeBenedetto/catbook-redux] ")

[http://blog.isquaredsoftware.com/series/practical-redux/](http://blog.isquaredsoftware.com/series/practical-redux/ "http://blog.isquaredsoftware.com/series/practical-redux/")


