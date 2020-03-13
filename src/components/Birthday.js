import React from 'react'
import scripts from '../lib/scripts'
import findNumberOnes from '../lib/lib'
import axios from 'axios'

class Birthday extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      birthdayInput: {
        date: '',
        month: '',
        year: ''

      },
      birthdayArray: [],
      data: []
    }
  }

  handleChange(event) {
    console.log(event)
    const { name, value } = event.target
    const data = { ...this.state.birthdayInput, [name]: value }
    this.setState({ birthdayInput: data })
  }

  handleSubmit(event) {
    const { date, month, year } = this.state.birthdayInput
    event.preventDefault()
    const bdays = scripts.getBirthdays(year, month, date)
    const bdayArray = Array.from(bdays)
    const searchSongs = findNumberOnes(bdayArray)

    console.log(searchSongs)

    const dataUpdate = []

    const getData = async () => { 
      for (let i = 0; i < searchSongs.length; i++) {
        await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"${searchSongs[i]['artist']}" track:"${searchSongs[i]['track']}"&limit=1`)
          .then(res => {
            const temp = res.data.data[0]
            dataUpdate.push(temp)
          })
          .catch(err => console.error(err))
      }
    }
    getData()

    console.log('Bday songs: ', searchSongs, 'Deezer Info: ', dataUpdate)

    //this.setState({ data: dataUpdate, birthdayArray: searchSongs })
    
  }


  render() {
    const { date, month, year } = this.state
    return (
      <section className="Hero hero is-fullheight">
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