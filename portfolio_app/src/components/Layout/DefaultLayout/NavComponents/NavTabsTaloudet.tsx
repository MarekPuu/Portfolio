import {
  Box,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from '@mui/material';
import { IoIosArrowBack } from 'react-icons/io';

const NavTabsTaloudet = ({
  options,
  selectedIndex,
  handleMenuItemClick,
  handleTabChange,
}: any) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        minWidth: 250,
      }}
    >
      <ListItem disablePadding>
        <ListItemButton onClick={(event) => handleTabChange(event, '0')}>
          <ListItemIcon
            sx={{
              minWidth: 20,
              marginRight: 2,
              width: 'fit-content',
            }}
          >
            <IoIosArrowBack size={20} />
          </ListItemIcon>
          <ListItemText primary="Takaisin" />
        </ListItemButton>
      </ListItem>
      <Divider />
      {options.map((option: any, index: number) => (
        <div key={option}>
          <ListItemButton
            disabled={index === selectedIndex}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <ListItemText primary={option} className="MenuItemDefaultColor" />
          </ListItemButton>
          {index !== options.length - 1 ? <Divider /> : null}
        </div>
      ))}
    </Box>
  );
};

export default NavTabsTaloudet;
