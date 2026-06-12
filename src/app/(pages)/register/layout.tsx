import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register for Saturday Seminar | KSV Engineering",
  description:
    "Register for our upcoming weekly Saturday seminar to learn about AutoCAD tools, workflows, and calculations.",
  alternates: {
    canonical: "/register",
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
