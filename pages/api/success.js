export default function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const { Response, ProcReturnCode } = req.body;
        console.log(req.body);
        if (Response == "Approved" && ProcReturnCode == "00") {
          res.redirect(303, "/payment/success");
        }
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
