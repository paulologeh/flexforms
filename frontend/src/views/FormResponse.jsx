import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { getFormResponse } from "services";
import { NotFound } from "navigation/NotFound";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const FormResponse = () => {
  const [data, setData] = useState(null);
  const [headers, setHeaders] = useState([]);
  const [rowData, setRowData] = useState([]);
  const query = useQuery();

  useEffect(() => {
    async function fetchFormData() {
      let uuid = query.get("uuid");
      let response;
      try {
        response = await getFormResponse(uuid);
      } catch (e) {
        console.error(e);
        return;
      }
      setData(response.data.data);
    }
    fetchFormData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let formKeys = getKeys(data);
    setHeaders(formKeys);
    let formRows = getRowsData(data, formKeys);
    setRowData(formRows);
  }, [data]);

  const getKeys = (data) => {
    if (!data) return;
    let keys = [];
    for (let i = 0; i < data.length; i++) {
      for (const key in data[i].data) {
        if (keys.includes(key)) {
          continue;
        }
        keys.push(key);
      }
    }
    return keys;
  };

  const getRowsData = (data, keys) => {
    if (!data) return;
    if (!keys) return;
    let rows = [];
    for (let i = 0; i < data.length; i++) {
      let cols = [];

      for (const key in keys.sort()) {
        if (keys[key] in data[i].data) {
          cols.push(data[i].data[keys[key]].toString());
        } else {
          cols.push(" ");
        }
      }
      rows.push(cols);
    }
    return rows;
  };

  const renderTableRow = (row) => {
    return (
      <Table.Row>
        {row.map((val, i) => (
          <Table.Cell key={i}>{val}</Table.Cell>
        ))}
      </Table.Row>
    );
  };

  return (
    <div>
      {!data && <NotFound />}
      <Table celled compact>
        <Table.Header>
          <Table.Row>
            {headers &&
              headers.map((val, i) => (
                <Table.HeaderCell key={i}>{i}</Table.HeaderCell>
              ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rowData && rowData.map((rows) => renderTableRow(rows))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default FormResponse;
