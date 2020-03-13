import React, { useState } from 'react'
//ßimport axios from 'axios'


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
  const [ hovered, setHovered ] = useState(false)
  const [ clicked, setClicked ] = useState(false)
  const toggleHover = () => setHovered(!hovered)
  const toggleClicked = () => setClicked(!clicked)

  const handleClick = () => {
    toggleClicked()
  }

  console.log(data, 'songtile')
  if (data === null) return null
  const artist = data.artist.name
  const artistImage = data.album.cover_big
  const title = data.title_short
  const songPreview = data.preview
  return (
    <div className="SongCard column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <div className="card">
        <div 
          className={clicked ? 'card-image pause' : 'card-image'}
        >
          <figure className="image">
            <img
              src={artistImage}
              className={hovered ? 'Image opaque' : 'Image'} 
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
              onClick={() => handleClick()}
            />
          </figure>
          {clicked ? <audio src={songPreview} autoPlay ></audio> : null }
        </div>
        <h2 className="offwhite title is-4">{artist}</h2>
        <h2 className="offwhite subtitle is-5">{title}</h2>

        
      
        {/* <AudioPlayer src={songPreview} /> */}
      </div>
    </div>
  )
}

export default SongTile