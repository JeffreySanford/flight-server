/**
 * FlightController
 *
 * @description :: Server-side logic for managing flights
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const flights = [
  { id: 1,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 2,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 3,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 4,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 5,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 6,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 7,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 8,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 9,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 10,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 11,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 12,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 13,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 14,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 15,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 16,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 17,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 18,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 19,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 20,flight_from: 'SFO',flight_to: 'DEN',price: 100 },
  { id: 21,flight_from: 'SFO',flight_to: 'DEN',price: 100 }
];

module.exports = {

  getcount: function(req, res) {
    console.log('return count')
    count = flights.length;
    return res.json(count);
  },
  getFlights: function(req, res) {

    console.log('return flights')
    let index = req.param('index');
    let itemsPerPage = req.param('itemsPerPage');
    let len = flights.length;
    let newArray = [];
    console.log('Length of Flights: ' + len);
    console.log('index: ' + index);
    console.log('itemsPerPage: ' + itemsPerPage);
    let i = index;

    console.log(flights[1]);
    let pageArrayLength = parseInt(i) + parseInt(itemsPerPage) + 1;
    console.log('Page Array is:' + pageArrayLength);

    for (i; i<pageArrayLength; i++){
      if(i < flights.length ){
        newArray.push(flights[i]);
        console.log('Item ' + i + " is ID: " + flights[i].id);
      }
    }
    console.log("new array is: " + newArray);
    return res.ok(newArray);
  }
};

