import React from 'react'
import axios from 'axios'
import AudioPlayer from './AudioPlayer'


class SongTile extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data: {
        data: null,
        total: '',
        next: ''
      }
    }
  }

  // componentDidMount() {
  //   const search = this.props.search
  //   axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"${search[0]}" track:"${search[1]}"&limit=1`)
  //     .then(res => {
  //       this.setState({ data: res.data })
  //       console.log(this.state.data)
  //     })
  //     .catch(err => console.error(err))
  // }

  render() {
    const { data } = this.state.data
    if (data === null) return null
    const artist = data[0].artist.name
    const artistImage = data[0].artist.picture_big
    const title = data[0].title_short
    const songPreview = data[0].preview
    console.log(data)
    return <div>
      <h1>Artist: {artist}</h1>
      <h2>Song Title: {title}</h2>
      <img src={artistImage}/>
      <AudioPlayer src={songPreview} />
    </div>
  } 


}

export default SongTile