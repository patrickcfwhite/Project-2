import React from 'react'
import SongTile from './SongTile'


const Results = ({ data }) => {
  console.log(data, 'results')
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {data.filter(x => !!x).map((data, index) => {
            return <SongTile key={index} data={data} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Results