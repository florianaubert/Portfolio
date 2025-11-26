import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionTitle = ({ title, subtitle, className, align = "center" }: SectionTitleProps) => {
  return (
    <div className={cn(
      "space-y-2 mb-12",
      align === "center" && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        <span className="text-primary font-mono">{"// "}</span>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
