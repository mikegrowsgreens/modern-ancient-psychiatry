import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  /**
   * `ghost` is the default and is the only button shape on the `--deep` canvas:
   * a solid button is an instruction, a ghost button is an offer (Aspelin
   * borrow, DESIGN.md §10). `solid` exists for the single gold field, where the
   * roles invert — solid `--deep` fill, `--gold-deep` ink, no border. That is
   * the one solid button on the site.
   */
  variant?: "ghost" | "solid";
  className?: string;
};

// `transition-all` replaced with the named property that actually changes
// (MOTION.md rule 7), and `rounded-sm` dropped — radius is 0 or fully round.
//
// `py-3.5` is DESIGN.md §10's `0.875rem 2rem` exactly; `min-h-11` then lifts
// the box to the 44px hit target §15 asks for without inflating the padding
// away from spec.
const BASE =
  "inline-flex min-h-11 items-center justify-center px-8 py-3.5 font-body text-label font-semibold uppercase transition-colors duration-micro ease-out";

const VARIANTS = {
  ghost: "border border-gold text-gold hover:bg-gold/10",
  solid: "bg-deep text-gold-deep hover:text-cream",
} as const;

export default function Button({
  href,
  children,
  variant = "ghost",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${BASE} ${VARIANTS[variant]} ${className}`}>
      {children}
    </Link>
  );
}
