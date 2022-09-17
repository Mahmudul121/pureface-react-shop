import BannerCard from "@components/common/banner-card";
import Container from "@components/ui/container";
//import CollectionBlock from "@containers/collection-block";
import BannerCarouselBlock from "@containers/banner-carousel-block";
//import Divider from "@components/ui/divider";
//import DownloadApps from "@components/common/download-apps";
//import Support from "@components/common/support";
//import Subscription from "@components/common/subscription";
import ProductsFlashSaleBlock from "@containers/product-flash-sale-block";
import BannerBlock from "@containers/banner-block";
import HeroBlock from "@containers/hero-block";
//import BrandBlock from "@containers/brand-block";
import CategoryBlock from "@containers/category-block";
// import FeatureBlock from "@containers/feature-block";
import { getLayout } from "@components/layout/layout";
//import FlashSaleBlock from "@components/product/feeds/flash-sale-product-feed";
//import BestSellerProductFeed from "@components/product/feeds/best-seller-product-feed";
//import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
//import { useEffect } from "react";
import { ROUTES } from "@lib/routes";
//import { useUI } from "@contexts/ui.context";
import {
  standardDemoBanner as banner,
  standardDemoHeroBanner as heroBanner,
  standardDemoPromotionBanner as promotionalBanner,
  classicDemoBannerTwo as bannerTwo,
  topBrands,
  purefaceBanners,
  trendingStoreBanner,
  featuredBrands,
  budgetBuys
} from "@data/static/banners";
//import { collectionData } from "@data/static/collection";

export { getStaticProps } from "@framework/ssr/homepage/standard";

export default function Home() {
  //const { openModal, setModalView } = useUI();
/*
  useEffect(() => {
    setModalView("NEWSLETTER_VIEW");
    setTimeout(() => {
      openModal();
    }, 2000);
  }, []);
*/
  return (
    <>
      <HeroBlock data={heroBanner} />

      <Container>
        {/* <FlashSaleBlock /> */}

        <div className="flex items-center justify-center -mt-2 lg:-mt-2.5 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
          <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
            Watch & Buy
          </h3>
        </div>        
        <BannerCarouselBlock banners={promotionalBanner} />

        <CategoryBlock sectionHeading="text-shop-by-category" />

        <div className="flex items-center justify-center -mt-2 lg:-mt-2.5 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
          <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
            Eid Sale
          </h3>
        </div>  
        <BannerBlock data={bannerTwo} />
        
        {/* best seller */}
        <ProductsFlashSaleBlock 
          date={"2023-03-01T01:02:03"} 
          variant="slider"
        />

        {/* Top Brands */}
        <div className="flex items-center justify-center -mt-2 lg:-mt-2.5 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
          <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
            Top Brands
          </h3>
        </div>
        <BannerBlock data={topBrands} />

        {/* Only At Pureface */}
        <div className="flex items-center justify-center -mt-2 lg:-mt-2.5 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
          <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
            Only At Pureface
          </h3>
        </div>
        <BannerBlock data={purefaceBanners} />

        {/* Trending Store */}
        <div className="flex items-center justify-center -mt-2 lg:-mt-2.5 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
          <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
            Trending Store
          </h3>
        </div>        
        <BannerCarouselBlock banners={trendingStoreBanner} />


        {/* Featured Brands */}
        <div className="flex items-center justify-center -mt-2 lg:-mt-2.5 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
          <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
            Featured Brand
          </h3>
        </div>
        <BannerBlock data={featuredBrands} />

        {/* Budget Buys */}
        <div className="flex items-center justify-center -mt-2 lg:-mt-2.5 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
          <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
            Budget Buys
          </h3>
        </div>
        <BannerBlock data={budgetBuys} />

        {/*
        <Divider />
        <BestSellerProductFeed />
        */}
        <BannerCard
          data={banner}
          href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="h-28 sm:h-auto"
        />

        {/*
        <NewArrivalsProductFeed />

        <BrandBlock sectionHeading="text-top-brands" />

        <CollectionBlock data={collectionData} />

        <DownloadApps className="bg-linen" />
        <Support />
        <Subscription className="bg-linen px-5 sm:px-8 md:px-16 2xl:px-24" />
        */}
      </Container>
    </>
  );
}

Home.getLayout = getLayout;

