// import Widgets from "./widgets";
import Copyright from "./copyright";
import Contact from "./contact";
import Deliver from "./deliver";
// import { footer } from "./data";
// const { widgets } = footer;

const Footer: React.FC = () => (
  <footer className="border-b-4 border-heading mt-9 md:mt-11 lg:mt-16 3xl:mt-20 pt-2.5 lg:pt-0 2xl:pt-2">
    <Contact />
    {/* <Widgets widgets={widgets} /> */}
    {/* <Widgets widgets={widgets} /> */}
    <Deliver />
    <Copyright />
  </footer>
);

export default Footer;
