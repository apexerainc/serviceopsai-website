import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-xl border", {
  variants: {
    variant: {
      default: "border-border bg-white",
      elevated: "border-border bg-white shadow-lg",
      highlighted: "border-primary bg-white shadow-xl ring-2 ring-primary",
    },
    padding: {
      none: "",
      md: "p-6",
      lg: "p-8",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({
  className,
  variant,
  padding,
  children,
  ...props
}: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, padding, className }))} {...props}>
      {children}
    </div>
  );
}
