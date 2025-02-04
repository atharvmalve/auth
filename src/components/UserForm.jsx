import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from "../../slices/userSlice";
import { TextField, Button, Box, Typography } from "@mui/material";
// import { v4 as uuidv4 } from "uuid";

const UserForm = () => {
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    id: storedData.id || "",
    name: storedData.name || "",
    address: storedData.address || "",
    email: storedData.email || "",
    phone: storedData.phone || "",
  });
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes!";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveUserData(formData));
    localStorage.setItem("userData", JSON.stringify(formData));
    console.log(formData);
    setIsDirty(false);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4">User Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Save</Button>
      </form>
    </Box>
  );
};

export default UserForm;
