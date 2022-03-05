import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


import userProfileStyle from "./UserProfileStyle";

export default function UserInfo() {
  const classes = userProfileStyle();

  return (
    <div>
            <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Họ và tên"
            defaultValue="Nguyen Lam"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Số điện thoại"
            defaultValue="098765789"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue="nguyenlam@gmail.com"
          />
        </div>

        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Cập nhật
        </Button>
      </Box>
    </div>
  );
}
