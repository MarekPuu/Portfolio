import { TabContext, TabPanel } from '@mui/lab';
import { Menu } from '@mui/material';
import NavTabsAsetukset from './NavTabsAsetukset';
import NavTabsTaloudet from './NavTabsTaloudet';

const ChoseTalousMenu = ({
  anchorEl,
  open,
  handleClose,
  tab,
  selectedIndex,
  handleTabChange,
  options,
  handleMenuItemClick,
}: any) => {
  return (
    <Menu
      sx={{ marginTop: '10px' }}
      id="lock-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      className="MenuItemDefaultColor"
      MenuListProps={{
        'aria-labelledby': 'lock-button',
        role: 'listbox',
      }}
    >
      <TabContext value={tab}>
        <TabPanel sx={{ padding: 0 }} value="0">
          <NavTabsAsetukset
            selectedIndex={selectedIndex}
            handleTabChange={handleTabChange}
          />
        </TabPanel>
        <TabPanel sx={{ padding: 0 }} value="1">
          <NavTabsTaloudet
            options={options}
            selectedIndex={selectedIndex}
            handleMenuItemClick={handleMenuItemClick}
            handleTabChange={handleTabChange}
          />
        </TabPanel>
      </TabContext>
    </Menu>
  );
};

export default ChoseTalousMenu;
