import Link from "next/link";

export default function MainNavigation() {
  return (
    <header className="bg-slate-700 text-slate-100 flex justify-between p-4 xl:p-8 xl:px-12 items-center">
      <p className="text-3xl font-dancingScript">evento</p>
      <nav>
        <ul className="flex gap-8 xl:gap-5 xl:text-lg font-bold">
          <li>
            <Link href="/">All Events</Link>
          </li>
          <li className="bg-slate-100 text-slate-700 rounded px-2">
            <Link href="/new-event">+New</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
