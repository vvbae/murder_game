import React from 'react';
import Collapsible from 'react-collapsible';
import "../styles/collapse.css";

export default function Collapse({ title, item_to_display }) {

  return (
    <Collapsible trigger={title}>
        { item_to_display }
    </Collapsible>
  )
}