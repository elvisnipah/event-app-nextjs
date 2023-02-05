import NewEventForm from "@/components/events/NewEventForm";
import Head from "next/head";
import { useRouter } from "next/router";

export default function NewEventPage() {
  const router = useRouter();

  async function handleAddEvent(enteredEventData) {
    const response = await fetch("/api/new-event", {
      method: "POST",
      body: JSON.stringify(enteredEventData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a New Event</title>
        <meta name="description" content="Add your own events" />
      </Head>
      <div className="flex flex-col items-center pt-8 h-full gap-16">
        <p className="text-5xl font-bold text-slate-700">New Event</p>
        <NewEventForm onAddEvent={handleAddEvent} />
      </div>
    </>
  );
}
