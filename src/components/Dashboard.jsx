import Counter from "./Counter";
import UserForm from "./UserForm";
import RichTextEditor from "./RichTextEditor";
import { Box, Grid, Paper } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // Prevent scrolling
      }}
    >
      {/* Top Section (Counter and Editor) */}
      <Box
        sx={{
          height: "50%", // Fixed half height
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: 2,
        }}
      >
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {/* Counter - Top Left */}
          <Grid item xs={6}>
            <Paper
              sx={{
                padding: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50%", // Fixed height
                overflow: "hidden",
              }}
            >
              <Counter />
            </Paper>
          </Grid>

          {/* Rich Text Editor - Top Right */}
          <Grid item xs={6}>
            <Paper
              sx={{
                padding: 2,
                height: "50%", // Fixed height
                overflow: "hidden",
              }}
            >
              <RichTextEditor />
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Section (User Form) */}
      <Box
        sx={{
          height: "50%", // Fixed half height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {/* User Form */}
          <Grid item xs={12}>
            <Paper
              sx={{
                padding: 2,
                minWidth: "300px",
                maxWidth: "100%",
                height: "100%", // Fixed height
                overflow: "hidden",
              }}
            >
              <UserForm />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
