import React, { useEffect, useState } from "react";

// type RowPropsType = {
//   row: object;
// };

const ScoreTable = () => {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/score-table/get-score-table")
      .then((res) => res.json())
      .then((answer) => {
        const { score_table } = answer.data;

        setTableData(score_table);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
  }, []);

  function Row({ row }: any) {
    const { id, name, win, round, loose } = row;

    return (
      <React.Fragment>

      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{round}</td>
        <td>{win}</td>
        <td>{loose}</td>
      </tr>
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{round}</td>
        <td>{win}</td>
        <td>{loose}</td>
      </tr>
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{round}</td>
        <td>{win}</td>
        <td>{loose}</td>
      </tr>

      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{round}</td>
        <td>{win}</td>
        <td>{loose}</td>
      </tr>
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{round}</td>
        <td>{win}</td>
        <td>{loose}</td>
      </tr>

      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{round}</td>
        <td>{win}</td>
        <td>{loose}</td>
      </tr>
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{round}</td>
        <td>{win}</td>
        <td>{loose}</td>
      </tr>
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{round}</td>
        <td>{win}</td>
        <td>{loose}</td>
      </tr>
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{round}</td>
        <td>{win}</td>
        <td>{loose}</td>
      </tr>
      
      </React.Fragment>
    );
  }

  return (
    <div style={{overflowY: 'scroll', padding: '20px'}}>

    <table className="table table-striped table-dark" style={{overflow: 'scroll'}}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Rounds</th>
          <th scope="col">Win</th>
          <th scope="col">Loose</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <Row key={index} row={row} />
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ScoreTable;
