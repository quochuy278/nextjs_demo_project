import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

const  handler = async (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ message: "This is get method" });
  } else if (req.method === "POST") {
    const { email, password } = req.body;

    if (email.trim().length === 0 || !email) {
      res.json({ message: "Please enter a valid email" });
      return;
    } else if (!email.includes("@")) {
      res.json({ message: "Invalid email" });
      return;
    } else if ( !password){
      res.json({message: 'Please enter your password'});
      return;
    } else if ( password.trim().length <= 6) {
      res.json({message: 'A password must longer than 6 digits'});
    }

    const client = await connectToDatabase();

    const db = client.db();

    const user = await db.collection('users').findOne({ email: email });

    if (!user) {
      client.close();
      throw new Error('No user found!');
    }

    const isValid = await verifyPassword(
      password,
      user.password
    );


    if (!isValid) {
      client.close();
      throw new Error('Could not log you in!');
    }

    client.close();
    return res.json({ message: 'Login successfully' });
  }
};

export default handler;
