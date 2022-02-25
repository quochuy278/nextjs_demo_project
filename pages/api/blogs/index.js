
import { connectToDatabase } from "../../../lib/db";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const client = await connectToDatabase();

    const db = client.db();
    const blogs = await db.collection('blogs').find({})
    .sort({ published: -1 })
    .toArray();
    res.json({
        data: JSON.parse(JSON.stringify(blogs)),
    });
  } else if (req.method === "POST") {
    const title = req.body.title;
    const blog = req.body.blog;
    const author = req.body.author;
    const lastName = req.body.lastName;
    const firstName = req.body.firstName;
    const lastModifed = req.body.lastModifed;

    const client = await connectToDatabase();

    const db = client.db();

    if (!title || !blog) {
      res.json({ message: "Please add your blog" });
      client.close();
      return;
    }

    const result = await db.collection("blogs").insertOne(
      {
        title: title,
        blog: blog,
        author: author,
        lastName: lastName,
        firstName: firstName,
        lastModifed: lastModifed
      },
      { Timestamp: true }
    );

    res.status(201).json({ message: "Created blog!" });
    client.close();
  } else if (req.method === "PUT") {
  } else if (req.method === "DELETE") {
  }
};

export default handler;
