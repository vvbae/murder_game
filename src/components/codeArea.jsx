import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeArea({ code }) {
  return (
    <SyntaxHighlighter language="sql" style={dracula}>
      {code}
    </SyntaxHighlighter>
  );
}