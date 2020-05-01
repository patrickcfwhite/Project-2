import React, { useState } from 'react'


const SongTile = ({ data }) => {

  const [ hovered, setHovered ] = useState(false)
  const [ clicked, setClicked ] = useState(false)
  const toggleHover = () => setHovered(!hovered)
  const toggleClicked = () => setClicked(!clicked)

  const handleClick = () => {
    toggleClicked()
  }

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
      </div>
    </div>
  )
}

export default SongTile