
const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-[var(--foreground)] py-12 px-6 mt-10 flex flex-col items-center justify-center gap-6">
      <ul className="flex flex-wrap justify-center gap-4 text-center text-sm md:text-base">
        <li>
          <a href="#" className="underline cursor-pointer">Privacy & Cookies Policy</a>
        </li>
        <li>
          <a href="#" className="underline cursor-pointer">Good Faith Estimate</a>
        </li>
        <li>
          <a href="#" className="underline cursor-pointer">Website Terms & Conditions</a>
        </li>
        <li>
          <a href="#" className="underline cursor-pointer">Disclaimer</a>
        </li>
      </ul>

      <p className="text-center text-sm md:text-base">
        Website Template Credits:{" "}
        <a href="#" className="underline cursor-pointer">Go Bloom Creative</a>
      </p>

      <p className="text-center text-sm md:text-base">
        All Rights Reserved © 2026, made with ❤️ by <i>~Saumya</i>
      </p>
      
    </footer>
  )
}

export default Footer
