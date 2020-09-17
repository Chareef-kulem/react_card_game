import React,{Component} from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
let given_world = 'AMONG US'
const prepareStateFromWorld = (given_world) => {
  let word = given_world.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return{
    word,
    chars,
    attempt: 1,
    guess:[],
    completed:false
  }
}
export default class WorldCard extends Comment {
  constructor(props){
    super(props);
    this.state={
      attempt: '',
    }
  }
componentWillMount(){
  let data = prepareStateFromWorld(this.props.value);
  this.setstate({
    word:data.word,
    chars:data.chars,
    attempt:data.attempt,
    guess:data.guess,
    completed:data.completed,
  })
}
activationHandler = (c) =>{
  let guess =[...this.state.guess,c]
  this.setState({ guess })
  if (guess.length == this.state.chars.length){
    if (guess.join('').toString() == this.state.word){
      this.setState({guess: [],completed : true})
    } else{
      this.setState({guess:[],attempt: this.state.attempt +1})
    }
  }
}
render(){
  console.log(this.state);
  return (
    <div>
    {
      this.state.chars.map((c,i) => <CharacterCard value={c} key={i} attempt={this.state.attempt} activationHandler={this.activationHandler} />)
    }
    </div>
  );
}
}
