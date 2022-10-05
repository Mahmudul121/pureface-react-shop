import React, { useRef } from "react";
import SearchIcon from "@components/icons/search-icon";
// import ShopIcon from "@components/icons/shop-icon";
// import AppIcon from "@components/icons/app-icon";
// import GiftCardIcon from "@components/icons/gift-card-icon";
// import HelpIcon from "@components/icons/help-icon";
import Logo from "@components/ui/logo";
import { useUI } from "@contexts/ui.context";
import { ROUTES } from "@lib/routes";
import { addActiveScroll } from "@utils/add-active-scroll";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { useAtom } from "jotai";
import { authorizationAtom } from "@store/authorization-atom";
import { menu, menuSecond } from "@data/static/menus";
import HeaderMenu from "@components/layout/header/header-menu";
import HeaderSecondMenu from "@components/layout/header/header-second-menu";
const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });
const CartButton = dynamic(() => import("@components/cart/cart-button"), {
  ssr: false,
});

interface Props {
  variant?: "default" | "modern";
}

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const Header: React.FC<Props> = ({ variant = "default" }) => {
  const { openSidebar, setDrawerView, openSearch, openModal, setModalView } =
    useUI();
  const [isAuthorize] = useAtom(authorizationAtom);
  const { t } = useTranslation("common");
  const siteHeaderRef = useRef() as DivElementRef;
  addActiveScroll(siteHeaderRef);

  function handleLogin() {
    setModalView("LOGIN_VIEW");
    return openModal();
  }
  function handleMobileMenu() {
    setDrawerView("MOBILE_MENU");
    return openSidebar();
  }

  return (
    <header
      id="siteHeader"
      ref={siteHeaderRef}
      className="w-full h-16 sm:h-20 lg:h-20 relative z-20"
    >
      <div className="fixed top-0 w-full bg-gray-900 text-white p-3 md:flex justify-between ">
        <div>
          <p className="m-0 md:px-3 px-0">Free Delivery above Rs. 2000</p>
        </div>
        {/* <div className="flex md:flex-nowrap flex-wrap md:gap-0 gap-3 md:py-0 py-2">
          <div className="flex items-center">
            <ShopIcon />
            <p className="m-0 px-2">Create Your Shop</p>
          </div>
          <div className="flex items-center md:pl-4 pl-0">
            <AppIcon />
            <p className="m-0 px-2">Get App</p>
          </div>
          <div className="flex items-center md:pl-4 pl-0">
            <GiftCardIcon />
            <p className="m-0 px-2">Gift Card</p>
          </div>
          <div className="flex items-center md:pl-4 pl-0 pr-1">
            <HelpIcon />
            <p className="m-0 px-2">Help</p>
          </div>
        </div> */}
      </div>
      <div className="innerSticky text-gray-700 body-font fixed md:top-12 top-12 bg-white w-full h-16 sm:h-20 lg:h-20 z-20 transition duration-200 ease-in-out">
        <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full  ltr:pl-4 ltr:lg:pl-6 ltr:pr-4 ltr:lg:pr-6 rtl:pr-4 rtl:lg:pr-6 rtl:pl-4 rtl:lg:pl-6 ">
          <button
            aria-label="Menu"
            className={`menuBtn md:flex ${
              variant !== "modern"
                ? "hidden lg:hidden px-5 2xl:px-7"
                : "ltr:pr-7 rtl:pl-7 hidden md:block"
            } flex-col items-center justify-center flex-shrink-0 h-full outline-none focus:outline-none`}
            onClick={handleMobileMenu}
          >
            <span className="menuIcon">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </span>
          </button>
          <Logo />

          {variant !== "modern" ? (
            <HeaderMenu
              data={menu}
              className="hidden lg:flex ltr:md:ml-6 ltr:xl:ml-10 rtl:md:mr-6 rtl:xl:mr-10"
            />
          ) : (
            ""
          )}

          <div className="hidden md:flex justify-end items-center space-x-6 lg:space-x-5 xl:space-x-8 2xl:space-x-10 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto flex-shrink-0">
            <button
              className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
              onClick={openSearch}
              aria-label="search-button"
            >
              <SearchIcon />
            </button>
            <div className="-mt-0.5 flex-shrink-0">
              <AuthMenu
                isAuthorized={isAuthorize}
                href={ROUTES.ACCOUNT}
                className="text-sm xl:text-base text-heading font-semibold"
                btnProps={{
                  className:
                    "text-sm xl:text-base text-heading font-semibold focus:outline-none",
                  children: t("text-sign-in"),
                  onClick: handleLogin,
                }}
              >
                {t("text-page-my-account")}
              </AuthMenu>
            </div>
            <CartButton />
          </div>
        </div>

        <div className="md:flex hidden text-blue-600 border-t border-slate-200 items-center justify-center mx-auto max-w-[1920px] h-12 w-full bg-white  ltr:pl-4 ltr:lg:pl-6 ltr:pr-4 ltr:lg:pr-6 rtl:pr-4 rtl:lg:pr-6 rtl:pl-4 rtl:lg:pl-6 border-b-2 ">
          {variant !== "modern" ? (
            <HeaderSecondMenu
              data={menuSecond}
              className="hidden lg:flex ltr:md:ml-6 ltr:xl:ml-10 rtl:md:mr-6 rtl:xl:mr-10"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
