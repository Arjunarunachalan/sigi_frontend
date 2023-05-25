import React, { useEffect, useState } from 'react'

const Table = ({ data, header, className, actionButton }) => {

  const [tableRow, setTableRow] = useState([])
  useEffect(()=>{
    setTableRow(data)
  },[data])
  const getTd = (key, row) => {
    let tableheader = header.find(header => header.accesor === key)

    if (typeof tableheader.render == "function") {
      return tableheader.render(row)
    }
    return row[key]

  }

  const prepareRow = (row) => {
    let newRow = {};
    header.forEach((head) => {
      const { accesor } = head;
      let rowKeys = Object.keys(row);
      if (rowKeys.includes(accesor)) {
        newRow[accesor] = row[accesor];
      }
    })
    return newRow;
  }
  return (
    <>
      <div className='pb-4'>
        {actionButton && actionButton.map((item, index) => {
          return (
            <button type={item.type} name={item.name} id={item.id} onClick={item.onClick} key={index} className={item.className}>{item.name}</button>
          )
        })}
      </div>

      <table className={className}>
        <thead>
          <tr>
            {data && header.map((row, index) => {
              return (
                <th key={index}>{row.header}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {
            tableRow.map((rowData, index) => {
              let row = prepareRow(rowData)
              return (
                <tr key={index}>
                  {Object.keys(row).map((key,index) => {
                    return (
                      <td key={index}>{getTd(key, row)}</td>
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
