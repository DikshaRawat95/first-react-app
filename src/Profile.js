import React from "react";
import { useSelector } from "react-redux";

import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './App.css';

const Profile = (props) => {
    const lawyerDetails = useSelector((state) => state.lawyerData || []);
    const selected = lawyerDetails.filter((data) => data.id === props.selectedId);
    const selectedLawyer = selected[0] || {};

    const bookAppointment = () => {
        //book appointment code goes here
    };

    const goBack = () => {
        props.setCurrentPage("main");
    };

    if (!Object.keys(selectedLawyer).length) {
        return null;
    }
    return (
        <div className="pageContainer">
            <Typography gutterBottom variant="h5" className="profileHeading">
                {selectedLawyer.name}
            </Typography>
            <Grid container className="profileContent">
                <Grid item xs={6} md={6} className="profileItem">
                    Availability: {selectedLawyer.availability}
                </Grid>
                <Grid item xs={6} md={6} className="profileItem">
                    Speciality: {selectedLawyer.speciality}
                </Grid>
                <Grid item xs={6} md={6} className="profileItem">
                    Cost per Appointment: INR {selectedLawyer.appointmentCost}
                </Grid>
            </Grid>
            <Box className="footer">
                <Box className="footerContent">
                    <Button variant="contained" onClick={bookAppointment} className="button1">Book an appointment</Button>
                    <Button variant="outlined" onClick={goBack}>Back to dashboard</Button>
                </Box>
            </Box>
        </div>
    );
}

export default Profile;
