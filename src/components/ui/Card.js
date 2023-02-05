export default function Card(props) {
  return (
    <div className="flex flex-col border-5 shadow-[0_2px_8px_rgba(0,0,0,0.2)] gap-4 pb-5 max-w-[1280px] bg-slate-100">
      {props.children}
    </div>
  );
}
