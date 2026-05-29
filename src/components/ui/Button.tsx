import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "dark";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block px-8 py-3 text-body-sm font-body font-semibold tracking-wide transition-all duration-300 rounded-sm";
  const variants = {
    primary:
      "bg-gold text-deep hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20",
    outline:
      "border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold",
    dark:
      "bg-deep text-cream hover:bg-deep/80 hover:shadow-lg underline underline-offset-4 decoration-gold/50",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
