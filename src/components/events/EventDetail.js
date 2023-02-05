export default function EventDetail(props) {
  return (
    <section className="text-center text-slate-800 flex flex-col gap-4">
      <img src={props.image} alt={props.title} />
      <p className="text-3xl font-bold">{props.title}</p>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
