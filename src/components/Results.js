import React from 'react'
import SongTile from './SongTile'


const Results = () => {
  const songPairs = [['Artist 1', 'Song 1'],['Artist 2', 'Song 2'],['Artist 3','Song 3']]
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {songPairs.map((x, index) => {
            return (
              // <SongTile key={index} search={x}/>
              <h2 key={index}>{x}</h2>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Results