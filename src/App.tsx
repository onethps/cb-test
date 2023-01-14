import { Box, Container, Divider, Stack, Typography } from '@mui/material';

import React from 'react';

import { NewsCard } from './components/NewsCard/NewsCard';
import { SearchInput } from './components/SearchInput/SearchInput';


function App() {
  return <Box marginTop="50px">
    <Container maxWidth={false} sx={{maxWidth:'1338px'}}>
      <Stack gap="10px"  marginBottom="40px">
        <Typography variant="body2">Filter by keywords</Typography>
        <SearchInput sx={{width:'600px'}}/>
      </Stack>
      <Stack marginBottom="40px">
        <Typography variant="body2" >Results: 6</Typography>
        <Divider light />
      </Stack>
      <Stack direction="row" flexWrap="wrap" gap="45px">
        {[...new Array(10)].map(el => <NewsCard key={el}/>)}
      </Stack>
    </Container>
  </Box>;
}


export default App;
