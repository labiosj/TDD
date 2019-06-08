let employees = require('../data/employees.js');
// let waitingList = require('../data/waiting-list.js');

module.exports = function (app) {

  /**
   * GET the waitlist
   */
  app.get('/api/employees', function (req, res) {
    res.json(employees);
  });

  /**
   * GET the tablelist 
   */
//   app.get('/api/tables', function (req, res) {
//     res.json(tableList);
//   });

  /**
   * If there are fewer than 5 reservations, add the new reservation to the tablelist
   * Otherwise add the new reservation to the waitlist
   */
  app.post('/api/employees', function(req,res) {
    employees.push(req.body);
    res.end();
});
}