import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./style.css"

export default function BasicSelect({days, handleDaysChange}) {

    return (
        <div className='days-selected'>
            <p>Price Changed in: </p>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={days}
                label="Days"
                onChange={handleDaysChange}
                sx={{
                    height: "2.5rem",
                    color: "var(--white)",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--white)",
                    },
                    "& .MuiSvgIcon-root": {
                        color: "var(--white)",
                    },
                    "&:hover": {
                        "&& fieldset": {
                            borderColor: "#3a80e9",
                        }
                    }
                }}
            >
                <MenuItem value={7} sx={{ color: "var(--black)", fontFamily: "Inter", fontWeight: "600" }}>7 Days</MenuItem>
                <MenuItem value={30} sx={{ color: "var(--black)", fontFamily: "Inter", fontWeight: "600" }}>30 Days</MenuItem>
                <MenuItem value={60} sx={{ color: "var(--black)", fontFamily: "Inter", fontWeight: "600" }}>60 Days</MenuItem>
                <MenuItem value={90} sx={{ color: "var(--black)", fontFamily: "Inter", fontWeight: "600" }}>90 Days</MenuItem>
                <MenuItem value={120} sx={{ color: "var(--black)", fontFamily: "Inter", fontWeight: "600" }}>120 Days</MenuItem>
            </Select>

        </div>
    );
}