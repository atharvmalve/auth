// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../../slices/CounterSlice";
// import { motion } from "react-spring";
import { Button, Box, Typography } from "@mui/material";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: `linear-gradient(to top, #1976d2 ${count}%, #fff 0%)`,
        transition: "background 0.5s ease-in-out",
      }}
    >
      <Typography variant="h3" gutterBottom>Counter: {count}</Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" onClick={() => dispatch(increment())}>Increment</Button>
        <Button variant="contained" onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button variant="contained" color="secondary" onClick={() => dispatch(reset())}>Reset</Button>
      </Box>
    </Box>
  );
};

export default Counter;