import EventItem from "./EventItem";

export default function EventList(props) {
  return (
    <ul className="flex flex-col gap-4 p-4">
      {props.events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          address={event.address}
        />
      ))}
    </ul>
  );
}
