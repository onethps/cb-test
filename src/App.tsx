import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";

import { NewsCard } from "./components/NewsCard/NewsCard";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { useFetchPosts } from "./hooks/useFetchPosts";

function App() {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const { isLoading, posts, debounceQuery } = useFetchPosts();

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSearchValue(event.target.value);
    debounceQuery(event.target.value);
  };

  return (
    <Box marginTop="50px">
      <Container maxWidth={false} sx={{ maxWidth: "1338px" }}>
        <Stack gap="10px" marginBottom="40px">
          <Typography variant="body2">Filter by keywords</Typography>
          <SearchInput
            value={searchValue}
            onChange={handleChange}
            sx={{ width: "600px" }}
          />
        </Stack>
        {isLoading ? (
          <Stack justifyContent="center" alignItems="center">
            <CircularProgress />
          </Stack>
        ) : (
          <>
            <Stack marginBottom="40px">
              <Typography variant="body2">Results: {posts.length}</Typography>
              <Divider light />
            </Stack>
            <Stack direction="row" flexWrap="wrap" gap="45px">
              {posts.map((post) => (
                <NewsCard
                  searchValue={searchValue}
                  title={post.title}
                  desc={post.description}
                  img={post.image_url}
                  key={post.uuid}
                />
              ))}
            </Stack>
          </>
        )}
      </Container>
    </Box>
  );
}

export default App;
