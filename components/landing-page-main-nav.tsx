"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function LandingMainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/docs`,
      label: "Documentation",
      active: pathname === `/docs`,
      external: false,
    },
    {
      href: "https://creative-kurta.vercel.app/",
      label: "Demo store",
      active: false,
      external: true,
    },
  ];
  return (
    <nav
      className={cn("flex items-center space-x-4 lg space-x-6", className)}
      {...props}
    >
      {routes.map((route) =>
        route.external ? (
          <a
            key={route.href}
            href={route.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              "text-muted-foreground"
            )}
          >
            {route.label}
          </a>
        ) : (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        )
      )}
    </nav>
  );
}
