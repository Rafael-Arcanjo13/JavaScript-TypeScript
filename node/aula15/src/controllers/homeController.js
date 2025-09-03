exports.paginaInicial = (req, res) => {
  console.log(req.flash('error'), req.flash('success'), req.flash('info'));
  //req.flash('info', 'Olá mundo!');
  //req.flash('error', 'asdasdf');
  //req.flash('success', 'Blaaaaaaaa!');
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
