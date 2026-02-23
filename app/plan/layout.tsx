import { PlanSideBar } from "@/components/PlanSideBar";
import { PlanLayoutShell } from "@/components/PlanLayoutShell";

export default function PlanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PlanLayoutShell sidebar={<PlanSideBar />}>
      {children}
    </PlanLayoutShell>
  );
}
