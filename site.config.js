/**
 * Site Configuration for Tanmay Yadav Portfolio
 *
 * Change `SITE_URL` below whenever you deploy to a Netlify URL or custom domain.
 * Example Netlify URL: "https://tanmay-yadav-portfolio.netlify.app"
 * Example Custom Domain: "https://tanmayyadav.netlify.app"
 */
const SITE_CONFIG = {
  SITE_URL: "https://tanmayyadav.netlify.app",
  AUTHOR_NAME: "Tanmay Yadav",
  ONLINE_ALIAS: "Tanmay Hitech",
  DEFAULT_IMAGE: "/assets/images/tanmay-yadav-profile.jpg",
  SOCIAL_LINKS: {
    LINKEDIN: "https://share.google/uFASJ8FSPojPedL9B",
    GITHUB: "https://github.com/tanmayhitech",
    INSTAGRAM: "https://www.instagram.com/p/DX4O-o1FNcB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
