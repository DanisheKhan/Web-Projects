export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-10">
      <div>
        <img src="/images/logo.png" alt="" />
      </div>
      <ul className="flex gap-4 font-semibold">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
