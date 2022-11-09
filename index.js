const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");
const fs = require('fs')

const app = express();
app.set("port", PORT || 3000);
app.use(express.json());
app.use(errorHandler)
const flighschema = newFlightScheme({
  title: string,
  time: number,
  price: number,
  date: number,
  }) 

function errorHandler (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
      error: err.message,
      status: 500,
      message: "Internal Server Error"
  });
}
  
app.use("/", routes("flightRoute"));

const port = process.env.PORT || 3000;
app.get('/flights', (rec, res) =>{
  return res.jason(flights)
})

app.post('/flights', (req, res) => {
  const flight = req.body.flight;
  flight.create({
    title: "flight to canada",
    time: 1300,
    price: 26000,
    date: "26-06-2022"
  }), (err, newflight) => {
    if (err){
      return res.status(500).Jason({message: err})
    }else {
      return res.status(200).Jason({message: "new flight created". newflight})
    }
  }
})


app.get('/flights', (req, res) => {
  flight.find({}, (err, flights) => {
    if (err){
      return res.status(500).Jason({message: err})
    }else {
      return res.status(200).Jason({message: "new flight created". newflight})
    }
  })
})

app.get('/flights/:id', (req, res) =>{
let id = req.params.id;
flights.find(flight => {
  return String (flight.id) === id
})
if (foundflights){
  return res.status(200).json({flights: foundflights})
} else{
  return res.status(404).json({message: "Flight not found"})
}
})

app.put('/flights/:id', (req, res) =>{
  flight.findByIdUpdate(req.params.id, {
    title: req.body.title,
    time: req.body.time,
    price: req.body.price,
    date: req.body.date,
  }), (err, flight) => {
      if (err) {
        return res.status(500).Jason({message: err})
    }else if (!flight){
      return res.status(404).Jason({message: "flight not found". newflight})
    }else {
          book.save{(err, savedflight) => {
            if (err){
              return res.status(404).Jason({message: "flight updated succesfully". newflight})
    }
     }
    }
    }
    }
      
  })

  app.delete('/flights/:id', (req, res) => {
    flight.findByIdDelete(req.params.id, (err, flight) => {
      if (err){
        return res.status(500).Jason({message: err})
    }else if (!flight){
      return res.status(404).Jason({message: "flight not found"})
    }else {
      return res.status(200).Jason ({message: "flight deleted successfully"})
      }
    })
  })
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
