import { useTranslations } from "next-intl";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[70vh] z-10">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt={t("hero.title")}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
          <h1 className="font-hero text-[9vw] leading-none tracking-[0.15em] text-light/50 uppercase select-none pointer-events-none">
            {t("hero.title")}
          </h1>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center z-10">
          <ChevronDown />
        </div>
      </section>

      <section className="relative overflow-hidden bg-background min-h-[70vh] flex items-start justify-center">
        <img src="/images/deco_0.svg" alt="" aria-hidden="true" className="absolute top-0 left-0 z-0 w-[25%]" />
        <img src="/images/deco_1.svg" alt="" aria-hidden="true" className="absolute top-0 right-0 z-0 w-[65%]" />

        <div className="relative z-10 w-full px-8 pt-12 pb-16 flex flex-col items-center">
          <div className="w-full max-w-6xl text-center mb-12">
            <p className="font-body text-accent text-4xl">
              {t("home.subtitle")}
            </p>
            <h2 className="font-hero text-5xl text-primary mt-6">
              {t("home.heading")}
            </h2>
            <p className="font-mhei mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          <div className="flex gap-12 items-start bg-accent/50 p-10 rounded-[40px] w-[95%] shadow-[-12px_12px_24px_rgba(0,0,0,0.4)]">
            <div className="flex-1 min-w-0">
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
              <p className="font-mhei mt-4 text-primary/70">
                {t("chiSono.p4")}
              </p>
              <p className="font-mhei mt-4 text-primary/70">
                {t("chiSono.p5")}
              </p>
            </div>
            <div className="relative w-1/2 shrink-0 aspect-square [filter:drop-shadow(-18px_18px_35px_rgba(0,0,0,0.8))]">
              <div className="absolute inset-0 rounded-[30px] overflow-hidden">
                <Image
                  src="/images/chisono.jpg"
                  alt={t("chiSono.title")}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-20">
        <img
          src="/images/deco_2.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="/images/logo_sfondo.svg"
          alt=""
          aria-hidden="true"
          className="absolute w-[50%] opacity-40"
        />
      </section>
    </>
  );
}

function ChevronDown() {
  return (
    <img
      src="/images/chevrondownicon.svg"
      alt=""
      aria-hidden="true"
      className="animate-bounce w-20 translate-y-8"
    />
  );
}
