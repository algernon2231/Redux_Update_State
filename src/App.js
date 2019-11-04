import React, {Component} from 'react'
import { connect } from 'react-redux'

class App extends Component {
  
   render(){
    return (
      <div className="App">
       <h1>Age: {this.props.age}</h1>
       <button onClick = {this.props.handleUp}>Age Up</button>
       <button onClick= {this.props.handeDown}>Age Down</button>
       <hr/>
       <div>History</div>
       <div>
         <ul>
            { this.props.history.map( el => <li onClick= {() => this.props.handleDel(el.id)} key={el.id}>{el.age}</li>)}
         </ul>
       </div>
      </div>
    );
   }
}
const mapStateToProps = (state) => {
  return {
    age : state.age,
    history:state.history
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleUp: () => dispatch({type: 'UP',value:1}),
    handeDown : () => dispatch({type: 'DOWN', value: 1}),
    handleDel : (id) => dispatch({ type: 'DEL_ITEM', key : id })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)