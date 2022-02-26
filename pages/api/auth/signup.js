import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }

  const { firstName, lastName, email, password } = req.body;
  console.log({
    emaiL: email,
    password: password,
    lastName: lastName,
    firstName: firstName,
  });

  if (!firstName || !lastName) {
    res.json({
      message: "Please fill out the first name and last name",
    });
    client.close();
    return;
  } else if (!email || !email.includes("@")) {
    res.json({ message: "Please enter the right email format" });
    client.close();
    return;
  } else if (!password || password.trim().length < 7) {
    res.json({
      message:
        "Invalid input - password should also be at least 7 characters long.",
    });
    client.close();
    return;
  }

  try {
    const client = await connectToDatabase();
    
  }
  catch(error) {
    res.json({
      message:
        "Connecting to database failed.",
    });
   
    return;
  }
  const db = client.db();
  
  const existingUser = await db.collection("users").findOne({ email: email });

  if (existingUser) {
    res.json({ message: "User exists already!" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  try {
    const result = await db.collection("users").insertOne({
      email: email,
      password: hashedPassword,
      lastName: lastName,
      firstName: firstName,
    });
  } catch(error) {
    res.json({ message: 'Something wrong happened' });
    client.close();
    return;
  } 

 

  res.status(201).json({ message: "Created user!" });
  client.close();
};

export default handler;
