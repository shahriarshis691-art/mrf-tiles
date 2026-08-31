export const imageLiftClass = "";

export default function ImageWash({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0.18))] ${className}`}
    />
  );
}
