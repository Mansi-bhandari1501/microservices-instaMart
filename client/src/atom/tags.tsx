import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

type tagsProps={
    label : string
}

export default function Tags(props: tagsProps ) {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label={props.label} onClick={handleClick} />
      {/* <Chip label="Clickable" variant="outlined" onClick={handleClick} /> */}
    </Stack>
  );
}