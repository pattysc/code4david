import React, { Component } from 'react'
import fetchCocktails from '../actions/index.js'
import { connect } from 'react-redux'

class CocktailsIndex extends Component {

  componentDidMount(){
    var action = fetchCocktails()
    this.props.dispatch(action)
  }

  render() {
    let cocktails = this.props.cocktails.map((cocktail, i) =>
    { return <li key={i}>{ cocktail.name }</li>})
    return (
      <div id="cocktailsindex"><ul>{ cocktails }</ul></div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cocktails: state.cocktails
  }
}

const wrappedIndex = connect(mapStateToProps)(CocktailsIndex)

export default wrappedIndex
