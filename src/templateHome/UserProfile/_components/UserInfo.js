import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import userProfileStyle from "./UserProfileStyle";

export default function UserInfo(props) {
  const classes = userProfileStyle();
  const {user}= props;
  return (
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "55%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Họ và tên"
            defaultValue={user?.hoTen}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Số điện thoại"
            defaultValue={user?.soDT}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue={user?.email}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Mật khẩu"
            type="password"
            defaultValue={user?.matKhau}
          />
        </div>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Cập nhật
        </Button>
      </Box>
    
  );
}
