export default function FloralBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-60">
      <div className="absolute -left-24 top-[20%] h-72 w-72 rounded-full bg-[#f7cdbb]/30 blur-3xl" />

      <div className="absolute -right-24 top-[50%] h-80 w-80 rounded-full bg-[#dceef3]/40 blur-3xl" />

      <div className="absolute left-[30%] top-[80%] h-72 w-72 rounded-full bg-[#e6def7]/30 blur-3xl" />

      <div className="absolute right-[35%] top-[5%] h-60 w-60 rounded-full bg-[#fff1bc]/25 blur-3xl" />
    </div>
  );
}