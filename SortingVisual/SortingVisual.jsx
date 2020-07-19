import React from 'react';
import {getInsertionSortAnimations} from '../SortingAlgorithms/InsertionSort';
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort';
import {getSelectionSortAnimations} from '../SortingAlgorithms/SelectionSort';
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort';
import './SortingVisual.css';


var SPEED = 1;


const NUMBER_OF_ARRAY_BARS = 350;


const ORANGE = 'orange';


const RED = 'red';

export default class SortingVisual extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 602));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? RED : ORANGE;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * SPEED);
      }
    }
  }
  bubbleSort() {
    
    const [animations,sortArray] = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = (i % 4 === 0) || (i % 4 === 1);
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange) {
            const color = (i % 4 === 0) ? RED : ORANGE;
            const [barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * SPEED);
        }
        else {
            const [barIndex, newHeight] = animations[i];
            if (barIndex === -1) {
                continue;
            }
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * SPEED);  
        }
    }

     
}
  
  

  selectionSort() {
    const [animations,sortArray] = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = (animations[i][0] === "first") || (animations[i][0] === "second");
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange) {
            const color = (animations[i][0] === "first") ? RED : ORANGE;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * SPEED);
        }
        else {
            const [temp, barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
            },i * SPEED);  
        }
    }
 
  }

  insertionSort() {
    
    const [animations,sortArray] = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = (animations[i][0] === "first") || (animations[i][0] === "second");
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange) {
            const color = (animations[i][0] === "first") ? RED : ORANGE;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * SPEED);
            
          
        }
        else {
            const [temp, barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
            },i * SPEED);  
        }
        
    }
  }
  render() {


    const {array} = this.state;
    const obj = {
        background: "#Black"
    };
    
    return (
      <div style = {obj}>
        
        {array.map((value, idx) => (
          <div
            
            className="array-bar"
            key={idx}
            
            style={{
              backgroundColor: ORANGE,
              height: `${value}px`,
              
            }}>
                
                
            </div>
        ))}
        <div></div>
        
        <button onClick={() => this.resetArray()}>New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.selectionSort()}>Selection Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        
       
        </div>
        
      
    );
  }
}


function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//<h1> HELLO </h1>
/*
Still trying to add some more features:
HeapSort, QuickSort, and a slider to adjust the speed, and the size of the array
*/