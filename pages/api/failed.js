export default function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const { Response } = req.body;
        if (Response == "Error") {
          res.redirect(303, "/payment/failed");
        }
        console.log(req.body);
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
