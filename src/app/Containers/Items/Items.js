import React, { useState, useEffect } from "react";
import ItemTable from "./ItemTable";
import { Button, InputGroup, Table, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Items(props) {
  const [apiResultArray, setApiResultArray] = useState();
  const [filterDataList, setFilterDataList] = useState();
  const [page, setPage] = useState(1);

  const filterData = (e) => {
    const filterText = e.target.value;
    const filterList = filterDataList.filter((item) => {
      if (e.target.value) {
        return item.name?.toLowerCase().includes(filterText.toLowerCase());
      } else {
        return item;
      }
    });
    setApiResultArray(filterList);
  };
  useEffect(() => {
    axios
      .get(`${"https://api.punkapi.com/v2/beers?page="}${page}&per_page=10`)
      .then(
        (res) => (setApiResultArray(res.data), setFilterDataList(res.data))
      );
  }, [page]);

  return (
    <div class="p-3">
      <div class="shadow-lg p-3 mb-5 bg-white rounded">
        <div class="input-group mb-3 w-25">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => filterData(e)}
          />
        </div>
        {apiResultArray?.length > 0 ? (
          <ItemTable
            apiResultArray={apiResultArray}
            setPage={setPage}
            page={page}
          />
        ) : (
          <div class="card">
            <div class="card-header">Alert</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>Data Not Found</p>
                <footer class="blockquote-footer">
                  Check your network connection
                </footer>
              </blockquote>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Items;
