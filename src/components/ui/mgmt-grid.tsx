type MgmtItem = {
  label: string;
  value: string;
};

export function MgmtGrid({
  items,
  compact = false,
}: {
  items: MgmtItem[];
  compact?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 border-t border-dashed border-border">
      {items.map((item) => (
        <div
          key={`${item.label}-${item.value}`}
          className={
            compact
              ? "border-b border-dashed border-border px-1 py-2.5 odd:pr-3 even:pl-3"
              : "border-b border-dashed border-border px-1 py-3.5 odd:pr-4 even:pl-4 sm:py-3.5 sm:odd:pr-6 sm:even:pl-6"
          }
        >
          <p className="text-[9px] font-semibold tracking-[0.12em] text-muted uppercase sm:text-[10px]">
            {item.label}
          </p>
          <p
            className={
              compact
                ? "mt-0.5 text-[12.5px] font-semibold leading-snug tracking-tight text-foreground sm:text-[13px]"
                : "mt-1 font-[family-name:var(--font-display)] text-[0.95rem] font-semibold leading-snug tracking-tight text-foreground"
            }
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
