import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30, box31, box32}) =>{
  return(
    <div className='center ma'>
        <div className='absolute mt2'>
          <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            <div className='bounding-box' style={{top: box1.topRow, right: box1.rightCol, bottom: box1.bottomRow, left: box1.leftCol}}></div>
            <div className='bounding-box' style={{top: box2.topRow, right: box2.rightCol, bottom: box2.bottomRow, left: box2.leftCol}}></div>
            <div className='bounding-box' style={{top: box3.topRow, right: box3.rightCol, bottom: box3.bottomRow, left: box3.leftCol}}></div>
            <div className='bounding-box' style={{top: box4.topRow, right: box4.rightCol, bottom: box4.bottomRow, left: box4.leftCol}}></div>
            <div className='bounding-box' style={{top: box5.topRow, right: box5.rightCol, bottom: box5.bottomRow, left: box5.leftCol}}></div>
            <div className='bounding-box' style={{top: box6.topRow, right: box6.rightCol, bottom: box6.bottomRow, left: box6.leftCol}}></div>
            <div className='bounding-box' style={{top: box7.topRow, right: box7.rightCol, bottom: box7.bottomRow, left: box7.leftCol}}></div>
            <div className='bounding-box' style={{top: box8.topRow, right: box8.rightCol, bottom: box8.bottomRow, left: box8.leftCol}}></div>
            <div className='bounding-box' style={{top: box9.topRow, right: box9.rightCol, bottom: box9.bottomRow, left: box9.leftCol}}></div>
            <div className='bounding-box' style={{top: box10.topRow, right: box10.rightCol, bottom: box10.bottomRow, left: box10.leftCol}}></div>
           <div className='bounding-box' style={{top: box11.topRow, right: box11.rightCol, bottom: box11.bottomRow, left: box11.leftCol}}></div>
           <div className='bounding-box' style={{top: box12.topRow, right: box12.rightCol, bottom: box12.bottomRow, left: box12.leftCol}}></div>
           <div className='bounding-box' style={{top: box13.topRow, right: box13.rightCol, bottom: box13.bottomRow, left: box13.leftCol}}></div>
           <div className='bounding-box' style={{top: box14.topRow, right: box14.rightCol, bottom: box14.bottomRow, left: box14.leftCol}}></div>
           <div className='bounding-box' style={{top: box15.topRow, right: box15.rightCol, bottom: box15.bottomRow, left: box15.leftCol}}></div>
           <div className='bounding-box' style={{top: box16.topRow, right: box16.rightCol, bottom: box16.bottomRow, left: box16.leftCol}}></div>
           <div className='bounding-box' style={{top: box17.topRow, right: box17.rightCol, bottom: box17.bottomRow, left: box17.leftCol}}></div>
           <div className='bounding-box' style={{top: box18.topRow, right: box18.rightCol, bottom: box18.bottomRow, left: box18.leftCol}}></div>
           <div className='bounding-box' style={{top: box19.topRow, right: box19.rightCol, bottom: box19.bottomRow, left: box19.leftCol}}></div>
           <div className='bounding-box' style={{top: box20.topRow, right: box20.rightCol, bottom: box20.bottomRow, left: box20.leftCol}}></div>
           <div className='bounding-box' style={{top: box21.topRow, right: box21.rightCol, bottom: box21.bottomRow, left: box21.leftCol}}></div>
           <div className='bounding-box' style={{top: box22.topRow, right: box22.rightCol, bottom: box22.bottomRow, left: box22.leftCol}}></div>
           <div className='bounding-box' style={{top: box23.topRow, right: box23.rightCol, bottom: box23.bottomRow, left: box23.leftCol}}></div>
           <div className='bounding-box' style={{top: box24.topRow, right: box24.rightCol, bottom: box24.bottomRow, left: box24.leftCol}}></div>
           <div className='bounding-box' style={{top: box25.topRow, right: box25.rightCol, bottom: box25.bottomRow, left: box25.leftCol}}></div>
           <div className='bounding-box' style={{top: box26.topRow, right: box26.rightCol, bottom: box26.bottomRow, left: box26.leftCol}}></div>
           <div className='bounding-box' style={{top: box27.topRow, right: box27.rightCol, bottom: box27.bottomRow, left: box27.leftCol}}></div>
           <div className='bounding-box' style={{top: box28.topRow, right: box28.rightCol, bottom: box28.bottomRow, left: box28.leftCol}}></div>
           <div className='bounding-box' style={{top: box29.topRow, right: box29.rightCol, bottom: box29.bottomRow, left: box29.leftCol}}></div>
           <div className='bounding-box' style={{top: box30.topRow, right: box30.rightCol, bottom: box30.bottomRow, left: box30.leftCol}}></div>
           <div className='bounding-box' style={{top: box31.topRow, right: box31.rightCol, bottom: box31.bottomRow, left: box31.leftCol}}></div>
           <div className='bounding-box' style={{top: box32.topRow, right: box32.rightCol, bottom: box32.bottomRow, left: box32.leftCol}}></div>
          </div>
      </div>
  )
}

export default FaceRecognition;
