import React, { useEffect, useState } from "react";
import ResultsTable from "./resultsTable";

/**
 * A simple SQL read-eval-print-loop
 * @param {{db: import("sql.js").Database}} props
 */
export default function SQLRepl({ db, sql }) {
    const [error, setError] = useState(null);
    const [results, setResults] = useState([]);
    let isValid = true;
  
    function exec(sql) {      
      try {
        // The sql is executed synchronously on the UI thread.
        // You may want to use a web worker here instead
        setResults(db.exec(sql)); // an array of objects is returned
        setError(null);
      } catch (err) {
        // exec throws an error when the SQL statement is invalid
        setError(err);
        setResults([]);
      }
    }

    useEffect(() => {
      const commands = sql.split(' ');
      commands.map(command => command.toLowerCase());
      isValid = commands.includes("select");

      console.log(isValid);
      if (isValid) exec(sql);
      else setError("Invalid command.");
    }, []);

    if (error) return <pre className="error">{(error || "").toString()}</pre>;
    else return <>
      {
        // results contains one object per select statement in the query
        results.map(({ columns, values }, i) => (
          <ResultsTable key={i} columns={columns} values={values} />
        ))
      }
    </>;
}