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
        <img
          src="/images/deco_0.svg"
          alt=""
          aria-hidden="true"
          className="absolute -top-8 left-0 z-0 w-[25%]"
        />
        <img
          src="/images/deco_1.svg"
          alt=""
          aria-hidden="true"
          className="absolute -top-8 right-0 z-0 w-[65%]"
        />

        <div className="relative z-10 w-full px-8 pt-12 pb-16 flex flex-col items-center">
          <div className="w-full max-w-6xl text-center mb-12">
            <p className="font-body text-accent text-4xl">
              {t("home.subtitle")}
            </p>
            <h2 className="font-hero text-5xl text-primary mt-6">
              {t("home.heading")}
            </h2>
            <p className="font-mhei text-lg mt-6">
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
              <p className="font-mhei text-lg mt-6 text-primary/70">
                {t("chiSono.p1")}
              </p>
              <p className="font-mhei text-lg mt-4 text-primary/70">
                {t("chiSono.p2")}
              </p>
              <p className="font-mhei text-lg mt-4 text-primary/70">
                {t("chiSono.p3")}
              </p>
              <p className="font-mhei text-lg mt-4 text-primary/70">
                {t("chiSono.p4")}
              </p>
              <p className="font-mhei text-lg mt-4 text-primary/70">
                {t("chiSono.p5")}
              </p>
            </div>
            <div className="relative w-1/2 shrink-0 aspect-square [filter:drop-shadow(-12px_12px_24px_rgba(0,0,0,0.4))]">
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

      <section className="relative min-h-[80vh] flex flex-col items-center justify-start pt-16 z-20">
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
          className="absolute top-40 left-1/2 w-[70%] -translate-x-1/2 -translate-y-[15%] opacity-40"
        />
        <div className="relative z-10 w-[90%] text-center">
          <h2 className="font-hero text-5xl text-primary/80">
            {t("cosaFaccio.title")}
          </h2>
          <div className="relative">
            <div className="relative flex mt-12 justify-between">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className={
                    n === 2
                      ? "relative w-[28%] flex flex-col items-center"
                      : "w-[28%]"
                  }
                >
                  <div className="flex flex-col w-full overflow-hidden rounded-tl-[40px] rounded-br-[40px] [filter:drop-shadow(-12px_12px_24px_rgba(0,0,0,0.7))]">
                    <div className="relative w-full aspect-[3/4]">
                      <Image
                        src={`/images/cosafaccio${n}.jpg`}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-accent px-5 py-4 flex flex-col items-center gap-2">
                      <p className="font-mhei text-sm text-primary/70">
                        {t(`cosaFaccio.card${n}`)}
                      </p>
                      <img
                        src="/images/chevrondownicon.svg"
                        alt=""
                        aria-hidden="true"
                        className="w-6 animate-bounce"
                      />
                    </div>
                  </div>
                  {n === 2 && (
                    <img
                      src="/images/vector.svg"
                      alt=""
                      aria-hidden="true"
                      className="absolute bottom-0 translate-y-full w-14 z-10"
                    />
                  )}
                </div>
              ))}
            </div>
            <img
              src="/images/layer_32.svg"
              alt=""
              aria-hidden="true"
              className="w-[75%] mx-auto"
            />
            <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 translate-y-1/2 z-20 px-20 py-5 bg-accent rounded-full">
              <span className="font-arial font-semibold tracking-widest text-background uppercase text-4xl">
                {t("cosaFaccio.cta")}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-accent mt-24 flex items-center px-8 py-4 justify-between">
        <div className="flex flex-col">
          <p className="font-mhei text-sm text-dark">{t("footer.tagline")}</p>
          <p className="font-mhei text-sm text-dark">{t("footer.tagline2")}</p>
        </div>
        <div className="flex gap-3">
          <div className="w-14 h-14 rounded-full bg-dark" />
          <div className="w-14 h-14 rounded-full bg-dark" />
          <div className="w-14 h-14 rounded-full bg-dark" />
        </div>
      </section>

      <section className="w-full h-[50vh]">
        <iframe
          src="https://maps.google.com/maps?q=Milan,Italy&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          title="Map"
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
