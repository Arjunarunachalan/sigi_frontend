import React from 'react'
import './Table.css'


const Table = ({ data = null, header, className }) => {
  const getTd = (key, row) => {
    let tableheader = header.find(header => header.accesor === key)
    console.log(tableheader)
    if (typeof tableheader.render == "function") {
      return (
        <td>{tableheader.render(row)}</td>
      )
    }
    return (
      <td>{row[key]}</td>
    )
  }

  return (
    <>
      <table className={className}>
        <thead>
          <tr className='border-solid- border-b-4 '>
            {data && header.map((row) => {
              return (
                <th>{row.header}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row) => {
              return (
                <tr key={row.id} className='border-gray-50 border-solid border-b-2 border-light-gray-300'>
                  {Object.keys(row).map(key => {
                    let value = row[key]
                    console.log(value)
                    return (
                      <td>{getTd(key, row)}</td>
                    )
                  })}
                </tr>
              )
            })}
        </tbody>

      </table>
      <div>
        {data ? null : <p>No products to display</p>}
      </div>
    </>
  )
}

export default Table
