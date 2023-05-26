import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from "../Redux/Action";
import './counter.css';
import { FaPlusCircle , FaMinusCircle} from "react-icons/fa";
export const Counter = () => {
    
const counter = useSelector((state) => state.counter.count);
const dispatch = useDispatch();

const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

    return (
       <>
       <br/>
        <div style={{backgroundColor:'pink',height:200,width:200,marginLeft:500,fontStyle:'italic'}}>
            <br/>
            <h1>Counter: {counter} </h1>
            <button className='btnStyle' onClick={()=>handleIncrement()}><FaPlusCircle/></button>
            <button className='btnStyle' onClick={()=>handleDecrement()} style={{marginLeft:20}}><FaMinusCircle/></button>
        </div>
        </>
    );
};



// export class Counter extends React.Component {
//   incrementHandler=()=> {
//     this.props.increment();
//   }

//   decrementHandler=() =>{
//     this.props.decrement();
//   }

//   toggleCounterHandler=() =>{}

//   render() {
//     const {  increment,decrement } = this.props;
//     return (
//       <main>
//         <h1>Redux Counter</h1>
//         <div ><h1>{this.props.counter}</h1></div>
//         <div>
//           <button onClick={()=>increment(1)}>Increment</button>
//           <button onClick={decrement}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count
//   };
// }

// // const mapDispatchToProps = dispatch => {
// //   return {
// //     increment: () => dispatch(increment(1)),
// //     decrement: () => dispatch(decrement(1)),
// //   }

// // };

// const mapDispatchToProps = (dispatch) => { return { increment: () => dispatch(increment()) }; };

// // const mapDispatchToProps = dispatch =>{ 
// // return{
// //     increment
// // }    
 
// // }; 

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);