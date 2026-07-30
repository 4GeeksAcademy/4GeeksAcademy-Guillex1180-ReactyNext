import Link from "next/link";
import { Compass, ArrowRight, Globe, Heart, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-emerald-950 dark:via-black dark:to-amber-950" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-800/20" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl dark:bg-amber-800/20" />

        <div className="relative z-10 max-w-3xl">
          {/* Badge */}
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            <Globe className="h-4 w-4" />
            Descubre experiencias únicas
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white">
            Explora el mundo
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              sin límites
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
            Más de 100 experiencias seleccionadas para viajeros intrépidos.
            Encuentra tu próxima aventura, guarda tus favoritos y vive el viaje
            de tus sueños.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/experiences"
              className="flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-200 dark:shadow-emerald-900/30 dark:hover:shadow-emerald-900/40"
            >
              Explorar experiencias
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/favorites"
              className="flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-8 py-3.5 text-base font-semibold text-zinc-700 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <Heart className="h-5 w-5" />
              Mis favoritos
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="relative z-10 mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-200 bg-white/60 p-6 text-left backdrop-blur-sm transition-colors hover:border-emerald-200 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-emerald-800"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950">
                <feature.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 px-4 py-16 text-center dark:bg-emerald-800">
        <h2 className="text-3xl font-bold text-white">
          ¿Listo para tu próxima aventura?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-emerald-100">
          Explora nuestras experiencias y empieza a planificar el viaje de tus
          sueños hoy mismo.
        </p>
        <Link
          href="/experiences"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
        >
          Comenzar ahora
          <ArrowRight className="h-5 w-5" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white px-4 py-8 text-center dark:border-zinc-800 dark:bg-black">
        <div className="flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <Compass className="h-4 w-4 text-emerald-500" />
          <span>
            &copy; {new Date().getFullYear()} Wanderlust Labs. Todos los
            derechos reservados.
          </span>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Search,
    title: "Búsqueda inteligente",
    description:
      "Encuentra experiencias por título con búsqueda por expresiones regulares.",
  },
  {
    icon: Heart,
    title: "Favoritos",
    description:
      "Guarda tus experiencias favoritas y accede a ellas cuando quieras.",
  },
  {
    icon: Globe,
    title: "100+ destinos",
    description:
      "Desde Capadocia hasta la Antártida, el mundo está en tus manos.",
  },
];
