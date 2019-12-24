export const putAndPostRoute = method => (req, res) => {
  const requestBody = req.body;
  method(requestBody);
  res.status(204);
  res.send(req.body);
};

export const delay = operation => setTimeout(operation, 500);
