import Axios from "./axios";
import {
  SET_PROPERTY_LIST,
  SET_BLOG_LIST,
  SET_BLOG_LIST_ID,
  SET_PROPERTY_LIST_ID,
  SET_HOME_PROPERTY_LIST,
  SET_HOME_BLOG_LIST,
  SET_USER_PROFILE_LIST,
  SET_MY_INVESTMENT_LIST,
  SET_PROPERTY_LIKED,
  SET_LOGIN,
  SET_REGISTER,
  SET_UPDATE_USER_DATA,
  SET_FORGOT_PASSWORD,
  SET_CONTACT_US,
  SET_UPDATE_INVEST_LIST,
  SET_RESET_PASSWORD,
  SET_USER_LOGOUT,
  SET_TEAM_LIST,
  SET_SINGLE_INVEST_LIST,
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
  SET_RISK_PAGE_LIST,
  SET_PRIVACY_LIST,
  SET_SETTING_LIST,
  SET_EVENT_WEBINARS_LIST_BY_ID,
  SET_COUNTRIES,
  SET_OLD_PROPERTY,
} from "./types";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("landdepot-token")}`,
  },
};

// LOGIN
export const onLogin = (data, history) => (dispatch) => {
  Axios.post("/login", data).then((res) => {
    if (res.data.status === true) {
      localStorage.setItem("landdepot-login", "true");
      localStorage.setItem("landdepot-token", res.data.token);
      history.push("/login-dashboard/my-profile");
      window.location.reload();
    }
    dispatch({
      type: SET_LOGIN,
      payload: res.data,
    });
  });
};

// REGISTER
export const onRegister = (data, history) => (dispatch) => {
  Axios.post("/register", data).then((res) => {
    if (res.data.status === true) {
      localStorage.setItem("user-landdepot", JSON.stringify(res.data));
      history.push("/thank-you");
      window.location.reload();
    }
    dispatch({
      type: SET_REGISTER,
      payload: res.data,
    });
  });
};

// GET PROPERTY LIST
export const getPropertyList = (data) => (dispatch) => {
  Axios.get("/propertyList").then((res) => {
    dispatch({
      type: SET_PROPERTY_LIST,
      payload: res.data.propertyList,
    });
  });
};

// GET OLD PROPERTY LIST
export const getOldPropertyList = (data) => (dispatch) => {
  Axios.get("/sold_property_list").then((res) => {
    dispatch({
      type: SET_OLD_PROPERTY,
      payload: res.data,
    });
  });
};

// GET PROPERTY LIST ID
export const getPropertyListId = (data) => (dispatch) => {
  Axios.get(`singleProperty?property_id=${data.id}`).then((res) => {
    dispatch({
      type: SET_PROPERTY_LIST_ID,
      payload: res.data,
    });
  });
};

// GET BLOG LIST
export const getBlogList = (data) => (dispatch) => {
  Axios.get("/blogList").then((res) => {
    dispatch({
      type: SET_BLOG_LIST,
      payload: res.data.$blogs,
    });
  });
};

// GET BLOG LIST ID
export const getBlogListId = (data) => (dispatch) => {
  Axios.get(`/singleBlog?blog_id=${data.id}`).then((res) => {
    dispatch({
      type: SET_BLOG_LIST_ID,
      payload: res.data,
    });
  });
};

export const getSingleInvestDetails = (data) => (dispatch) => {
  Axios.get(`/myInvestmentView?invest_id=${data.id}`, config).then((res) => {
    dispatch({
      type: SET_SINGLE_INVEST_LIST,
      payload: res.data.data[0],
    });
  });
};

// GET HOME PROPERTY LIST
export const getHomePropertyList = (data) => (dispatch) => {
  Axios.get("/homepropertyList").then((res) => {
    dispatch({
      type: SET_HOME_PROPERTY_LIST,
      payload: res.data.propertyList,
    });
  });
};

// GET HOME BLOG LIST
export const getHomeBlogList = (data) => (dispatch) => {
  Axios.get("/homeblogList").then((res) => {
    dispatch({
      type: SET_HOME_BLOG_LIST,
      payload: res.data.blogs,
    });
  });
};

// GET USER PROFILE DATA
export const getUserProfileData = (data) => (dispatch) => {
  Axios.get("/userProfile", config).then((res) => {
    dispatch({
      type: SET_USER_PROFILE_LIST,
      payload: res.data.data[0],
    });
  });
};

// UPDATE USER DATA
export const onUpdateUserData = (data) => (dispatch) => {
  Axios.post("/updateUserProfile", data, config).then((res) => {
    dispatch({
      type: SET_UPDATE_USER_DATA,
      payload: res.data,
    });
  });
};

// GET INVEST LIST
export const getMyInvestList = (data) => (dispatch) => {
  Axios.get("/myInvestment", config).then((res) => {
    dispatch({
      type: SET_MY_INVESTMENT_LIST,
      payload: res.data.data,
    });
  });
};

// UPDATE INVEST LIST
export const updateInvestList = (data, history) => (dispatch) => {
  Axios.post("/investNow", data, config).then((res) => {
    if (res.data.status === true) {
      history.push("/dashboardHome");
    }
    dispatch({
      type: SET_UPDATE_INVEST_LIST,
      payload: res.data,
    });
  });
};

// FORGOT PASSWORD
export const onForgotPassword = (data) => (dispatch) => {
  Axios.post("/userforgot", data, config).then((res) => {
    dispatch({
      type: SET_FORGOT_PASSWORD,
      payload: res.data,
    });
  });
};

// RESET PASSWORD
export const resetPassword = (data, token, history) => (dispatch) => {
  Axios.post(`/userresetpassword/${token}`, data, config).then((res) => {
    if (res.data.status === true) {
      history.push("/login");
    }
    dispatch({
      type: SET_RESET_PASSWORD,
      payload: res.data,
    });
  });
};

// PROPERTY LIKED
export const onPropertyLiked = (data) => (dispatch) => {
  Axios.post("/propertylike", data, config).then((res) => {
    dispatch({
      type: SET_PROPERTY_LIKED,
      payload: res.data,
    });
  });
};

// CONTACT US
export const onContactUs = (data) => (dispatch) => {
  Axios.post("/contactUs", data).then((res) => {
    dispatch({
      type: SET_CONTACT_US,
      payload: res.data,
    });
  });
};

// ON USER LOGOUT
export const onLogoutUser = (data, history) => (dispatch) => {
  Axios.get("/userlogout", data, config).then((res) => {
    dispatch({
      type: SET_USER_LOGOUT,
      payload: res.data,
    });
  });
};

export const onGoogleLogin = (data, history) => (dispatch) => {
  Axios.post("/social", data).then((res) => {
    if (res.data.status === true) {
      localStorage.setItem("landdepot-login", "true");
      localStorage.setItem("landdepot-token", res.data.data.token);
      history.push("/login-dashboard/my-profile");
      window.location.reload();
    }
  });
};

export const onFacebookLogin = (data, history) => (dispatch) => {
  Axios.post("/social", data).then((res) => {
    if (res.data.status === true) {
      localStorage.setItem("landdepot-login", "true");
      localStorage.setItem("landdepot-token", res.data.data.token);
      history.push("/login-dashboard/my-profile");
      window.location.reload();
    }
  });
};

// On TEAM LIST
export const onTeamList = (data) => (dispatch) => {
  Axios.get("/teamlist").then((res) => {
    dispatch({
      type: SET_TEAM_LIST,
      payload: res.data.data,
    });
  });
};

// ABOUT LIST DATA
export const onAboutListData = (data) => (dispatch) => {
  Axios.get("/aboutUs").then((res) => {
    dispatch({
      type: SET_ABOUT_LIST,
      payload: res.data.data,
    });
  });
};

// HOME DATA
export const onHomeListData = (data) => (dispatch) => {
  Axios.get("/homePage").then((res) => {
    dispatch({
      type: SET_HOME_LIST,
      payload: res.data.data,
    });
  });
};

// CLIENT REVIEW DATA
export const onClientReviewData = (data) => (dispatch) => {
  Axios.get("/clientreviewlist").then((res) => {
    dispatch({
      type: SET_CLIENT_REVIEW_LIST,
      payload: res.data.data,
    });
  });
};

// GET ADVISORS DATA
export const onAdvisorsData = (data) => (dispatch) => {
  Axios.get("/advisorPage").then((res) => {
    dispatch({
      type: SET_ADIVISORS_LIST,
      payload: res.data.data,
    });
  });
};

// GET OUR STORY DATA
export const onOurStoryData = (data) => (dispatch) => {
  Axios.get("/ourStoryPage").then((res) => {
    dispatch({
      type: SET_OUR_STORY_LIST,
      payload: res.data.data,
    });
  });
};

// GET TEAM DATA
export const onTeamData = (data) => (dispatch) => {
  Axios.get("/teamPage").then((res) => {
    dispatch({
      type: SET_TEAM_DATA,
      payload: res.data.data,
    });
  });
};

// GET CAREER DATA
export const onCareerData = (data) => (dispatch) => {
  Axios.get("/careersPage").then((res) => {
    dispatch({
      type: SET_CAREAR_LIST,
      payload: res.data.data,
    });
  });
};

// GET EVENT AND WEBINARS
export const onEventWebinarsData = (data) => (dispatch) => {
  Axios.get("/eventlist").then((res) => {
    dispatch({
      type: SET_EVENT_WEBINARS_LIST,
      payload: res.data.data,
    });
  });
};

// GET EVENT AND WEBINARS BY ID
export const onEventWebinarsDataByID = (data) => (dispatch) => {
  Axios.get(`/singleevent?event_id=${data.id}`).then((res) => {
    dispatch({
      type: SET_EVENT_WEBINARS_LIST_BY_ID,
      payload: res.data.event,
    });
  });
};

// GET FEQ DATA
export const onFaqData = (data) => (dispatch) => {
  Axios.get("/faqdetail").then((res) => {
    dispatch({
      type: SET_FAQ_LIST,
      payload: res.data.data,
    });
  });
};

// GET TERM DATA
export const onTermData = (data) => (dispatch) => {
  Axios.get("/termPage").then((res) => {
    dispatch({
      type: SET_TERM_LIST,
      payload: res.data.data,
    });
  });
};

// GET PRIVACY DATA
export const onPrivacyData = (data) => (dispatch) => {
  Axios.get("/privacyPage").then((res) => {
    dispatch({
      type: SET_PRIVACY_LIST,
      payload: res.data.data,
    });
  });
};

// GET RISK PAGE DATA
export const onRiskPageData = (data) => (dispatch) => {
  Axios.get("/keyRiskPage").then((res) => {
    dispatch({
      type: SET_RISK_PAGE_LIST,
      payload: res.data.data,
    });
  });
};

// GET SETTING DATA
export const onSettingData = (data) => (dispatch) => {
  Axios.get("/setting").then((res) => {
    dispatch({
      type: SET_SETTING_LIST,
      payload: res.data,
    });
  });
};

// Countries
export const getCountriesData = (data) => (dispatch) => {
  Axios.get("countrylist").then((res) => {
    dispatch({
      type: SET_COUNTRIES,
      payload: res.data.countrylist,
    });
  });
};
