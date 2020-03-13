import React from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'
import Results from './Results'


class SearchPage extends React.Component {
  constructor() {
    super()
    this.state = {
      query: '',
      data: []
    }
  }

  handleChange(event) {
    const searchQuery = event.target.value
    this.setState({ query: searchQuery })
    console.log(event)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(event)
    const { query } = this.state
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q="${query}"&limit=24`)
      .then(res => {
        this.setState({ data: res.data.data })
        console.log(this.state.data)
      })
      .catch(err => console.error(err))
  }

  render() {
    const { value, data } = this.state
    return (
      <section className="Hero hero is-fullheight">
        <div className="hero-body">
          <div className="container">
          
            <SearchBar value={value} handleSubmit={(event) => this.handleSubmit(event)} handleChange={(event) => this.handleChange(event)} />
            <Results data={data} />
          </div>
        </div>
      </section>
    )
  }
}

export default SearchPage 