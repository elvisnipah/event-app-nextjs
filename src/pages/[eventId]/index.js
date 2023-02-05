import EventDetail from "@/components/events/EventDetail";

import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

export default function EventDetails(props) {
  return (
    <>
      <Head>
        <title>evento || {props.eventData.title}</title>
        <meta name="description" content={props.eventData.description} />
      </Head>
      <EventDetail
        image={props.eventData.image}
        title={props.eventData.title}
        address={props.eventData.address}
        description={props.eventData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://elvis:orymYMrtKuidsOJl@cluster0.coeqekj.mongodb.net/events?retryWrites=true&w=majority"
  );

  const db = client.db();

  const eventsCollection = db.collection("events");

  const events = await eventsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    paths: events.map((event) => ({
      params: { eventId: event._id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://elvis:orymYMrtKuidsOJl@cluster0.coeqekj.mongodb.net/events?retryWrites=true&w=majority"
  );

  const db = client.db();

  const eventsCollection = db.collection("events");

  const selectedEvent = await eventsCollection.findOne({
    _id: new ObjectId(eventId),
  });

  client.close();

  return {
    props: {
      eventData: {
        id: selectedEvent._id.toString(),
        title: selectedEvent.title,
        image: selectedEvent.image,
        address: selectedEvent.address,
        description: selectedEvent.description,
      },
    },
  };
}
