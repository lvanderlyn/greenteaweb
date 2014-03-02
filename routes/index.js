//storing all the bulletpoint entires of the list in an array 
//(probably because mongoose/DB stuff would be overkill for this example)
var things = [];

exports.index = function (req, res) {
  res.render('index', {
    title: 'greenteaweb',
    things: things
  });
};

exports.index_post = function (req, res) {
  //push is a javascript function that adds new elements to the end of an array
  things.push(req.body.saidsomething); 
  res.redirect('/');
};

exports.index_delete = function (req, res) {
  things.splice(parseInt(req.params.id), 1);
  res.redirect('/');
};