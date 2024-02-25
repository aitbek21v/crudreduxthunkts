import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { IProduct, IValues } from "../../types";
import { addProduct } from "../../asyncfunctions";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../hooks";

const Admin: React.FC = () => {
  const [values, setValues] = useState<IValues>({
    name: "",
    age: "",
    image: "",
  });

  const dispatch = useAppDispatch()

  const handleSave = () => {
   dispatch( addProduct(values))
  };
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
            />
            <TextField
              onChange={(e:any) => setValues({ ...values, age: e.target.value })}
              sx={{ width: "100%", height: "40px" }}
              id="standard-basic"
              label="age"
              variant="standard"
            />
            <TextField
              onChange={(e) => setValues({ ...values, image: e.target.value })}
              sx={{ width: "100%", height: "40px" }}
              id="standard-basic"
              label="URL"
              variant="standard"
            />
            <Button
              onClick={handleSave}
              sx={{ width: "100%", height: "40px" }}
              variant="contained"
            >
              Create
            </Button>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Admin;
