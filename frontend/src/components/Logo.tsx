export function Logo() {
  return (
    <div className="flex items-center space-x-3 p-1 rounded-xl backdrop-blur bg-white/10">
      <img
        src="/images/Logo.png"
        alt="Logo"
        className="h-[46px] w-auto"
      />
      <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        DSAverseWithAI
      </span>
    </div>
  );
}
