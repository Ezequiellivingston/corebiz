import NewsletterService from "../services/NewsletterService";

const newsletterService = new NewsletterService();

export default () => {
  return {
    subscribeInNewsletter: newsletterService.subscribe,
  };
};
