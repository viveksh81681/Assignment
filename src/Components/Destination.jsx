import React,{useEffect} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";

export const Destination = () => {
  const [planet, setPlanet] = React.useState([]);
  const [vehicles, setVehicles] = React.useState([]);

  const[data, setData] = React.useState({});

  const handleChange = (e) => {
    setData(e.target.value)
    
  }
  

 useEffect(()=> {
    axios.get(`https://findfalcone.herokuapp.com/planets`).then((res)=> {
        setPlanet(res.data)
         console.log(res)
    })
 },[])

 useEffect(()=> {
    axios.get(`https://findfalcone.herokuapp.com/vehicles`).then((res)=> {
        setVehicles(res.data)
         console.log(res)
    })
 },[])






  return (
    <div>
      <h1>Finding Falcone!</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <TextField
              id="outlined-select-currency"
              select
              name="data"
              label="Select Destination"
              value={planet}
              onChange={handleChange}
            >
              {planet && planet.map((e) => (
                <MenuItem value={e.name}>
                {e.name}
              </MenuItem>
              )
                
              )}
            </TextField>
            { vehicles.map((e) => {
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value={e.name}
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>;
            })}
          </div>
          <div>
          <TextField
              id="outlined-select-currency"
              select
              name="data"
              label="Select Destination"
              value={planet}
              onChange={handleChange}
            >
              {planet && planet.map((e) => (
                <MenuItem value={e.name}>
                {e.name}
              </MenuItem>
              )
                
              )}
            </TextField>
            { vehicles.map((e) => {
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value={e.name}
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>;
            })}
          </div>
          <div>
          <TextField
              id="outlined-select-currency"
              select
              name="data"
              label="Select Destination"
              value={planet}
              onChange={handleChange}
            >
              {planet && planet.map((e) => (
                <MenuItem value={e.name}>
                {e.name}
              </MenuItem>
              )
                
              )}
            </TextField>
            { vehicles.map((e) => {
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value={e.name}
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>;
            })}
          </div>
          <div>
          <TextField
              id="outlined-select-currency"
              select
              name="data"
              label="Select Destination"
              value={planet}
              onChange={handleChange}
            >
              {planet && planet.map((e) => (
                <MenuItem value={e.name}>
                {e.name}
              </MenuItem>
              )
                
              )}
            </TextField>
            { vehicles.map((e) => {
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value={e.name}
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>;
            })}
          </div>
        </div>
      </Box>

      <Grid container spacing={3} style={{textAlign:"center", justifyContent:"center", margin:"auto"}}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Time Taken
              </Typography>
              <Typography variant="h5" component="h2"></Typography>
            </CardContent>
            <CardActions>
              <Button
                // disabled =
                variant="outlined"
                size="medium"
                color="primary"
              >
                Find Falcone
              </Button>
              <Button size="medium">Reset</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
