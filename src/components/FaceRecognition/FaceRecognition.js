import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11}) =>{
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
          </div>
      </div>
  )
}

export default FaceRecognition;
