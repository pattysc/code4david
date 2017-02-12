import React, { Component } from 'react'
import fetchCocktails from '../actions/index.js'
import { connect } from 'react-redux'

class CocktailShow extends Component {

  render() {
    return(
      <div>
        {this.props.currentCocktail.name}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCocktail: state.currentCocktail
  }
}

const wrappedCocktail = connect(mapStateToProps)(CocktailShow)

export default wrappedCocktail
