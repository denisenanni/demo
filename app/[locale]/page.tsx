import { useTranslations } from "next-intl";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt={t("hero.title")}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
          <h1 className="font-hero text-[9vw] leading-none tracking-[0.15em] text-white/35 uppercase select-none pointer-events-none">
            {t("hero.title")}
          </h1>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <ChevronDown />
        </div>
      </section>

      <section className="relative overflow-hidden bg-background min-h-[70vh] flex items-start justify-center">
        <svg
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full z-0"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <circle
            cx="0"
            cy="0"
            r="380"
            fill="none"
            stroke="#6b5b4e"
            strokeWidth="120"
            opacity="0.6"
          />
          <circle
            cx="1200"
            cy="0"
            r="580"
            fill="none"
            stroke="#6b5b4e"
            strokeWidth="220"
            opacity="0.6"
          />
        </svg>

        <div className="relative z-10 w-full max-w-6xl px-8 pt-12 pb-16">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-3xl">
              {t("home.subtitle")}
            </p>
            <h2 className="font-hero text-5xl text-primary/80 mt-6">
              {t("home.heading")}
            </h2>
            <p className="font-mhei mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          <div className="flex gap-12 items-start bg-accent/60 p-10 rounded-2xl w-full">
            <div className="flex-1">
              <h2 className="font-hero text-5xl text-primary/80">
                {t("chiSono.title")}
              </h2>
              <p className="font-mhei mt-6 text-primary/70">
                {t("chiSono.p1")}
              </p>
              <p className="font-mhei mt-4 text-primary/70">
                {t("chiSono.p2")}
              </p>
              <p className="font-mhei mt-4 text-primary/70">
                {t("chiSono.p3")}
              </p>
            </div>
            <div className="relative w-64 shrink-0 aspect-[3/4]">
              <Image
                src="/images/chisono.jpg"
                alt={t("chiSono.title")}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-bounce text-black"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
