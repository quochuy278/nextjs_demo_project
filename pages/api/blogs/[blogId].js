import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/db";

const handler = async (req, res) => {
  const blogId = req.query.blogId;
  if (req.method === "GET") {
    const client = await connectToDatabase();

    const db = client.db();

    const blog = await db.collection("blogs").find(ObjectId(blogId)).toArray();

    res.status(200).json({ data: blog });
  } else if (req.method === "PUT") {
    const updatedTitle = req.body.title;
    const updatedBlog = req.body.blog;
    const client = await connectToDatabase();

    const db = client.db();

    const result = db.collection("blogs").findOneAndUpdate(
      { _id: ObjectId(blogId) },
      {
        $set: {
          title: updatedTitle,
          blog: updatedBlog,
        },
      },
      { returnDocument: true }
    );

    res.status(200).json({ message: "Updated successfully!" });
  } else if (req.method === "DELETE") {
    const client = await connectToDatabase();

    const db = client.db();

    console.log(blogId);
    const removedblog = await db
      .collection("blogs")
      .findOneAndDelete({ _id: ObjectId(blogId) });

    res.status(200).json({ message: "Deleted successfully!" });
  }
};

export default handler;
