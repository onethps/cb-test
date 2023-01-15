import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Highlighter from "react-highlight-words";
import { Stack } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import NoPhoto from "../../assets/no-photo.jpg";

import { ReactComponent as CalendarIcon } from "../../assets/akar-icons_calendar.svg";
dayjs.extend(advancedFormat);
interface NewsCardProps {
  title: string;
  desc: string;
  img: string;
  searchValue: string;
  uuid: string;
  date: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  desc,
  date,
  img,
  uuid,
  searchValue,
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: 400,
        border: "1px solid #EAEAEA",
        boxShadow: "1px 8px 24px rgba(0, 0, 0, 0.05)",
      }}
    >
      <CardActionArea component={RouterLink} to={`${uuid}`}>
        <CardMedia
          component="img"
          height="217"
          image={img || NoPhoto}
          alt="card-img"
        />
        <CardContent>
          <Stack direction="row" alignItems="stretch" gap="8px" marginY="25px">
            <CalendarIcon />
            <Typography
              sx={{ fontSize: "14px", fontWeight: "300" }}
              color="text.secondary"
            >
              {dayjs(date).format("MMMM Do, YYYY")}
            </Typography>
          </Stack>
          <Stack gap="20px">
            <Typography
              sx={{
                minHeight: "64px",
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
              gutterBottom
              variant="h5"
              component="div"
            >
              <Highlighter
                searchWords={searchValue.split(" ")}
                autoEscape={true}
                textToHighlight={title}
              />
            </Typography>
            <Typography minHeight="91px" variant="body1" color="text.secondary">
              <Highlighter
                searchWords={searchValue.split(" ")}
                autoEscape={true}
                textToHighlight={desc}
              />
            </Typography>
            <Stack
              sx={{ flex: "1 1 auto", alignItems: "end" }}
              direction="row"
              alignItems="center"
              gap="6px"
            >
              <Typography fontWeight="700">Read More</Typography>
              <ArrowForwardIcon fontSize="small" />
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
