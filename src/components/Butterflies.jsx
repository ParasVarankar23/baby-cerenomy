    export default function Butterflies() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      <span
        className="absolute left-[12%] top-[40%] text-xl opacity-40"
        style={{
          animation: "floatSlow 6s ease-in-out infinite",
        }}
      >
        🦋
      </span>

      <span
        className="absolute right-[12%] top-[20%] text-2xl opacity-30"
        style={{
          animation: "floatSlow 7s ease-in-out infinite",
          animationDelay: "2s",
        }}
      >
        🦋
      </span>

      <span
        className="absolute right-[25%] top-[65%] text-lg opacity-30"
        style={{
          animation: "floatSlow 5s ease-in-out infinite",
          animationDelay: "1s",
        }}
      >
        🦋
      </span>
    </div>
  );
}