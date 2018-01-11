### My React Router (V4) Journey  - Samples with react 0.16 -  REBASS components


*Note:* 


1. This is an exercise to render some UI components and navigate between them.
2. This application make use of **FANTASTIC **parcel.js** **as the web module packer/loader which is awesome.   

This is a react based application where we are creating some sample components and displaying the UI with the help of **REBASS** library components. 





## Steps
1. Clone the Project
2. run npm install
3. run "npm run start" 
4. open http://localhost:1234 and it will display a sample application whre the UI by default is being redirect to the Login Form. 




### Code files & Folder Description  ###
1. **index.html**-> This is the main HTML file that will contain a reference to the index.js file.All CSS should be loaded here. 
2. **index.js** -> This is our main react file, that will be responsible for loading the file Äpp.js which contains our complete component. 
3. **src/login/** This folder contain the simple Login and Register Form components used in the application. 
4. **src/layout** : This file contain the layout component file that will be used to render the UI based upon the authorization or failure. 
5. **src/components** This folde will have all the components that are being used in the application. That includes BookEdit Component, BookList Component and Book Search component, Header/Footer. Every Book related component use  BLUEPRINTJS as the react library and use mapStateToProps and mapDispatchToProps to map REDUX staet and actiosn to the props of the component. 
6. **Main.js** :  Main JS is responsible for  loading the react-router thing and redirecting to /auth/login on very first loading of the application. 



###Links that are helpful (require to understand prior to this):
**React Router description** -> [https://css-tricks.com/react-router-4/](https://css-tricks.com/react-router-4/ "https://css-tricks.com/react-router-4/")

**REBASS Component library** -> [http://jxnblk.com/rebass/](http://jxnblk.com/rebass/ "http://jxnblk.com/rebass/")