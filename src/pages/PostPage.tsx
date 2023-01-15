import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Link } from "react-router-dom";

import { useFetchPost } from "../hooks/useFetchPost";

export const PostPage = () => {
  const { postId } = useParams();

  const { post, isLoading } = useFetchPost(postId);

  if (isLoading) {
    return (
      <Box>
        <Container>
          <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
            <CircularProgress />
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${post?.image_url})`,
          backgroundSize: "cover",
          width: "100vw",
          height: "245px",
          color: "#f5f5f5",
          position: "absolute",
          top: "0",
        }}
      ></Box>
      <Container sx={{ minHeight: "100vh" }}>
        <Paper
          elevation={0}
          sx={{
            border:'1px solid #EAEAEA',
            boxShadow:'0px 8px 24px rgba(0, 0, 0, 0.05)',
            padding: "35px 75px",
            position: "relative",
            marginTop: "135px",
          }}
        >
          {/* В api нету контента, который можно сфетчить - потому отобразил что есть. */}
          <Typography marginBottom="50px" variant="h5" textAlign="center">
            {post?.title}
          </Typography>
          <Stack gap="20px" sx={{ height: "100vh" }}>
            <Typography variant="subtitle1">
              Description: {post?.description}
            </Typography>
            <Typography
              sx={{ height: "100vh" }}
              variant="subtitle1"
            >
              Snippet: {post?.snippet}
            </Typography>
          </Stack>
        </Paper>

        <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
          <Button
            sx={{ marginY: "35px", textTransform: "none", color: "black" }}
            startIcon={<ArrowBackIcon />}
          >
            <Typography fontWeight="700">Back to homepage</Typography>
          </Button>
        </Link>
      </Container>
    </>
  );
};
