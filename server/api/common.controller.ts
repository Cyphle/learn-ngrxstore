export const putAndPostRoute = method => (req, res) => {
  const requestBody = req.body;
  method(requestBody);
  res.status(204);
  res.send({});
};

export const getRoute = data => (req, res) => {
  delay(() => {
    res.status(200);
    res.set('Content-Type', 'application/json');
    res.send(data);
  });
};

export const delay = operation => setTimeout(operation, 500);
