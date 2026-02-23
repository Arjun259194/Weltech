import { PlanSideBar } from "@/components/PlanSideBar";

export default function PlanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-background w-full text-foreground grid grid-cols-4">
      <PlanSideBar />
      <section className="col-span-3 max-h-screen overflow-y-auto bg-green-400">
        {children}
      </section>
    </main>
  );
}
