import { CircularProgress, Typography } from "@mui/material";

const Loader = () => {
  return (
    <>
      <CircularProgress
        sx={{
          margin: "20px auto",
          display: "flex",
          justifyContent: "center",
        }}
      />
      <Typography variant="body1" align="center">
        Loading Data
      </Typography>
    </>
  );
};

export default Loader;
