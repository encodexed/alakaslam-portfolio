"use client";

import { Menu } from "@mui/icons-material";
import Button from "@mui/material/Button";
import MenuComponent from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useState } from "react";

const NavDropdown = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className='sm:hidden'>
			<Button
				id='basic-button'
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<Menu sx={{ color: "white" }} />
			</Button>
			<MenuComponent
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={handleClose}>
					<Link href='/'>Home</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link href='/projects'>Projects</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link href='/journey'>Journey</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link href='/contact'>Contact</Link>
				</MenuItem>
			</MenuComponent>
		</div>
	);
};

export default NavDropdown;
