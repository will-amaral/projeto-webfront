import React, { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { Button, Collapse, ListItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import { useItemStyles } from './styles';

function NavItem(props) {
  const { title, href, depth, children, className } = props;
  const { icon: Icon, info: Info, ...rest } = props;
  const classes = useItemStyles();
  const [open, setOpen] = useState(props.open);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = { paddingLeft };

  if (children) {
    return (
      <ListItem
        {...rest}
        className={clsx(classes.item, className)}
        disableGutters
        key={title}
      >
        <Button className={classes.button} onClick={handleToggle} style={style}>
          {Icon && <Icon className={classes.icon} size='20' />}
          <span className={classes.title}>{title}</span>
          {open ? (
            <ExpandLessIcon fontSize='small' color='inherit' />
          ) : (
            <ExpandMoreIcon fontSize='small' color='inherit' />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem
      {...rest}
      className={clsx(classes.itemLeaf, className)}
      disableGutters
      key={title}
    >
      <Button
        activeClassName={classes.active}
        className={clsx(classes.buttonLeaf, `depth-${depth}`)}
        component={RouterLink}
        style={style}
        to={href}
      >
        {Icon && <Icon className={classes.icon} size='20' />}
        <span className={classes.title}>{title}</span>
        {Info && <Info />}
      </Button>
    </ListItem>
  );
}

NavItem.defaultProps = {
  open: false,
  href: '/',
};

export default NavItem;
