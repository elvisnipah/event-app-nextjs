import { MongoClient } from "mongodb";
// api/new-event

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://elvis:orymYMrtKuidsOJl@cluster0.coeqekj.mongodb.net/events?retryWrites=true&w=majority"
    );

    const db = client.db();

    const eventsCollection = db.collection("events");

    const result = await eventsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Event inserted." });
  }
}
