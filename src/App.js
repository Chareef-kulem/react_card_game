import React,{Component} from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
const prepareStateFromWorld = (give_world) => {
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
}
}
