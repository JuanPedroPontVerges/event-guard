import "~/styles/globals.css";

import Link from "next/link";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[#4263eb] min-h-screen text-white">
      <div className="flex justify-end p-2">
        <Link
          href={"/api/auth/signout"}
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        >
          Cerrar sesión
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Docta Capital
        </h1>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {children}
        </div>
      </div>
    </main>
  );
}
