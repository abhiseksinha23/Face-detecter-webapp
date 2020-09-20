import React, {Component} from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'f4e727ea6290436bb56ff66087850c6a',
});

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component{
  constructor(){
    super();
    this.state ={
      input: '',
      imageUrl: '',
      route: 'signin',
      isSignedIn: false,
      box: {},
      box1: {},
      box2: {},
      box3: {},
      box4: {},
      box5: {},
      box6: {},
      box7: {},
      box8: {},
      box9: {},
      box10: {},
      box11: {},
      box12: {},
      box13: {},
      box14: {},
      box15: {},
      box16: {},
      box17: {},
      box18: {},
      box19: {},
      box20: {},
      box21: {},
      box22: {},
      box23: {},
      box24: {},
      box25: {},
      box26: {},
      box27: {},
      box28: {},
      box29: {},
      box30: {},
      box31: {},
      box32: {}
    }
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    let box ={
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }

    let box1={},box2={},box3={},box4={},box5={},box6={},box7={},box8={},box9={},box10={},box11={};
    let box12={},box13={},box14={},box15={},box16={},box17={},box18={},box19={},box20={},box21={};
    let box22={},box23={},box24={},box25={},box26={},box27={},box28={},box29={},box30={},box31={},box32={};
    if(data.outputs[0].data.regions.length>=2){
      const clarifaiFace = data.outputs[0].data.regions[1].region_info.bounding_box;
      box1 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=3){
      const clarifaiFace = data.outputs[0].data.regions[2].region_info.bounding_box;
      box2 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }if(data.outputs[0].data.regions.length>=4){
      const clarifaiFace = data.outputs[0].data.regions[3].region_info.bounding_box;
       box3 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }if(data.outputs[0].data.regions.length>=5){
      const clarifaiFace = data.outputs[0].data.regions[4].region_info.bounding_box;
       box4 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }if(data.outputs[0].data.regions.length>=6){
      const clarifaiFace = data.outputs[0].data.regions[5].region_info.bounding_box;
       box5 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }if(data.outputs[0].data.regions.length>=7){
      const clarifaiFace = data.outputs[0].data.regions[6].region_info.bounding_box;
       box6 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=8){
      const clarifaiFace = data.outputs[0].data.regions[7].region_info.bounding_box;
       box7 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=9){
      const clarifaiFace = data.outputs[0].data.regions[8].region_info.bounding_box;
       box8 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=10){
      const clarifaiFace = data.outputs[0].data.regions[9].region_info.bounding_box;
       box9 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=11){
      const clarifaiFace = data.outputs[0].data.regions[10].region_info.bounding_box;
       box10 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=12){
      const clarifaiFace = data.outputs[0].data.regions[11].region_info.bounding_box;
       box11 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }

    if(data.outputs[0].data.regions.length>=13){
      const clarifaiFace = data.outputs[0].data.regions[12].region_info.bounding_box;
       box12 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=14){
      const clarifaiFace = data.outputs[0].data.regions[13].region_info.bounding_box;
       box13 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=15){
      const clarifaiFace = data.outputs[0].data.regions[14].region_info.bounding_box;
       box14 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=16){
      const clarifaiFace = data.outputs[0].data.regions[15].region_info.bounding_box;
       box15 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=17){
      const clarifaiFace = data.outputs[0].data.regions[16].region_info.bounding_box;
       box16 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=18){
      const clarifaiFace = data.outputs[0].data.regions[17].region_info.bounding_box;
       box17 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=19){
      const clarifaiFace = data.outputs[0].data.regions[18].region_info.bounding_box;
       box18 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=20){
      const clarifaiFace = data.outputs[0].data.regions[19].region_info.bounding_box;
       box19 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=21){
      const clarifaiFace = data.outputs[0].data.regions[20].region_info.bounding_box;
       box20 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=22){
      const clarifaiFace = data.outputs[0].data.regions[21].region_info.bounding_box;
       box21 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=23){
      const clarifaiFace = data.outputs[0].data.regions[22].region_info.bounding_box;
       box22 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=24){
      const clarifaiFace = data.outputs[0].data.regions[23].region_info.bounding_box;
       box23 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=25){
      const clarifaiFace = data.outputs[0].data.regions[24].region_info.bounding_box;
       box24 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }

    if(data.outputs[0].data.regions.length>=26){
      const clarifaiFace = data.outputs[0].data.regions[25].region_info.bounding_box;
       box25 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=27){
      const clarifaiFace = data.outputs[0].data.regions[26].region_info.bounding_box;
       box26 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=28){
      const clarifaiFace = data.outputs[0].data.regions[27].region_info.bounding_box;
       box27 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=29){
      const clarifaiFace = data.outputs[0].data.regions[28].region_info.bounding_box;
       box28 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=30){
      const clarifaiFace = data.outputs[0].data.regions[29].region_info.bounding_box;
       box29 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=31){
      const clarifaiFace = data.outputs[0].data.regions[30].region_info.bounding_box;
       box30 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    if(data.outputs[0].data.regions.length>=32){
      const clarifaiFace = data.outputs[0].data.regions[31].region_info.bounding_box;
       box31 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }

    if(data.outputs[0].data.regions.length>=33){
      const clarifaiFace = data.outputs[0].data.regions[32].region_info.bounding_box;
       box32 ={
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
      this.setState({box1: box1});
      this.setState({box2: box2});
      this.setState({box3: box3});
      this.setState({box4: box4});
      this.setState({box5: box5});
      this.setState({box6: box6});
      this.setState({box7: box7});
      this.setState({box8: box8});
      this.setState({box9: box9});
      this.setState({box10: box10});
      this.setState({box11: box11});
      this.setState({box12: box12});
      this.setState({box13: box13});
      this.setState({box14: box14});
      this.setState({box15: box15});
      this.setState({box16: box16});
      this.setState({box17: box17});
      this.setState({box18: box18});
      this.setState({box19: box19});
      this.setState({box20: box20});
      this.setState({box21: box21});
      this.setState({box22: box22});
      this.setState({box23: box23});
      this.setState({box24: box24});
      this.setState({box25: box25});
      this.setState({box26: box26});
      this.setState({box27: box27});
      this.setState({box28: box28});
      this.setState({box29: box29});
      this.setState({box30: box30});
      this.setState({box31: box31});
      this.setState({box32: box32});

   return box;
 }

 displayFaceBox = (box) => {
   this.setState({box: box});
 }

  onInputChange = (event)=>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit = ()=>{
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log("Error =>Please check if the URL is okay and contains .jpg/jpeg/.png etc at the end or the input is empty!!!"));
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
        this.setState({isSignedIn: false});
    }else if(route === 'home'){
          this.setState({isSignedIn: true});
      }
   this.setState({route: route});
 }


  render(){
    return (
      <div className="App">
      <Particles className="particles"
        params ={particlesOptions}
      />
          <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
          { this.state.route === 'home'?
            <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange= {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition
            imageUrl={this.state.imageUrl}
            box={this.state.box}
            box1={this.state.box1}
            box2={this.state.box2}
            box3={this.state.box3}
            box4={this.state.box4}
            box5={this.state.box5}
            box6={this.state.box6}
            box7={this.state.box7}
            box8={this.state.box8}
            box9={this.state.box9}
            box10={this.state.box10}
            box11={this.state.box11}
            box12={this.state.box12}
            box13={this.state.box13}
            box14={this.state.box14}
            box15={this.state.box15}
            box16={this.state.box16}
            box17={this.state.box17}
            box18={this.state.box18}
            box19={this.state.box19}
            box20={this.state.box20}
            box21={this.state.box21}
            box22={this.state.box22}
            box23={this.state.box23}
            box24={this.state.box24}
            box25={this.state.box25}
            box26={this.state.box26}
            box27={this.state.box27}
            box28={this.state.box28}
            box29={this.state.box29}
            box30={this.state.box30}
            box31={this.state.box31}
            box32={this.state.box32}
            />
            </div>:(this.state.route === 'signin' || this.state.route === 'signout')?
            <Signin onRouteChange={this.onRouteChange}/>:
            <Register onRouteChange={this.onRouteChange}/>
          }


      </div>
    );
  }
    }

    export default App;
