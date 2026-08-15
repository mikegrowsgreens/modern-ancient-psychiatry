import type { Metadata } from "next";

/**
 * THROWAWAY. Direction mocks for the redesign (ui-design-system Rule 2:
 * render three sharply different directions, judge, never ship generation 1).
 *
 * This entire directory is deleted before deploy, and deploy.sh hard-fails if
 * it still exists.
 */
export const metadata: Metadata = {
  title: "Direction mock",
  robots: { index: false, follow: false },
};

export default function MocksLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-deep">{children}</div>;
}
