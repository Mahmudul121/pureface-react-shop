import Container from "@components/ui/container";
import { siteSettings } from "@settings/site.settings";
import { useTranslation } from "next-i18next";
// import { Image } from "@components/ui/image";

const year = new Date().getFullYear();
const Copyright = () => {
  const { t } = useTranslation("footer");
  return (
    <div className="bg-gray-900 text-white md:pb-0 pb-14">
      <Container>
        <div className="flex gap-x-16 py-4 md:flex-nowrap flex-wrap md:gap-16 gap-3 md:justify-center justify-evenly">
          <a href="">Terms & Conditions</a>
          <a href="">Shipping Policy</a>
          <a href="">Cancellation Policy</a>
          <a href="">Privacy Policy</a>
        </div>
        <p className="text-white text-center text-xs md:text-[13px] lg:text-sm leading-6 pb-4">
          {t("text-copyright")} &copy; {year}&nbsp;
          <a
            className="font-semibold text-white duration-200 ease-in-out hover:text-body"
            href={siteSettings.author.websiteUrl}
          >
            {t("PureFace")}
          </a>
          &nbsp; {t("text-all-rights-reserved")}
        </p>
      </Container>
    </div>
  );
};

export default Copyright;
