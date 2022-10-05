import Container from "@components/ui/container";
import ShippingIcon from "@components/icons/shipping-icon";
import ReturnIcon from "@components/icons/return-icon";
import AuthenticIcon from "@components/icons/authentic-icon";
import BrandIcon from "@components/icons/brand-icon";

const Deliver: React.FC = () => {
  return (
    <Container className="flex justify-between py-10 md:flex-row flex-col md:gap-0 gap-6">
      <div className="flex items-center">
        <div className="bg-gray-900 rounded-full p-4">
          <ShippingIcon />
        </div>
        <div className="ml-4">
          <h4 className="underline underline-offset-8 decoration-2 pb-3 text-2xl">
            Free Shipping
          </h4>
          <p>On Orders Above Rs 2000</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="bg-gray-900 rounded-full p-4">
          <ReturnIcon />
        </div>
        <div className="ml-4">
          <h4 className="underline underline-offset-8 decoration-2 pb-3 text-2xl">
            Easy Returns
          </h4>
          <p>15 - Day Return Policy</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="bg-gray-900 rounded-full p-4">
          <AuthenticIcon />
        </div>
        <div className="ml-4">
          <h4 className="underline underline-offset-8 decoration-2 pb-3 text-2xl">
            100% Authentic
          </h4>
          <p>Products Sourced Directly</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="bg-gray-900 rounded-full p-4">
          <BrandIcon />
        </div>
        <div className="ml-4">
          <h4 className="underline underline-offset-8 decoration-2 pb-3 text-2xl">
            Best Prices
          </h4>
          <p>2000+ Products</p>
        </div>
      </div>
    </Container>
  );
};

export default Deliver;
