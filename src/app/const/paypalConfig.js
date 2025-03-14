import { appSettings } from "@/app/const/settings.js";
import { getUserLanguage } from "@/shared/lib/helpers/getUserLanguage.js";

const locale = getUserLanguage();

const languagePaypal = () => {
    return locale.language + "_" + locale.language.toUpperCase();
}

export const paypalOptions = {
    "client-id": appSettings.PAYPAL_CLIENT_ID,
    currency: "EUR",
    locale: languagePaypal(),
    components: "buttons",
    "buyer-country": "BG",
    debug: true,
    "data-page-type": "checkout",
};
