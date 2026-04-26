import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Maha Pradeep Singh — System & Network Administrator" },
      {
        name: "description",
        content:
          "Portfolio of Maha Pradeep Singh, a System & Network Administrator with 7+ years of experience in Microsoft 365, Intune, Active Directory and enterprise IT.",
      },
      { name: "author", content: "Maha Pradeep Singh" },
      { property: "og:title", content: "Maha Pradeep Singh — System & Network Administrator" },
      {
        property: "og:description",
        content:
          "7+ years building reliable Microsoft 365, Intune & Windows Server environments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Maha Pradeep Singh — System & Network Administrator" },
      { name: "description", content: "ProSys Portal is a modern, dark-themed IT portfolio website showcasing system and network administration expertise." },
      { property: "og:description", content: "ProSys Portal is a modern, dark-themed IT portfolio website showcasing system and network administration expertise." },
      { name: "twitter:description", content: "ProSys Portal is a modern, dark-themed IT portfolio website showcasing system and network administration expertise." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b5dda178-77d7-4750-9980-226946696047/id-preview-39f2abad--68c03d9f-bee0-4a7f-a2f9-fe7d22f36c96.lovable.app-1777058822258.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b5dda178-77d7-4750-9980-226946696047/id-preview-39f2abad--68c03d9f-bee0-4a7f-a2f9-fe7d22f36c96.lovable.app-1777058822258.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
