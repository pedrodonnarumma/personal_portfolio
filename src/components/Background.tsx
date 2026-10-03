const Background = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
    <div className="absolute inset-0 bg-grid" />
    <div className="absolute -top-48 -left-48 h-[40rem] w-[40rem] rounded-full bg-blue-600/25 blur-[140px] animate-drift-slow" />
    <div className="absolute top-1/3 -right-56 h-[36rem] w-[36rem] rounded-full bg-violet-600/20 blur-[140px] animate-drift-slower" />
    <div className="absolute -bottom-56 left-1/4 h-[34rem] w-[34rem] rounded-full bg-cyan-500/15 blur-[140px] animate-drift-slow" />
  </div>
);

export default Background;
