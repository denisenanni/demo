import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[85vh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt={t('hero.title')}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-x-0 flex justify-center" style={{ top: '50vh', transform: 'translateY(-50%)' }}>
          <h1 className="font-hero text-[9vw] leading-none tracking-[0.15em] text-white/25 uppercase select-none pointer-events-none">{t('hero.title')}</h1>
        </div>
        <div className="absolute inset-x-0 bottom-10 flex justify-center">
          <ChevronDown />
        </div>
      </section>

      <section>
        <p>{t('home.subtitle')}</p>
        <h2 className="font-body">{t('home.heading')}</h2>
      </section>
    </>
  );
}

function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
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
