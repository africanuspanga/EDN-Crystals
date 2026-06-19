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
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ce9f3d] focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#ce9f3d] text-[#10265f] hover:bg-[#dcb666]",
    secondary:
      "bg-white/15 text-white border border-white/30 backdrop-blur-sm hover:bg-white/25",
    outline:
      "bg-transparent text-[#10265f] border border-[#10265f]/20 hover:border-[#ce9f3d] hover:text-[#ce9f3d]",
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
