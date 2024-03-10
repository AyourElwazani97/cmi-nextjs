export default function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const { Response, ProcReturnCode } = req.body;

        if (Response == "Approved" && ProcReturnCode == "00") {
          return res.send("ACTION=POSTAUTH");
        } else {
          return res.send("FAILURE");
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
