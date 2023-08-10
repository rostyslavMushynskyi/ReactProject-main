import { useState, useEffect } from "react";
import { CircularProgress, styled, Alert, LinearProgress } from "@mui/material";
import axios from "axios";

import Form from "./components/Form/Form";
import LocationData from "./components/LocationData/LocationData";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "1800px",
  margin: "0 auto",
}));

const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [errorCode, setErrorCode] = useState("");
  const [loader, setLoader] = useState(false);
  const [progressValue, setProgressValue] = useState(100);

  useEffect(() => {
    let timer;
    if (errorCode) {
      timer = setTimeout(() => {
        setErrorCode("");
        setProgressValue(100);
      }, 2500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [errorCode]);

  useEffect(() => {
    if (errorCode) {
      const interval = setInterval(() => {
        setProgressValue((prevValue) => prevValue - 10);
      }, 200);

      return () => {
        clearInterval(interval);
        setProgressValue(100);
      };
    }
  }, [errorCode]);

  const handleSubmit = (values) => {
    setLoader(true);
    axios
      .get(
        `https://ipgeolocation.abstractapi.com/v1/?api_key=ab632ac2e83343e99ab926fd28196260&ip_address=${values.ip}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.city === null) {
          setErrorCode("IP is not valid");
        } else {
          setErrorCode("");
          setLocationData(res.data);
        }
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 429") {
          setLocationData("");
          setErrorCode("Too many requests");
        } else {
          setErrorCode(error.message);
        }
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <div>
      <Container>
        <h1>IP Geolocation</h1>
        {<Form onSubmit={handleSubmit} errorCode={errorCode} />}
        {errorCode && (
          <Alert sx={{ width: "100%" }} severity="error">
            {errorCode}
          </Alert>
        )}
        {errorCode && (
          <LinearProgress
            sx={{ width: "100%", color: "#d32f2f" }}
            color="inherit"
            variant="determinate"
            value={progressValue}
          />
        )}
        {loader && <CircularProgress size={100} />}
        {locationData && <LocationData locationData={locationData} />}
      </Container>
    </div>
  );
};

export default App;
