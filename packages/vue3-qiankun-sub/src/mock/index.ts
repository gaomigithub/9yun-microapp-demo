// 使用 Mock
import Mock from "mockjs";

const data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "swiper|4-8": [
    {
      swiperAlt: "@ctitle",
      swiperSrc: "@image('500x300', '#578bba', '#fff', 'jpg', 'Test Image')",
    },
  ],
  "notice|2-4": [
    {
      noticeId: "@cword(10,20)",
      noticeTitle: "@ctitle",
      noticeContent: "@csentence",
      status: "@cword(10,20)",
    },
  ],
  "message|4-8": [
    {
      messageId: "@cword(10,20)",
      messageTitle: "@ctitle",
      messageIntro: "@csentence",
      messageType: "@cword(10,20)",
      messageCover: "@image('200x200', '#f00', '#fff', 'jpg', 'H')",
      messageContent: "@csentence",
      status: "@cword(10,20)",
      sortId: "@cword(10,20)",
    },
  ],
  "sort|4-8": [
    {
      sortId: "@cword(10,20)",
      sortTitle: "@ctitle",
      sortType: "@cword(10,20)",
      status: "@cword(10,20)",
    },
  ],
  "view|4-8": [
    {
      "reviewId|1-10": 1,
      reviewRoot: "@ctitle",
      reviewContent: "@csentence",
      reviewRelevance: "@cword(10,20)",
      status: "@cword(10,20)",
      messageId: "@cword(10,20)",
    },
  ],
  "active|4-8": [
    {
      activeId: "@cword(10,20)",
      activeTitle: "@ctitle",
      activeIntro: "@cword(10,20)",
      activeCover: "@image('200x200', '#f00', '#fff', 'jpg', 'H')",
      activeContent: "@csentence",
      activeStart: "@date",
      activeEnd: "@date",
      activeAddress: "@cword(10,20)",
      status: "@cword(10,20)",
    },
  ],
  "service|4-8": [
    {
      serveId: "@cword(10,20)",
      serveTitle: "@ctitle",
      serveCover: "@image('200x200', '#f00', '#fff', 'jpg', 'H')",
      serveDesc: "@csentence",
      status: "@cword(10,20)",
    },
  ],
  "elder|4-8": [
    {
      homeId: "@cword(10,20)",
      homeTitle: "@ctitle",
      homePrice: "@cword(10,20)",
      homeCover: "@image('200x200', '#f00', '#fff', 'jpg', 'H')",
      homeAddress: "@cword(10,20)",
      homeTag: "@cword(10,20)",
      homeBedNum: "@cword(10,20)",
      homeType: "@cword(10,20)",
      homeNature: "@cword(10,20)",
      homeArea: "@cword(10,20)",
      homeSetup: "@cword(10,20)",
      homeConnect: "@cword(10,20)",
      homeLongitude: "@cword(10,20)",
      homeLatitude: "@cword(10,20)",
      homeIntro: "@cword(10,20)",
      status: "@cword(10,20)",
    },
  ],
  "user|1": [
    {
      userId: "@cword(10,20)",
      userAcc: "@cword(10,20)",
      userPwd: "@cword(10,20)",
      userName: "@cword(10,20)",
      userSex: "@cword(10,20)",
      userAge: "@cword(10,20)",
      userIde: "@cword(10,20)",
      userPhone: "@cword(10,20)",
      userCity: "@cword(10,20)",
      userAddress: "@cword(10,20)",
    },
  ],
  "userActive|4-8": [
    {
      activeId: "@cword(10,20)",
      activeTitle: "@ctitle",
      activeIntro: "@cword(10,20)",
      activeCover: "@image('200x200', '#f00', '#fff', 'jpg', 'H')",
      activeContennt: "@csentence",
      activeStart: "@cword(10,20)",
      activeEnd: "@cword(10,20)",
      activeAddress: "@cword(10,20)",
      status: "@cword(10,20)",
    },
  ],
  "userServe|4-8": [
    {
      serveId: "@cword(10,20)",
      serveTitle: "@ctitle",
      serveCover: "@image('200x200', '#f00', '#fff', 'jpg', 'H')",
      serveDesc: "@csentence",
      status: "@cword(10,20)",
    },
  ],
});

Mock.mock("/api/swiper/list", "get", () => {
  return data.swiper;
});
Mock.mock("/api/message/list", "get", () => {
  return data.message;
});
Mock.mock("/api/sort/list", "get", () => {
  return data.sort;
});
Mock.mock("/api/review/list", "get", () => {
  return data.view;
});
Mock.mock("/api/active/list", "get", () => {
  return data.active;
});
Mock.mock("/api/service/list", "get", () => {
  return data.service;
});
Mock.mock("/api/elder/list", "get", () => {
  return data.elder;
});
Mock.mock("/api/user/list", "get", () => {
  return data.user;
});
Mock.mock("/api/userActive/list", "get", () => {
  return data.userActive;
});
Mock.mock("/api/userServe/list", "get", () => {
  return data.userServe;
});
