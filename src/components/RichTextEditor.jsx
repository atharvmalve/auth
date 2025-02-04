import  { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { updateUser, saveUserData } from "../../slices/userSlice";
import { Button, Typography } from "@mui/material";

const RichTextEditor = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [editorContent, setEditorContent] = useState("");

  useEffect(() => {
    if (currentUser) {
      setEditorContent(currentUser.description || "");
    }
  }, [currentUser]);

  const handleChange = (content) => {
    setEditorContent(content);
    if (currentUser) {
      dispatch(updateUser({ id: currentUser.id, description: content }));
    }
  };

  const handleSave = () => {
    dispatch(saveUserData());
    alert("User data saved!");
  };

  return (
    <div>
      <Typography variant="h4">User Form</Typography>
      <ReactQuill value={editorContent} onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default RichTextEditor;