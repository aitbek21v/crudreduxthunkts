import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IValues } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { editProduct, getOneProduct } from "../../asyncfunctions";
import { useParams } from "react-router-dom";

const Edit: React.FC = () => {
  const [values, setValues] = useState<IValues>({
    name: "",
    age: "",
    image: "",
  });
  const { id }: any = useParams();
  const { oneProduct } = useAppSelector((s) => s);
  const dispatch = useAppDispatch();

  function handleChangeSave() {
    dispatch(editProduct(values, id));
  }
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setValues({
        ...values,
        name: oneProduct.name,
        age: oneProduct.age,
        image: oneProduct.image,
      });
    }
  }, [oneProduct]);
  return (
    <Box sx={{ padding: "50px,0" }}>
      <div className="container">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "70vh",
              gap: "50px",
            }}
          >
            <TextField
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              sx={{ width: "100%", height: "40px" }}
              id="standard-basic"
              label="name"
              variant="standard"
              value={values.name}
            />
            <TextField
              onChange={(e: any) =>
                setValues({ ...values, age: e.target.value })
              }
              sx={{ width: "100%", height: "40px" }}
              id="standard-basic"
              label="age"
              variant="standard"
              value={values.age}
            />
            <TextField
              onChange={(e) => setValues({ ...values, image: e.target.value })}
              sx={{ width: "100%", height: "40px" }}
              id="standard-basic"
              label="URL"
              variant="standard"
              value={values.image}
            />
            <Button
              onClick={() => handleChangeSave()}
              sx={{ width: "100%", height: "40px" }}
              variant="contained"
            >
              Edit
            </Button>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Edit;
