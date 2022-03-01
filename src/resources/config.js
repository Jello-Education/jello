const jelloApiUrl = process.env.REACT_APP_JELLO_API_URL;
const jelloStorageUrl = process.env.REACT_APP_JELLO_STORAGE_URL;
const jelloDiscordUrl = process.env.REACT_APP_JELLO_DISCORD_URL;
const youtubeApiUrl = process.env.REACT_APP_YOUTUBE_API_URL;
const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const vimeoApiUrl = process.env.REACT_APP_VIMEO_API_URL;
const vimeoToken = process.env.REACT_APP_VIMEO_API_TOKEN;
const lolPatchVersion = process.env.REACT_APP_LOL_PATCH;
const lolDataDragonApiUrl = process.env.REACT_APP_LOL_DATA_DRAGON_API_URL;
const pagarmeEncryptionKey = process.env.REACT_APP_PAGARME_ENCRYPTION_KEY;
const mixpanelTokenStaging = process.env.REACT_APP_MIXPANEL_TOKEN_STAGING;
const mixpanelTokenProd = process.env.REACT_APP_MIXPANEL_TOKEN_PROD;
const environment = process.env.NODE_ENV;
const gamesIndicationFormsUrl = process.env.REACT_APP_GAMES_INDICATION_FORMS;
const userTermsUrl = process.env.REACT_APP_USER_TERMS;
const jelloAppEnv = process.env.REACT_APP_ENVIRONMENT;
const jelloLp = process.env.REACT_APP_LANDING_PAGE;
const jelloWhatsappEnv = process.env.REACT_APP_WHATSAPP;
const jelloOldUrl = process.env.REACT_APP_JELLO_OLD_URL;

export const jello = jelloApiUrl;
export const jelloOld = jelloOldUrl;
export const jelloApp = jelloAppEnv;
export const jelloWhatsapp = jelloWhatsappEnv;
export const jelloLpUrl = jelloLp;
export const jelloStorage = jelloStorageUrl;
export const jelloDiscord = jelloDiscordUrl;
export const lolPatch = lolPatchVersion;
export const pagarmeKey = pagarmeEncryptionKey;
export const env = environment;
export const gamesIndicationForms = gamesIndicationFormsUrl;
export const userTermsLink = userTermsUrl;
export const streamApiKey = process.env.REACT_APP_STREAM_API_KEY;
export const streamAppId = process.env.REACT_APP_STREAM_APP_ID;
export const streamMainFeedId = process.env.REACT_APP_STREAM_MAIN_FEED_ID;
export const pageHotmartCart = process.env.REACT_APP_HOTMART_SUBSCRIPTION;

export const mixpanelToken =
  env === 'production' && mixpanelTokenProd
    ? mixpanelTokenProd
    : mixpanelTokenStaging;

export const vendors = {
  youtube: {
    url: youtubeApiUrl,
    key: youtubeApiKey,
  },
  vimeo: {
    url: vimeoApiUrl,
    token: vimeoToken,
  },
  lolDataDragonApi: {
    url: lolDataDragonApiUrl,
  },
  lolDataDragonCdn: {
    url: pageHotmartCart,
  },
};
