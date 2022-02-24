import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { signIn } from "next-auth/client";
import { TextareaAutosize } from "@mui/material";
import { height } from "@mui/system";

const theme = createTheme();
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#d29681",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#efcfd0",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#d29681",
    },
  },
});

const CssTextareaAutosize = styled(TextareaAutosize)({
    "& label.Mui-focused": {
      color: "#d29681",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#efcfd0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#d29681",
      },
    },
  });

const stylesColor = { color: "#d29681" };
export default function AddBlog() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const enteredTitle = data.get("title");
    const enteredBlog = data.get("blog");
    console.log(enteredTitle, enteredBlog)
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ m: 1 }}
            style={{
              backgroundColor: "#d29681",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            style={{
              color: "#057389",
            }}
          >
           Add Your Blog Here
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
            />
             <CssTextareaAutosize
              margin="normal"
              required
              fullWidth
              id="blog"
              label="Blog"
              name="blog"
             placeholder="Your Blog Here"
              autoFocus
              style={{
                width: "30rem",
                marginTop: '10px',
                height: '40rem'
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: "#d29681",
                color: "#057389",
              }}
            >
              Add Blog
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
