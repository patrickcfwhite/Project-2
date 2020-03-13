import React from 'react'
import Results from './Results'

class Playlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      birthdaySongs: []
    }
  }

  componentDidMount() {
    const { data, birthdayArray } = this.props.location.state
    this.setState({ data: data, birthdaySongs: birthdayArray })
  }

  render() {
    const { data } = this.state
    // return <h1>hello</h1>
    console.log(data, 'playlist')
    return (
      <section className="section SearchPage">
        <div className="container">
          <Results data={this.props.location.state.data} />
        </div>
      </section>
    )
  }
}

export default Playlist