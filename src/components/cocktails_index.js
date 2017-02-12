import React, { Component } from 'react'
import {fetchCocktails, currentCocktail} from '../actions/index.js'
import { connect } from 'react-redux'
import CocktailShow from './cocktails_show'


class CocktailsIndex extends Component {

  componentDidMount(){
    var action = fetchCocktails()
    this.props.dispatch(action)
  }

  clicks(id){
    var cocktail = this.props.cocktails.filter(cocktail => cocktail.id === id)
    var action = currentCocktail(cocktail[0])
    this.props.dispatch(action)
  }

  render() {
    let cocktails = this.props.cocktails.map((cocktail, i) =>
    { return <li key={i}> <a href="#" onClick={this.clicks.bind(this, cocktail.id)} >{ cocktail.name } </a> </li>})
    return (
      <div>
        <div id="cocktailsindex"><ul>{ cocktails }</ul></div>
        <CocktailShow />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cocktails: state.cocktails,
    currentCocktail: state.currentCocktail
  }
}

const wrappedIndex = connect(mapStateToProps)(CocktailsIndex)
export default wrappedIndex
