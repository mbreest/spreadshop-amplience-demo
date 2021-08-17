import React from 'react';

const Table = ({ tableData }) => {
  return (
    <div className="w-full overflow-x-scroll ">
      <table className="border border-gray-300 p-2 mt-3 mb-3">
        <tr>
          {tableData &&
            tableData[0].map(function (column, idx) {
              return (
                <th className="border border-gray-300 p-2" key={'header-' + idx}>
                  {column}
                </th>
              );
            })}
        </tr>
        {tableData &&
          tableData.slice(1).map(function (row, idx) {
            return (
              <tr key={'rows-' + idx} className={idx % 2 == 0 ? 'bg-gray-100' : ''}>
                {row &&
                  row.map(function (column, idx1) {
                    return (
                      <td key={'column-' + idx} className="border border-gray-300 p-2">
                        {column}
                      </td>
                    );
                  })}
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default Table;
