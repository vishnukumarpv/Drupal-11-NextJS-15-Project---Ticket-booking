interface NavLinkProps {
  children: React.ReactNode;
  className?: string;
  currentPath?: string;
  href?: string;
}
export default function NavLink({ children, className = '', currentPath, href }: NavLinkProps) {
  return (
    <a
      className={`
        block whitespace-nowrap px-3 py-2 text-sm no-underline transition-colors hover:text-slate-900  rounded-md
        ${
          currentPath === href
            ? 'text-slate-900 '
            : 'text-slate-600 '
        }
        ${className}
      `}
      href={href}
    >
      {children}
    </a>
  );
}