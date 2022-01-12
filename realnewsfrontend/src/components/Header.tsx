import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

// interface HeaderProps {
//   sections: ReadonlyArray<{
//     title: string;
//     url: string;
//   }>;
//   title: string;
// }

export default function Header() {


  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Link to={`/posts`}>
        <Button size="small">Home</Button>
        </Link>
        <Button size="small">My Profile</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Real News
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Link to="/signUp">
        <Button variant="outlined" size="small">
          Sign up
        </Button>
        </Link>
        <Link to="/signIn">
        <Button variant="outlined" size="small">
          Sign in
        </Button>
        </Link>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
      </Toolbar>
    </React.Fragment>
  );
}
