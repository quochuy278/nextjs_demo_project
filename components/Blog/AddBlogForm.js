import { getSession } from "next-auth/client";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { TextareaAutosize } from "@mui/material";
import axios from "axios";
import LoadingSpinner from "../ui/loadingspinner";
import { useState, Fragment } from "react";

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
export default function AddBlogForm(props) {
  const [isLoading, setIsloading] = useState(false);

  const router = useRouter();

  if (!props.userData) {
    return <LoadingSpinner />;
  }
  console.log();
  // const {lastName, firstName, email} = props.useData.users
  console.log(props.userData);
  console.log({
    lastName: props.userData.users.lastName,
    firstName: props.userData.users.firstName,
    email: props.userData.users.email,
  });
  const { lastName, firstName, email } = props.userData.users;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const enteredTitle = data.get("title");
    const enteredBlog = data.get("blog");

    const date = new Date();

    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    console.log(humanReadableDate);
    axios({
      method: "post",
      url: `http://localhost:3000/api/blogs`,
      data: {
        title: enteredTitle,
        blog: enteredBlog,
        lastName: lastName,
        firstName: firstName,
        author: email,
        lastModifed: humanReadableDate,
      },
    })
      .then((res) => {
        console.log(res.data);
        const { message } = res.data;
        console.log(message);
        setIsloading(true);
        if (message == "Created blog!") {
          router.replace("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
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
                  fullwidth="true"
                  id="blog"
                  label="Blog"
                  name="blog"
                  placeholder="Your Blog Here"
                  autoFocus
                  style={{
                    width: "30rem",
                    marginTop: "10px",
                    height: "40rem",
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
      )}
    </Fragment>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};
