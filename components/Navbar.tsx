import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("nav");

  return (
    <nav className="font-body flex items-center bg-accent px-6 py-1">
      <div className="flex-1">
        <Image src="/images/logo.png" alt={t("logo")} width={56} height={56} />
      </div>
      <div className="flex gap-12">
        <Link
          href="/"
          className="font-arial text-base leading-normal font-semibold tracking-widest text-primary"
        >
          {t("home")}
        </Link>
        <Link
          href="/servizi"
          className="font-arial text-base leading-normal font-semibold tracking-widest text-primary"
        >
          {t("services")}
        </Link>
        <Link
          href="/contatti"
          className="font-arial text-base leading-normal font-semibold tracking-widest text-primary"
        >
          {t("contact")}
        </Link>
      </div>
      <div className="flex-1" />
    </nav>
  );
}
