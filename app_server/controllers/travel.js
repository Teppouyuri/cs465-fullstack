var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('/Users/thanhnguyen/Desktop/travlr/data/trip.js', 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', {title : "Travlr Getways"}, trips);
};

module.exports = {
    travel
}