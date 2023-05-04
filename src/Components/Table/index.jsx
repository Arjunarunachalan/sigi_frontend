import React from 'react'


const Table = ({ data = null, header, className }) => {
  const getTd = (key, row) => {
    let tableheader = header.find(header => header.accesor === key)
    console.log(tableheader)
    if (typeof tableheader.render == "function") {
      return tableheader.render(row)
    }
    return row[key]
  }

  const prepareRow =( row )=>{
    let newRow ={};
    header.forEach((head)=>{
      const {accesor} = head;
      let rowKeys = Object.keys(row);
      if(rowKeys.includes(accesor)){
        newRow[accesor] = row[accesor];
      }
    })
    return newRow;
  }
  
  return (
    <>
      <table className={className}>
        <thead>
          <tr>
            {data && header.map((row) => {
              return (
                <th>{row.header}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((rowData) => {
              let row = prepareRow(rowData)
              return (
                <tr key={row.id}>
                  {Object.keys(row).map(key => {
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
