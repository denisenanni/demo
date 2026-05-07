import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <Navbar />

      <section className="relative w-full">
        <Image
          src="/images/hero.jpg"
          alt={t('hero.title')}
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <h1>{t('hero.title')}</h1>
          <ChevronDown />
        </div>
      </section>

      <section>
        <p>{t('home.subtitle')}</p>
        <h2>{t('home.heading')}</h2>
      </section>
    </>
  );
}

function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
