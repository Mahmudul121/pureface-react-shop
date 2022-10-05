// import Card from "@components/common/card";
import NewCard from "@components/common/new_card";
import SectionHeader from "@components/common/section-header";
import Carousel from "@components/ui/carousel/carousel";
// import CardLoader from "@components/ui/loaders/card-loader";
// import CardRoundedLoader from "@components/ui/loaders/card-rounded-loader";
// import CardIconLoader from "@components/ui/loaders/card-icon-loader";
// import { useCategoriesQuery } from "@framework/category/categories.query";
// import { ROUTES } from "@lib/routes";
// import Alert from "@components/ui/alert";
import { SwiperSlide } from "swiper/react";
// import isEmpty from "lodash/isEmpty";
// import NotFoundItem from "@components/404/not-found-item";
// import { useTranslation } from "next-i18next";
import React from "react";
// import { getCategoryTypeImage } from "@lib/get-category-type-image";

import img1 from "../assets/a_shop/item1.svg";
import img2 from "../assets/a_shop/item2.svg";
import img3 from "../assets/a_shop/item3.svg";
import img4 from "../assets/a_shop/item4.svg";
import img5 from "../assets/a_shop/item5.svg";
import img6 from "../assets/a_shop/item6.svg";

interface CategoriesProps {
  sectionHeading: string;
  className?: string;
  variant?: "rounded" | "circle" | "modern" | "elegant";
  effectPosition?: "imageOnly" | "fullBody";
  type?: "image" | "vector";
}

const breakpoints = {
  "1720": {
    slidesPerView: 8,
    spaceBetween: 28,
  },
  "1400": {
    slidesPerView: 7,
    spaceBetween: 28,
  },
  "1025": {
    slidesPerView: 6,
    spaceBetween: 28,
  },
  "768": {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  "500 ": {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  "0": {
    slidesPerView: 3,
    spaceBetween: 12,
  },
};

const breakpointsCircle = {
  "1720": {
    slidesPerView: 8,
    spaceBetween: 48,
  },
  "1400": {
    slidesPerView: 7,
    spaceBetween: 32,
  },
  "1025": {
    slidesPerView: 6,
    spaceBetween: 28,
  },
  "768": {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  "500 ": {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  "0": {
    slidesPerView: 3,
    spaceBetween: 12,
  },
};

const modernBreakpoints = {
  "1780": {
    slidesPerView: 6,
    spaceBetween: 12,
  },
  "1280": {
    slidesPerView: 5,
    spaceBetween: 12,
  },
  // "1025": {
  // 	slidesPerView: 5,
  // 	spaceBetween: 12,
  // },
  "768": {
    slidesPerView: 4,
    spaceBetween: 12,
  },
  "480": {
    slidesPerView: 3,
    spaceBetween: 12,
  },
  "0": {
    slidesPerView: 2,
    spaceBetween: 12,
  },
};

const CategoryBlock: React.FC<CategoriesProps> = ({
  className = "mb-5 md:mb-7 lg:pb-1 xl:pb-0",
  //   sectionHeading,
  variant = "rounded",
  effectPosition = "imageOnly",
  //   type,
}) => {
  //   const { t } = useTranslation();

  // const { data: categories, isLoading: loading, error } = useCategoriesQuery({
  // 	limit: 60,
  // 	parent: null
  // });

  // if (!loading && isEmpty(categories?.data)) {
  // 	return (
  // 	<NotFoundItem text={t("text-no-categories-found")} />
  // 	)
  // }

  let sliderBreakpoints = {};
  if (variant === "rounded") {
    sliderBreakpoints = breakpoints;
  } else if (variant === "modern" || variant === "elegant") {
    sliderBreakpoints = modernBreakpoints;
  } else {
    sliderBreakpoints = breakpointsCircle;
  }

  return (
    <div className={className}>
      {/* <SectionHeader sectionHeading={sectionHeading} /> */}
      <SectionHeader sectionHeading={"Shop By Category"} />
      <Carousel
        breakpoints={sliderBreakpoints}
        buttonClassName="-mt-8 md:-mt-10"
      >
        <SwiperSlide>
          <NewCard
            item={"shop"}
            href={`#`}
            variant={variant}
            effectActive={true}
            effectPosition={effectPosition}
            image={img1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewCard
            item={"shop"}
            href={`#`}
            variant={variant}
            effectActive={true}
            effectPosition={effectPosition}
            image={img2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewCard
            item={"shop"}
            href={`#`}
            variant={variant}
            effectActive={true}
            effectPosition={effectPosition}
            image={img3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewCard
            item={"shop"}
            href={`#`}
            variant={variant}
            effectActive={true}
            effectPosition={effectPosition}
            image={img4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewCard
            item={"shop"}
            href={`#`}
            variant={variant}
            effectActive={true}
            effectPosition={effectPosition}
            image={img5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewCard
            item={"shop"}
            href={`#`}
            variant={variant}
            effectActive={true}
            effectPosition={effectPosition}
            image={img6}
          />
        </SwiperSlide>
      </Carousel>

      {/* <SwiperSlide key={`category--key-${category.id}`}>
									<Card
										item={category}
										href={`${ROUTES.CATEGORY}/${category.slug}`}
										variant={variant}
										effectActive={true}
										effectPosition={effectPosition}
                    image={getCategoryTypeImage(category, type)}
									/>
								</SwiperSlide> */}
      {/* {error ? (
				<Alert message={error?.message} />
			) : (
				<Carousel
					breakpoints={sliderBreakpoints}
					buttonClassName="-mt-8 md:-mt-10"
				> */}
      {/* {loading && !categories?.data */}
      {/* {loading && !categories
						? Array.from({ length: 10 }).map((_, idx) => {
								if (variant === "rounded") {
									return (
										<SwiperSlide key={`card-rounded-${idx}`}>
											<CardRoundedLoader uniqueKey={`card-rounded-${idx}`} />
										</SwiperSlide>
									);
								} else if (variant === "modern") {
									return (
										<SwiperSlide key={`card-rounded-${idx}`}>
											<CardIconLoader uniqueKey={`card-rounded-${idx}`} />
										</SwiperSlide>
									);
								}
								return (
									<SwiperSlide key={`card-circle-${idx}`}>
										<CardLoader uniqueKey={`card-circle-${idx}`} />
									</SwiperSlide>
								);
						  })
						: categories?.data?.map((category) => (
								<SwiperSlide key={`category--key-${category.id}`}>
									<Card
										item={category}
										href={`${ROUTES.CATEGORY}/${category.slug}`}
										variant={variant}
										effectActive={true}
										effectPosition={effectPosition}
                    image={getCategoryTypeImage(category, type)}
									/>
								</SwiperSlide>
						  ))}
				</Carousel>
			)} */}
    </div>
  );
};

export default CategoryBlock;
