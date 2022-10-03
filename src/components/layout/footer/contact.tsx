import Container from "@components/ui/container";
import AppIcon from "@components/icons/app-icon";
import { useTranslation } from "next-i18next";
import EmailIcon from "@components/icons/email-icon";
import PhoneIcon from "@components/icons/phone-icon";
// import MailchimpForm from "@components/common/mailchimp-form";
// import GetExpertTipsForm from "@components/common/get-expert-tips-form"

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-900 text-white">
      <Container>
        <div className="grid md:grid-cols-3 grid-cols-1 md:py-8 py-4 md:gap-0 gap-6">
          <div>
            <div className="flex items-center">
              <EmailIcon />
              <p className="pl-1">{t(`common:text-subscribe-heading`)}</p>
            </div>
            {/*<GetExpertTipsForm layout="subscribe" />*/}
            <div className="pt-6">
              <input
                name="email"
                className="bg-gray-900 border-b-2 border-white placeholder-white"
                placeholder="Your Email"
              />
              <button className="ml-4 border-2 border-white rounded px-4">
                Send
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <AppIcon />
              <p className="pl-1">Experience the PureFace mobile app</p>
            </div>
            <div></div>
          </div>
          <div>
            <div className="flex items-center">
              <PhoneIcon />
              <p className="pl-1">
                For any help you may call us at <br /> 068 12345678
              </p>
            </div>
            <div className="pt-3">
              <h4>(Mon to Sat, 8 am to 6 pm)</h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
