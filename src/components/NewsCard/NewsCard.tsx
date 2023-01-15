import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import Highlighter from "react-highlight-words";

interface NewsCardProps {
  title:string
  desc:string
  img:string
  searchValue:string
}


export const NewsCard:React.FC<NewsCardProps> = ({title, desc, img, searchValue}) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="217"
          image={img}
          alt="card-img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Highlighter
              searchWords={searchValue.split(" ")}
              autoEscape={true}
              textToHighlight={title}
            />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Highlighter
              searchWords={searchValue.split(" ")}
              autoEscape={true}
              textToHighlight={desc}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};