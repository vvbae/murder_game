import React, { useState, useEffect } from "react";
import SideBar from "../pages/sideBar";
// import SQLRepl from "../components/sqlRepl";
import { getDbData } from "../services/services";
import initSqlJs from "sql.js";

// Required to let webpack 4 know it needs to copy the wasm file to our assets
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";

export default function InitDb() {
    const [db, setDb] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        // sql.js needs to fetch its wasm file, so we cannot immediately instantiate the database
        // without any configuration, initSqlJs will fetch the wasm files directly from the same path as the js
        // see ../craco.config.js
        async function fetchData() {
            const dbName = "murderGame.db";
            try {
                const SQL = await initSqlJs({ locateFile: () => sqlWasm });
                getDbData(dbName)
                .then(data => setDb(new SQL.Database(new Uint8Array(data))));
            } catch (err) {
                setError(err);
            }
        }
        fetchData();
    }, []);

    if (error) return <pre>{error.toString()}</pre>;
    else if (!db) return <pre>Loading...</pre>;
    else return <SideBar db={db} />;
}