import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../lib/db";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return;
  }

  const session = await getSession({ req: req });

  const userEmail = session.user.email;
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }
  const client = await connectToDatabase();

  const db = client.db();

  const user = await db.collection("users").findOne({email: userEmail})

  
  res.status(200).json({users: user});
};

export default handler;
