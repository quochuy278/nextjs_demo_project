import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

const handler =async (req, res) => {
  if (req.method !== "POST") {
    return;
  }

  const { firstName, lastName, email, password } = req.body;
  console.log({
    emaiL: email,
    password: password,
    lastName: lastName,
    firstName: firstName,
  })
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    !firstName ||
    !lastName ||
    password.trim().length < 7
  ) {
    res.json({
      message:
        "Invalid input - password should also be at least 7 characters long.",
    });
    return;
  }
  const client = await connectToDatabase();

  const db = client.db();


  const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    res.json({ message: 'User exists already!' });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
    lastName: lastName,
    firstName: firstName,
  });

  res.status(201).json({ message: 'Created user!' });
  client.close();


};

export default handler;
