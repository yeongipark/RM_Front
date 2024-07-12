import axios from "axios";
import Cookies from "js-cookie";

export const apiCilent = axios.create({
  baseURL: `http://${import.meta.env.VITE_BASEURL}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// // access 토큰이 만료되었을 시 interceptor 실행
// apiCilent.interceptors.response.use(
//   // 응답 처리
//   (res) => console.log(res),
//   // 에러 처리
//   async (error) => {
//     if (error.response && error.response?.status === 500) {
//       const errorCode = error.response.data.errorCode;
//       // access 토큰이 만료 되었다고 에러 코드가 오면 실행
//       if (errorCode === 7001) {
//         await tokenRefresh(instance);
//         const accessToken = localStorage.getItem("accessToken");
//         error.config.headers.Authorization = `Bearer ${accessToken}`;
//         // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
//         return apiCilent(error.config);
//       }
//     }
//   }
// );

// // 요청 보낼때 acesssToken 담아서 보내기
// apiCilent.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem("accessToken");
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// 토큰 재발급 함수
export const tokenRefresh = async () => {
  try {
    const refreshToken = Cookies.get("refresh-token");
    const { data } = await apiCilent.get("/주소", {
      RefreshToken: `Bearer ${refreshToken}`,
    });
    const newAccessToken = data.accessToken;
    // 재발급 access 토큰 저장
    localStorage.setItem("accessToken", newAccessToken);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
