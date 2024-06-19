import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect(
      `/auth/signin?callbackUrl=${encodeURIComponent("/dashboard")}`
    );
  }

  return children;
}
