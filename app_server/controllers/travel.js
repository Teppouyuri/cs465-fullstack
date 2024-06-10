const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept' : 'application/json'
    }
}

//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('/Users/thanhnguyen/Desktop/travlr/data/trips.js','utf8'));

/* GET travel view */
const travel = async function(req, res, next) {
    //res.render('travel', {title : "Travlr Getways", trips});
    await fetch(tripsEndpoint, options)
        .then(res => res.json())
        .then(json => {
            let message = null;
            if(!(json instanceof Array)) {
                message = 'API lookuo error';
                json = [];
            } else {
                if(!json.length){
                    message = 'No trips exist in our database!'
                }
            }
            res.render('travel', {title : "Travlr Getways", trips: json});
        })
};

module.exports = {
    travel
}