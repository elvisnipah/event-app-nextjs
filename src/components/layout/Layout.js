import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <div className="flex flex-col gap-4 h-full bg-slate-100">
      <MainNavigation />
      <main className="max-w-[1280px] self-center h-full">
        {props.children}
      </main>
    </div>
  );
}
