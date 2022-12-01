import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { useEffect, useState } from "react";
import {
  Alert,
  Avatar,
  IconButton,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import DeleteIcon from "@mui/icons-material/Delete";

const FirstThreeClass = () => {
  const [submitting, setSubmitting] = useState(false);
  const [rating, setRating] = useState(2);

  console.log("rating", rating);
  useEffect(() => {
    const id = setTimeout(() => {
      setSubmitting(false);
    }, 1000);

    return () => clearTimeout(id);
  }, [submitting]);
  return (
    <div
      style={{
        backgroundColor: "#f7f7f7",
        width: "400px",
        height: "auto",
        borderRadius: "1rem",
        padding: "2rem",
      }}
      className="app"
    >
      <Button
        sx={{
          mb: 2,
        }}
        variant="contained"
        color="secondary"
        fullWidth
      >
        Hello
      </Button>
      <LoadingButton
        onClick={() => setSubmitting(true)}
        loading={submitting}
        variant="contained"
      >
        Fetch Data
      </LoadingButton>
      {!submitting && (
        <Typography variant="h4" component="h1" sx={{ mt: 2 }}>
          Hello
        </Typography>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Avatar
          sx={{ height: "100px", width: "100px" }}
          alt=""
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Typography variant="h4" component="h1" sx={{ mt: 2 }}>
          Tajwar Saiyeed
        </Typography>
      </div>

      {/* icon button */}
      <GitHubIcon color="primary" />
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>

      {/* rating */}
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        sx={{ color: "#f50057" }}
      />

      {/* text field */}
      <TextField
        id="outlined-basic"
        helperText="Invalid Name"
        label="Name"
        variant="outlined"
        error={true}
      />
      {/* ALERT */}
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </div>
  );
};

export default FirstThreeClass;
