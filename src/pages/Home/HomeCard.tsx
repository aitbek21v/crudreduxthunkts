import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { deleteProduct } from "../../asyncfunctions";
import { useNavigate } from "react-router-dom";

export default function HomeCard({ el }: any) {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const removeProduct = (id:any) => {
        dispatch(deleteProduct(id))
    }
  return (
    <Card
      sx={{
        width: 400,
        height: 450,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        margin: "20px 0",
      }}
    >
      <CardMedia sx={{ height: 200 }} image={el.image} title="green iguana" />
      <CardContent>
        <Box
          sx={{
            width: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {el.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {el.age}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            width: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button size="small" onClick={() => navigate(`/edit/${el.id}`)}>Edit</Button>
          <Button size="small" onClick={() => removeProduct(el.id)}>Delete</Button>
        </Box>
      </CardActions>
    </Card>
  );
}
