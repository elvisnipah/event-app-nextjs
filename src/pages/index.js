import EventList from "@/components/events/EventList";

import { MongoClient } from "mongodb";

import Head from "next/head";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>evento</title>
        <meta
          name="description"
          content="Browse a list of events happening anywhere"
        />
      </Head>
      <EventList events={props.events} />;
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://elvis:orymYMrtKuidsOJl@cluster0.coeqekj.mongodb.net/events?retryWrites=true&w=majority"
  );

  const db = client.db();

  const eventsCollection = db.collection("events");

  const events = await eventsCollection.find().toArray();

  client.close();

  return {
    props: {
      events: events.map((event) => ({
        title: event.title,
        address: event.address,
        image: event.image,
        id: event._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an api

//   return {
//     props: {
//       events: DUMMY_EVENTS,
//     },
//   };
// }
