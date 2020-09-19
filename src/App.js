import React, {Component} from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
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
      box11: {}
    }
  }

  calculateFaceLocation = (data) => {
    //let clarifaiFace;
    // console.log(data.outputs[0].data.regions.length);
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
     // const re =[];
  // for(let i=0; i<data.outputs[0].data.regions.length; i++){
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    let box ={
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }

    let box1={},box2={},box3={},box4={},box5={},box6={},box7={},box8={},box9={},box10={},box11={};
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
  //    let ans={
  //      leftCol: clarifaiFace.left_col * width,
  //      topRow: clarifaiFace.top_row * height,
  //      rightCol: width - (clarifaiFace.right_col * width),
  //      bottomRow: height - (clarifaiFace.bottom_row * height)
  //    };
  //    re.push(ans);
  // }
  // console.log(re);
   //return re;
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
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
      <Particles className="particles"
        params ={particlesOptions}
      />
          <Navigation />
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
          />

      </div>
    );
  }
    }

    export default App;
