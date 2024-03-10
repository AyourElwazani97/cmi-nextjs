const cmi = require("cmi-payment-nodejs");
const { v4: uuidv4 } = require("uuid");
export default function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      const { amount, email, tel, BillToName, address } = req.body;
      const host = req.headers.host;
      const CmiClient = new cmi.default({
        storekey: process.env.CMI_STORE_KEY,
        clientid: process.env.CMI_CLIENT_ID,
        oid: uuidv4(),
        shopurl: `https://${host}`,
        okUrl: `https://${host}/api/success`,
        failUrl: `https://${host}/api/failed`,
        /* please Use http:// when u are in dev mode */
        email,
        BillToName,
        amount,
        tel,
        BillToStateProv: address,
        BillToCompany: "companyName",
        callbackURL: `https://${host}/api/callback`,
      });
      const htmlForm = CmiClient.redirect_post();
      res.send(htmlForm);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
