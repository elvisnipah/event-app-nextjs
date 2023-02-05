import Image from "next/image";
import Card from "../ui/Card";
import { useRouter } from "next/router";

export default function EventItem(props) {
  const router = useRouter();

  function handleShowDetails() {
    router.push("/" + props.id);
  }
  return (
    <li>
      <Card>
        <img src={props.image} alt={props.title} width={600} height={300} />
        <article className="flex flex-col justify-center items-center">
          <p className="font-bold text-2xl">{props.title}</p>
          <address>{props.address}</address>
        </article>
        <button
          onClick={handleShowDetails}
          className="px-5 py-2 bg-sky-600 hover:bg-sky-800 text-slate-100 max-w-[150px] self-center rounded font-bold"
        >
          Show Details
        </button>
      </Card>
    </li>
  );
}
