
import "./styles.css";
const sourceData = [
  {
    tid: 1,
    date: "2020-04-10T10:47:02-05:00",
    credit: 200,
    description: "initial deposit"
  },
  {
    tid: 2,
    check_no: 1,
    date: "2020-06-10T16:50:59Z",
    debit: 3.04,
    description: "bubble",
    canceled: true
  },
  {
    tid: 3,
    check_no: 2,
    date: "2020-08-10T16:49:21-05:00",
    debit: 3.24,
    description: "computer repair"
  },
  {
    tid: 4,
    date: "2020-09-10T13:00:30-05:00",
    credit: 3.44,
    description: "wedding gift"
  },
  {
    tid: 5,
    date: "2020-02-16T09:02:30-05:00",
    credit: 420.15,
    description: "pay"
  },
  {
    tid: 6,
    check_no: 3,
    date: "2020-03-16T09:02:30-05:00",
    debit: 19.15,
    description: "March"
  },
  {
    tid: 7,
    check_no: 4,
    date: "2020-03-17T11:57:30-05:00",
    debit: 81.45,
    description: "LT"
  },
  {
    tid: 8,
    check_no: 5,
    date: "2020-06-17T16:02:30-05:00",
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
    description: "haircut"
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
    description: "got"
  }
];

const columns = [
  {
    key: "date",
    label: "Date"
  },
  {
    key: "check_no",
    label: "No."
  },
  {
    key: "debit",
    label: "Debit"
  },
  {
    key: "credit",
    label: "Credit"
  },
  {
    key: "balance",
    label: "Balance"
  },
  {
    key: "description",
    label: "Description"
  },
  {
    key: "canceled",
    label: "Canceled?"
  }
];

function HeaderRow() {
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

function CheckBook() {

  return (
    <div className={"tableWrapper"}>
      <table>
        <thead>
          <HeaderRow  />
        </thead>
      </table>
    </div>
  );
}

export default CheckBook;
