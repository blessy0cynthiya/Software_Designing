
import React from 'react';
import { useAuth } from '../context/AuthContext';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Navbar = (props) => {
  const { window } = props;
  const { isAuthenticated, currentUser, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'white' }}>
        <i>🧸 Toy Topia 🧸</i>
      </Typography>
      <List>
        {['Home', 'About', 'Contact'].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} sx={{ color: 'white' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'white' }}
          >
            <i>Toy Topia</i>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
            <Link to="/" className="nav-item" style={{ color: 'white' }}>Home</Link>
            <Link to="/about" className="nav-item" style={{ color: 'white' }}>About</Link>
            <Link to="/contact" className="nav-item" style={{ color: 'white' }}>Contact</Link>
            {isAuthenticated && currentUser?.role === 'admin' && (
              <Link to="/admin-dashboard" className="nav-item" style={{ color: 'white' }}>Admin Dashboard</Link>
            )}
            {isAuthenticated && currentUser?.role === 'user' && (
              <Link to="/user-dashboard" className="nav-item" style={{ color: 'white' }}>User Dashboard</Link>
            )}
          </Box>
          <CartIcon sx={{ color: 'white' }} />
          {isAuthenticated ? (
            <Button color="inherit" onClick={logout} className="nav-item nav-button" sx={{ color: 'white' }}>Logout</Button>
          ) : (
            <Link to="/login" className="nav-item nav-button" style={{ color: 'white' }}>
              <Button color="inherit" sx={{ color: 'white' }}>Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: 'black' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;










// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import CartIcon from './CartIcon';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';

// const Navbar = (props) => {
//   const { window } = props;
//   const { isAuthenticated, logout } = useAuth();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         TOYS STORE
//       </Typography>
//       <List>
//         {['Home', 'About', 'Contact'].map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             TOYS STORE
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
//   <Link to="/" className="nav-item">Home</Link>
//   <Link to="/about" className="nav-item">About</Link>
//   <Link to="/contact" className="nav-item">Contact</Link>
// </Box>

//           <CartIcon />
//           {isAuthenticated ? (
//         <Button color="inherit" onClick={logout} className="nav-item nav-button">Logout</Button>
//       ) : (
//         <Link to="/login"  className="nav-item nav-button">
//           <Button color="inherit" >Login</Button>
//         </Link>
//       )}
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// };



// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import CartIcon from './CartIcon';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';

// const Navbar = (props) => {
//   const { window } = props;
//   const { isAuthenticated, logout } = useAuth();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         TOYS STORE
//       </Typography>
//       <List>
//         {['Home', 'About', 'Contact'].map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             TOYS STORE
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
//   <Link to="/" className="nav-item">Home</Link>
//   <Link to="/about" className="nav-item">About</Link>
//   <Link to="/contact" className="nav-item">Contact</Link>
// </Box>

//           <CartIcon />
//           {isAuthenticated ? (
//         <Button color="inherit" onClick={logout} className="nav-item nav-button">Logout</Button>
//       ) : (
//         <Link to="/login"  className="nav-item nav-button">
//           <Button color="inherit" >Login</Button>
//         </Link>
//       )}
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// };

// export default Navbar;



// src/components/Navbar.jsx
// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import CartIcon from './CartIcon';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';

// const Navbar = (props) => {
//   const { window } = props;
//   const { isAuthenticated, currentUser, logout } = useAuth();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         <i>Toy Topia</i>
//       </Typography>
//       <List>
//         {['Home', 'About', 'Contact'].map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             <i>Toy Topia</i>
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
//             <Link to="/" className="nav-item">Home</Link>
//             <Link to="/about" className="nav-item">About</Link>
//             <Link to="/contact" className="nav-item">Contact</Link>
//             {isAuthenticated && currentUser?.role === 'admin' && (
//               <Link to="/admin-dashboard" className="nav-item">Admin Dashboard</Link>
//             )}
//             {isAuthenticated && currentUser?.role === 'user' && (
//               <Link to="/user-dashboard" className="nav-item">User Dashboard</Link>
//             )}
//           </Box>
//           <CartIcon />
//           {isAuthenticated ? (
//             <Button color="inherit" onClick={logout} className="nav-item nav-button">Logout</Button>
//           ) : (
//             <Link to="/login" className="nav-item nav-button">
//               <Button color="inherit">Login</Button>
//             </Link>
//           )}
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// };

// export default Navbar;