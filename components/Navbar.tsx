import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Navbar() {
  const t = useTranslations('nav');

  return (
    <nav className="flex items-center bg-accent px-6 py-4">
      <div className="flex-1">
        <div className="size-8 rounded-full bg-black" aria-label={t('logo')} />
      </div>
      <div className="flex gap-8">
        <Link href="/">{t('home')}</Link>
        <Link href="/servizi">{t('services')}</Link>
        <Link href="/contatti">{t('contact')}</Link>
      </div>
      <div className="flex-1" />
    </nav>
  );
}
