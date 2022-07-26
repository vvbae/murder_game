// import React, { useEffect, useState } from 'react';
// import Terminal, { ColorMode } from 'react-terminal-ui';
// import SQLRepl from "../components/sqlRepl";
// import CodeArea from '../components/codeArea';
// import "../styles/main.css";

// export default function Main({ db }) {
//     const [lineData, setLineData] = useState([]);
//     const [sql, setSql] = useState("");
//     let response;

//     function onInput(input) {
//         let ld = [...lineData];
//         ld.push(<CodeArea code={input}></CodeArea>);
//         if (input.toLocaleLowerCase().trim() === 'help') {
//             window.open('https://github.com/vvbae/murder_game.git', '_blank');
//         } else if (input.toLocaleLowerCase().trim() === 'clear') {
//             ld = [];
//         } else if (input) {
//             if (input.slice(-1) === ";") {
//                 if (sql !== "") {
//                     const completedSql = sql+" "+input;
//                     response = <SQLRepl db={db} sql={completedSql}></SQLRepl>;
//                 } else {
//                     response = <SQLRepl db={db} sql={input}></SQLRepl>;
//                 }
//                 ld.push(response);
//                 setSql("");
//             } else {
//                 setSql(sql + " " + input);
//             }
//         }
//         setLineData(ld);
//     }

//     useEffect(() => {
//         console.log(lineData);
//     }, [lineData]);

//     return (
//         <div className="container">
//             <Terminal 
//                 colorMode={ ColorMode.Dark }  
//                 onInput={ onInput }
//                 prompt=">"
//             >
//                 { lineData }
//             </Terminal>
//         </div>
//     )
// };