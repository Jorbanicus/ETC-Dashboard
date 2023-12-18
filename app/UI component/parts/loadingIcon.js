import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingIcon() {
  return (
    <div>
      <div className='flex flex-start whitespace-nowrap text-[#FFA500] text-sm'>
      <img className='mr-1' src='/lastrefreshedclock.svg' />
        <div className='pr-1'>Live Status:</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="success" />
        </Stack>
      </div>
    </div>
  );
}