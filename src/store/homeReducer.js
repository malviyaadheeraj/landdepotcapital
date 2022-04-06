import {
  SET_PROPERTY_LIST,
  SET_BLOG_LIST,
  SET_BLOG_LIST_ID,
  SET_PROPERTY_LIST_ID,
  SET_HOME_BLOG_LIST,
  SET_HOME_PROPERTY_LIST,
  SET_USER_PROFILE_LIST,
  SET_MY_INVESTMENT_LIST,
  SET_PROPERTY_LIKED,
  SET_DOCUMENT_FILES,
  SET_LOGIN,
  SET_REGISTER,
  SET_UPDATE_USER_DATA,
  SET_FORGOT_PASSWORD,
  SET_CONTACT_US,
  SET_UPDATE_INVEST_LIST,
  SET_RESET_PASSWORD,
  SET_USER_LOGOUT,
  SET_SINGLE_INVEST_LIST,
  SET_TEAM_LIST,
  SET_ABOUT_LIST,
  SET_HOME_LIST,
  SET_CLIENT_REVIEW_LIST,
  SET_ADIVISORS_LIST,
  SET_OUR_STORY_LIST,
  SET_TEAM_DATA,
  SET_CAREAR_LIST,
  SET_EVENT_WEBINARS_LIST,
  SET_FAQ_LIST,
  SET_TERM_LIST,
  SET_PRIVACY_LIST,
  SET_RISK_PAGE_LIST,
  SET_SETTING_LIST,
  SET_EVENT_WEBINARS_LIST_BY_ID,
  SET_COUNTRIES,
  SET_OLD_PROPERTY,
  SET_REFERAL,
  SET_PROMOTION,
  SET_COUPON_DATA,
} from "./types";

const initalState = {};

const homeReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        getLogin: action.payload,
      };
    case SET_REGISTER:
      return {
        ...state,
        getRegister: action.payload,
      };
    case SET_UPDATE_USER_DATA:
      return {
        ...state,
        getUpdateUserData: action.payload,
      };
    case SET_FORGOT_PASSWORD:
      return {
        ...state,
        getForgotPassword: action.payload,
      };
    case SET_RESET_PASSWORD:
      return {
        ...state,
        getResetPassword: action.payload,
      };
    case SET_CONTACT_US:
      return {
        ...state,
        getContactUs: action.payload,
      };
    case SET_UPDATE_INVEST_LIST:
      return {
        ...state,
        getUpdateInvestList: action.payload,
      };
    case SET_PROPERTY_LIST:
      return {
        ...state,
        getProperties: action.payload,
      };
    case SET_OLD_PROPERTY:
      return {
        ...state,
        getOldProperties: action.payload,
      };
    case SET_PROPERTY_LIST_ID:
      return {
        ...state,
        getPropertiesId: action.payload,
      };
    case SET_BLOG_LIST:
      return {
        ...state,
        getBlogs: action.payload,
      };
    case SET_BLOG_LIST_ID:
      return {
        ...state,
        getBlogsId: action.payload,
      };
    case SET_HOME_BLOG_LIST:
      return {
        ...state,
        getHomeBlogs: action.payload,
      };
    case SET_HOME_PROPERTY_LIST:
      return {
        ...state,
        getHomeProperties: action.payload,
      };
    case SET_USER_PROFILE_LIST:
      return {
        ...state,
        getUserProfileDetails: action.payload,
      };
    case SET_MY_INVESTMENT_LIST:
      return {
        ...state,
        getInvestmentList: action.payload,
      };
    case SET_PROPERTY_LIKED:
      return {
        ...state,
        isPropertyliked: action.payload,
      };
    case SET_DOCUMENT_FILES:
      return {
        ...state,
        getDocument: action.payload,
      };
    case SET_USER_LOGOUT:
      return {
        ...state,
        getUserLogout: action.payload,
      };
    case SET_SINGLE_INVEST_LIST:
      return {
        ...state,
        singleInvestList: action.payload,
      };
    case SET_TEAM_LIST:
      return {
        ...state,
        getTeamList: action.payload,
      };
    case SET_ABOUT_LIST:
      return {
        ...state,
        getAboutList: action.payload,
      };
    case SET_HOME_LIST:
      return {
        ...state,
        getHomeList: action.payload,
      };
    case SET_CLIENT_REVIEW_LIST:
      return {
        ...state,
        getClientReviewList: action.payload,
      };
    case SET_ADIVISORS_LIST:
      return {
        ...state,
        getAdvisorsList: action.payload,
      };
    case SET_OUR_STORY_LIST:
      return {
        ...state,
        getOurStoryList: action.payload,
      };
    case SET_TEAM_DATA:
      return {
        ...state,
        getTeamData: action.payload,
      };
    case SET_CAREAR_LIST:
      return {
        ...state,
        getCareerList: action.payload,
      };
    case SET_EVENT_WEBINARS_LIST:
      return {
        ...state,
        getEventWebinarsList: action.payload,
      };
    case SET_EVENT_WEBINARS_LIST_BY_ID:
      return {
        ...state,
        getEventWebinarsListById: action.payload,
      };
    case SET_FAQ_LIST:
      return {
        ...state,
        getFaqList: action.payload,
      };
    case SET_TERM_LIST:
      return {
        ...state,
        getTermList: action.payload,
      };
    case SET_PRIVACY_LIST:
      return {
        ...state,
        getPrivacyList: action.payload,
      };
    case SET_RISK_PAGE_LIST:
      return {
        ...state,
        getRiskPageList: action.payload,
      };
    case SET_SETTING_LIST:
      return {
        ...state,
        getSettingList: action.payload,
      };
    case SET_COUNTRIES:
      return {
        ...state,
        getCountries: action.payload,
      };
    case SET_REFERAL:
      return {
        ...state,
        getReferalUsers: action.payload,
      };
    case SET_PROMOTION:
      return {
        ...state,
        getPromotionData: action.payload,
      };
    case SET_COUPON_DATA:
      return {
        ...state,
        getCouponData: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
