import { SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      {children}
    </div>
  );
}
