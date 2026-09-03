export default function FloatingFlowers() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      <span className="petals absolute left-[8%] top-[18%] text-xl opacity-50">
        🌸
      </span>

      <span
        className="petals absolute right-[10%] top-[35%] text-lg opacity-40"
        style={{ animationDelay: "1s" }}
      >
        🌼
      </span>

      <span
        className="petals absolute left-[15%] top-[70%] text-lg opacity-40"
        style={{ animationDelay: "2s" }}
      >
        🌿
      </span>

      <span
        className="petals absolute right-[18%] top-[78%] text-xl opacity-40"
        style={{ animationDelay: "3s" }}
      >
        🌸
      </span>
    </div>
  );
}