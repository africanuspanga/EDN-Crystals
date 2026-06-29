import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  showArrow?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  href,
  showArrow = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d2a456] focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#d2a456] text-[#1b294c] hover:bg-[#c49a4a]",
    secondary:
      "bg-white/15 text-white border border-white/30 backdrop-blur-sm hover:bg-white/25",
    outline:
      "bg-transparent text-[#1b294c] border border-[#1b294c]/20 hover:border-[#d2a456] hover:text-[#d2a456]",
  };

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  const classes = cn(baseStyles, variants[variant], "group", className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
