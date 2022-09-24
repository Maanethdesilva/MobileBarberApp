import { useState, useEffect } from "react";
import Axios from "axios";
import NotificationItem from "../NotificationItem/NotificationItem";
import Maps from "../MapsAPI/Maps";
import ClientCard from "../ClientCard/ClientCard";
import { Grid } from "@mui/material";

function CustomerHomePage() {
  const [barberList, setBarberList] = useState([]);

  return (
    <div className="CustomerHomePage">
      <Grid container spacing={2}>
  <Grid item xs={2}>
    <ClientCard />
  </Grid>
  <Grid item xs={2}>
    <ClientCard />
  </Grid>
  <Grid item xs={2}>
    <ClientCard />
  </Grid>
</Grid>
      <Maps />
    </div>
  );
}

export default CustomerHomePage;
