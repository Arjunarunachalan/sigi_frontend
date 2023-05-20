// import React from "react";

// const Table = () => {
//   const headerdata = [
//     {
//       header: "Name",
//     },
//     {
//       header: "Description",
//     },
//   ];

//   const data = [{ Name: "Arjun" }, { Description: "good boy" }];

//   return (
//     <div>
//       <table>
//         {headerdata.map((data) => {
//           <th>{data.header}</th>;
//         })}
//         {data.map((tabledata) => {
//           <tr>
//             {Object.keys(
//               tabledata.map((tddata) => {
//                 <td>{tddata[key]}</td>;
//               })
//             )}
//           </tr>;
//         })}
//       </table>
//     </div>
//   );
// };

// export default Table;
import React from "react";

const Table = () => {
  const headerdata = [
    {
      header: "Name",
    },
    {
      header: "Description",
    },
    {
      header: "Age",
    },
  ];

  const data = [{ Name: "Arjun", Description: "good boy",Age:22 }];

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headerdata.map((data) => (
              <th key={data.header}>{data.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((tabledata) => (
            <tr key={tabledata.Name}>
              {Object.keys(tabledata).map((key) => (
                <td key={key}>{tabledata[key]}</td>
              ))
              }
            </tr>
          ))}
        
        </tbody>
      </table>
    </div>
  );
};

export default Table;
