const Table = ({ data }: any) => {
  // data = [
  //     { id: 1, name: 'John Doe', age: 25, city: 'New York' },
  //     { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco' },
  //     { id: 3, name: 'Bob Johnson', age: 28, city: 'Los Angeles' },
  // ];
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <table>
      <thead>
        {/* <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr> */}
      </thead>
      <tbody>
        {data.map((item: any, index: any) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>
                {header === "superscript" ? (
                  <span>
                    {item[header].charAt(0)}
                    <sup>{item[header].charAt(1)}</sup>
                    {item[header].slice(2)}
                  </span>
                ) : (
                  item[header]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
