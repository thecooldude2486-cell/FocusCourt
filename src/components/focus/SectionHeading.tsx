import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
  align?: "left" | "center";
}
export const SectionHeading = ({ eyebrow, title, subtitle, light, className, align = "center" }: Props) => (
  <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center", className)}>
    {eyebrow && (
      <div className={cn("inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em]",
        light ? "text-court-orange" : "text-court-orange")}>
        <span className="h-px w-8 bg-court-orange" />{eyebrow}
      </div>
    )}
    <h2 className={cn("font-display text-4xl md:text-6xl leading-[0.95]",
      light ? "text-white" : "text-navy-deep")}>{title}</h2>
    {subtitle && (
      <p className={cn("text-base md:text-lg leading-relaxed",
        light ? "text-white/75" : "text-muted-foreground")}>{subtitle}</p>
    )}
  </div>
);
