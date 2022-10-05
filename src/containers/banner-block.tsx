import BannerCard from "@components/common/banner-card";
import { ROUTES } from "@lib/routes";
import { StaticBanner } from "@framework/types";

interface BannerProps {
  data: StaticBanner[];
  className?: string;
}

const BannerBlock: React.FC<BannerProps> = ({
  data,
  className = "mb-5 md:mb-7",
}) => {
  return (
    <div
      className={`${className} grid grid-cols-2 sm:grid-cols-8 gap-2 md:gap-2.5 max-w-[1920px] mx-auto`}
    >
      {data?.map((banner: any) => (
        <BannerCard
          key={`banner--key${banner.id}`}
          data={banner}
          href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
          effectActive={true}
          variant="default"
          className={
            banner.type === "medium"
              ? "col-span-full sm:col-span-4"
              : "col-span-1 sm:col-span-2"
          }
        />
      ))}
    </div>
  );
};

export default BannerBlock;
