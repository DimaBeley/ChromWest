import AdbIcon from "@mui/icons-material/Adb";
import {Typography} from "@mui/material";
import * as React from "react";

export const LogoDesktop = () => {
 return (
     <>
         <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
         <Typography
           variant="h6"
           noWrap
           component="h6"
           sx={{
             mr: 2,
             display: { xs: 'none', md: 'flex' },
             fontFamily: 'monospace',
             fontWeight: 700,
             letterSpacing: '.3rem',
             color: 'inherit',
             textDecoration: 'none',
             userSelect: 'none',
           }}
         >
           LOGO
         </Typography>
     </>
 )
}