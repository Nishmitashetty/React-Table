import React, { useState } from "react";
import "./styles.css";
const sourceData = [
  {
    tid: 1,
    date: "2020-03-10T10:47:02-05:00",
    credit: 100,
    description: "initial deposit"
  },
  {
    tid: 2,
    check_no: 1,
    date: "2020-03-10T16:50:59Z",
    debit: 3.14,
    description: "gum",
    canceled: true
  },
  {
    tid: 3,
    check_no: 2,
    date: "2020-03-10T16:49:21-05:00",
    debit: 3.14,
    description: "gum"
  },
  {
    tid: 4,
    date: "2020-03-10T13:00:30-05:00",
    credit: 1.99,
    description: "pocket change"
  },
  {
    tid: 5,
    date: "2020-03-16T09:02:30-05:00",
    credit: 420.15,
    description: "paycheck"
  },
  {
    tid: 6,
    check_no: 3,
    date: "2020-03-16T09:02:30-05:00",
    debit: 19.15,
    description: "ConEd - March"
  },
  {
    tid: 7,
    check_no: 4,
    date: "2020-03-17T11:57:30-05:00",
    debit: 81.45,
    description: "AT&T"
  },
  {
    tid: 8,
    check_no: 5,
    date: "2020-03-17T16:02:30-05:00",
    debit: 29.03,
    description: "Ikea"
  },
  {
    tid: 9,
    date: "2020-03-23T09:02:30-05:00",
    credit: 420.13,
    description: "paycheck"
  },
  {
    tid: 10,
    check_no: 6,
    date: "2020-03-23T10:11:00-05:00",
    debit: 13.57,
    description: "More checks"
  },
  {
    tid: 11,
    check_no: 225,
    date: "2020-03-24T14:20:33-05:00",
    debit: 97.76,
    description: "Strand"
  },
  {
    tid: 12,
    check_no: 226,
    date: "2020-03-24T14:20:33-05:00",
    debit: 513.01,
    description: "Fraud",
    canceled: true
  },
  {
    tid: 13,
    check_no: 227,
    date: "2020-03-26T19:00:00-05:00",
    debit: 31.01,
    description: "IHOP"
  }
];
const entries = [0];
// formatting
const formatDefault = (x) => x.toString();

// sorting - tristate {unsorted,asc,desc}
const [DIR_NONE, DIR_ASC, DIR_DESC] = [0, 1, 2];
const sortDirClass = { 1: "sort_asc", 2: "sort_desc", 0: null };

const cmpNoop = () => 0;

// table layout
const columns = [
  {
    key: "date",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: [],
    label: "Date"
  },
  {
    key: "check_no",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: [],
    label: "No."
  },
  {
    key: "debit",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: ["currency"],
    label: "Debit"
  },
  {
    key: "credit",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: ["currency"],
    label: "Credit"
  },
  {
    key: "balance",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: ["currency", "balance"],
    label: "Balance"
  },
  {
    key: "description",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: [],
    label: "Description"
  },
  {
    key: "canceled",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: ["canceledColumn"],
    label: "Canceled?"
  }
];

function HeaderRow({ sortedField, toggleSort }) {
  return (
    <div>
      <tr>
        {columns.map((col) => (
          <th key={col.key} className={col.key}>
            <div className={"middleAlign"}>
              {col.label}

              <i className="material-icons" style={{ visibility: "hidden" }}>
                arrow_drop_down
              </i>
            </div>
          </th>
        ))}
      </tr>

      {sourceData.map((check) => (
        <tr>
          <td>{check.date}</td>
          <td>
            {check.check_no < 100 ? `00${check.check_no}` : check.check_no}
          </td>
          <td className="debit">{check.debit}</td>
          <td className="credit">{check.credit}</td>
          <td>balance</td>
          <td>{check.description}</td>
          <td className="canceled canceledColumn">
            <div className="checkboxWrapper">
              <div className="md-checkbox">
                <input
                  id={`cancelCheckbox${check.tid}`}
                  type="checkbox"
                  checked={check.canceled}
                />
                <label htmlFor={`cancelCheckbox${check.tid}`}></label>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </div>
  );
}

/* 
The associated style sheet will render the checkbox nicely with the following:
    <td className="canceled canceledColumn">
      <div className="checkboxWrapper">
        <div className="md-checkbox">
          <input id={`cancelCheckbox${check.tid}`} type="checkbox" checked={check.canceled}/>
          <label htmlFor={`cancelCheckbox${check.tid}`}></label>
        </div>
      </div>
    </td>
*/

// component to render the check book
function CheckBook() {
  const [entries, setEntries] = useState(0); // change as per usage
  const [sortedField, setSortedField] = useState({});

  const setCancel = async (tid, value) => {
    setEntries((currentEntries) => [
      ...currentEntries.slice(0, tid),
      {
        ...currentEntries[tid],
        canceled: value
      },
      ...currentEntries.slice(tid + 1)
    ]);
  };

  const toggleSort = (key, cmp) => {};

  return (
    <div className={"tableWrapper"}>
      <table>
        <thead>
          <HeaderRow sortedField={sortedField} toggleSort={toggleSort} />
        </thead>
      </table>
    </div>
  );
}

export default CheckBook;
