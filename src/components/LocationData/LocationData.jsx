import { Typography, Card, CardContent, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./LocationData.module.css";

const textStyle = {
  fontSize: 20,
  fontFamily: "Montserrat",
  fontWeight: "300",
  color: "#fff",
};

const titleStyle = {
  fontSize: 32,
  fontFamily: "Montserrat",
  textTransform: "uppercase",
  fontWeight: "500",
};

const LocationData = ({ locationData }) => {
  return (
    <div>
      {/* <Paper
        sx={{
          minWidth: "100vh",
          paddingLeft: "65px",
        }}
      >
        <Typography sx={textStyle}>IP Address</Typography>
        <Typography sx={titleStyle}>{locationData.ip_address}</Typography>
      </Paper> */}
      <Grid
        container
        sx={{
          marginTop: "25px",
          justifyContent: "center",
          transition: "all 10s",
        }}
        rowSpacing={1}
        spacing={0.5}
      >
        <Grid xs={2}>
          <Card>
            <CardContent className={styles.cardContentItem}>
              <Typography sx={titleStyle}>{locationData.country}</Typography>
              <Box component="img" src={locationData.flag.svg} alt="flag" />
              <Typography sx={titleStyle}>Region</Typography>
              <Typography sx={textStyle}>{locationData.region}</Typography>
              <Typography sx={titleStyle}>City</Typography>
              <Typography sx={textStyle}>{locationData.city}</Typography>
              <Typography sx={titleStyle}>Postal Code</Typography>
              <Typography sx={textStyle}>{locationData.postal_code}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={2}>
          <Card>
            <CardContent className={styles.cardContentItem}>
              <Typography sx={titleStyle}>Latitude</Typography>
              <Typography sx={textStyle}>{locationData.latitude}</Typography>
              <Typography sx={titleStyle}>Longitude</Typography>
              <Typography sx={textStyle}>{locationData.longitude}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={2}>
          <Card>
            <CardContent className={styles.cardContentItem}>
              <Typography sx={titleStyle}>Currency</Typography>
              <Typography sx={textStyle}>
                {locationData.currency.currency_name}
              </Typography>
              <Typography sx={titleStyle}>Currency Code</Typography>
              <Typography sx={textStyle}>
                {locationData.currency.currency_code}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={2}>
          <Card>
            <CardContent className={styles.cardContentItem}>
              <Typography sx={titleStyle}>Current Time</Typography>
              <Typography sx={textStyle}>
                {locationData.timezone.current_time}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={2}>
          <Card>
            <CardContent className={styles.cardContentItem}>
              <Typography sx={titleStyle}>Organization Name</Typography>
              <Typography sx={textStyle}>
                {locationData.connection.organization_name}
              </Typography>
              <Typography sx={titleStyle}>ISP Name</Typography>
              <Typography sx={textStyle}>
                {locationData.connection.isp_name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default LocationData;
