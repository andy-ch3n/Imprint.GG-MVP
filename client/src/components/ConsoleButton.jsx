import React, { useState, useEffect } from 'react'
import { Container, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'

const ConsoleButton = ({radValue, setRadio}) => {
  const [checked, setChecked] = useState(false);

  const radios = [
    { name: 'Origin', value: 'origin' },
    { name: 'PSN', value: 'psn' },
    { name: 'Xbox', value: 'xbox' },
  ];

  return (
    <>
      <ButtonGroup className="mb-2 mt-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            className="mt-2"
            value={radio.value}
            checked={radValue === radio.value}
            onChange={(e) => setRadio(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <br />
    </>
  );
}



export default ConsoleButton