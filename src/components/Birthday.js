import React from 'react'
import scripts from '../lib/scripts'
import findNumberOnes from '../lib/lib'

class Birthday extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {
        date: '',
        month: '',
        year: ''
      }
    }
  }

  handleChange(event) {
    console.log(event)
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(event) {
    const { date, month, year } = this.state.data
    event.preventDefault()
    const bdays = scripts.getBirthdays(year,month,date)
    const bdayArray = Array.from(bdays)
    const bdayNumberOnes = findNumberOnes(bdayArray)

    console.log(bdayNumberOnes)

    // event.preventDefault()
    // console.log(event)
    // const { query } = this.state
    // axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q="${query}"&limit=10`)
    //   .then(res => {
    //     this.setState({ data: res.data.data })
    //     console.log(this.state.data)
    //   })
    //   .catch(err => console.error(err))
  }


  render() {
    const { date, month, year } = this.state
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">Enter Your Birthday below</h1>
            <form className="form" onSubmit={(event) => this.handleSubmit(event)}>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        onChange={(event) => this.handleChange(event)}
                        type="text"
                        name="date"
                        placeholder="Day e.g. 20"
                        value={date}
                      />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        onChange={(event) => this.handleChange(event)}
                        type="text"
                        name="month"
                        placeholder="Month e.g. 04"
                        value={month}
                      />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        onChange={(event) => this.handleChange(event)}
                        type="text"
                        name="year"
                        placeholder="Year e.g. 1985"
                        value={year}
                      />
                    </p>
                  </div>
                  <button className='button is-primary'>Create Playlist</button>
                </div>
                
              </div>
              
            </form>
          </div>
        </div>
      </section>

    )
  }


}

export default Birthday