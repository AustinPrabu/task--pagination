import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function ItemTable(props) {
  const [tableData, setTableData] = useState(
    props.apiResultArray && props.apiResultArray
  );

  const next = () => {
    if (!props.apiResultArray.length == 0) {
      props.setPage(props.page + 1);
    }
  };
  const previous = () => {
    if (props.page > 1) {
      props.setPage(props.page - 1);
    }
  };

  useEffect(() => {
    setTableData(props.apiResultArray && props.apiResultArray);
  }, [props.apiResultArray]);
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Name</th>
            <th scope="col">Contributed By</th>
            <th scope="col">First Brewed</th>
            <th scope="col">Target FG</th>
            <th scope="col">Target OG</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.contributed_by}</td>
                <td>{item.first_brewed}</td>
                <td>{item.target_fg}</td>
                <td>{item.target_og}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{
          padding: "20px 20px 20px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          class="btn btn-primary"
          type="submit"
          onClick={() => previous()}
        >
          Previous
        </button>
        <h6>Showing 10 records of the page {props.page}</h6>
        <button class="btn btn-primary" type="submit" onClick={() => next()}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ItemTable;
