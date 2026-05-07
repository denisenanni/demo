import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import localFont from 'next/font/local';
import '../globals.css';

const franklinGothic = localFont({
  src: '../../public/fonts/FranklinGothicHeavyRegular.ttf',
  variable: '--font-franklin',
});

const arialNarrow = localFont({
  src: '../../public/fonts/ArialNarrowRegular.ttf',
  variable: '--font-arial-narrow',
});

const mheiPRC = localFont({
  src: '../../public/fonts/MHeiPRCMedium.ttf',
  variable: '--font-mhei',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${franklinGothic.variable} ${arialNarrow.variable} ${mheiPRC.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
