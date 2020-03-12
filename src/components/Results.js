import React from 'react'
import SongTile from './SongTile'


const Results = ({ data }) => {
  
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {data.map((data, index) => {
            return (
              <SongTile key={index} data={data}/>
              // <h2 key={index}>{x}</h2>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Results