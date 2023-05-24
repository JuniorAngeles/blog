import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/Routes/Edit", label: "Edit" },
  { href: "/Routes/Crear", label: "Crear" },
  { href: "/Routes/Eliminar", label: "Eliminar" },
];
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
