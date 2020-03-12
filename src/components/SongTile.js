import React from 'react'
//ßimport axios from 'axios'
import AudioPlayer from './AudioPlayer'


const SongTile = ({ data }) => {


  // componentDidMount() {
  //   const search = this.props.search
  //   axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"${search[0]}" track:"${search[1]}"&limit=1`)
  //     .then(res => {
  //       this.setState({ data: res.data })
  //       console.log(this.state.data)
  //     })
  //     .catch(err => console.error(err))
  // }
  console.log(data)
  if (data === null) return null
  const artist = data.artist.name
  const artistImage = data.artist.picture_big
  const title = data.title_short
  const songPreview = data.preview
  return (
    <section className="section">
      <div className="container">
        <div className="column">
          <h1 className="title">Artist: {artist}</h1>
          <h2 className="subtitle">Song Title: {title}</h2>
          <figure className="image">
            <img src={artistImage} />
          </figure>
          <AudioPlayer src={songPreview} />
        </div>
      </div>
    </section>
  )
}

export default SongTile