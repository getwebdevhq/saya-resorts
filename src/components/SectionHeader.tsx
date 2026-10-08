import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  /** Heading content. Wrap the accent phrase in <em className="italic-serif">. */
  title: ReactNode;
  /** Optional supporting paragraph, aligned to the baseline of the heading. */
  children?: ReactNode;
  /** Right-aligned content that replaces the paragraph (e.g. filter chips). */
  aside?: ReactNode;
  className?: string;
};

/**
 * The one section intro used everywhere: dot eyebrow, tight headline with an
 * italic accent, optional aside, hairline underneath. Inherit dark styling by
 * placing it inside an element with the `on-dark` class.
 */
export default function SectionHeader({
  eyebrow,
  title,
  children,
  aside,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`reveal rule flex flex-col gap-8 border-b pb-12 lg:flex-row lg:items-end lg:justify-between ${className}`}
    >
      <div className="max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h-section mt-5">{title}</h2>
      </div>
      {aside ?? (children && <p className="lead max-w-md">{children}</p>)}
    </div>
  );
}
