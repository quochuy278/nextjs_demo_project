import * as React from "react";
import Link from "next/link";
import styles from "./main-header.module.css";
import { Menu } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { signOut, useSession } from "next-auth/client";
import { Divider } from "@mui/material";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const MainHeader = () => {
  const authCtx = useContext(AuthContext)
  const [session, loading] = useSession();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutHandler = () => {
    signOut();
  };

  return (
    <header className={styles.header}>
      <div  className={styles.logo} >
        <Link href="/">NextJs Blog</Link>
      </div>

      <nav className={styles.navigation}>
        <div>
          <ul>
            <li>
              <Link href="/">All Blogs</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.formLink}>
        <ul>
          {!session && !loading && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
          {!session && !loading && (
            <li>
              <Link href="/signup">Sign up</Link>
            </li>
          )}
          {session && (
            <li>
              <Box sx={{ flexGrow: 1 }} style={{ justifyContent: "flex-end" }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "25px", mb: "10px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  keepMounted
                  style={{
                    marginTop: "0.6rem",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center"> Welcome {session.user.email}</Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link href="/myblogs">My Blogs</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link href="/profile">Profile</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={logoutHandler}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default MainHeader;
