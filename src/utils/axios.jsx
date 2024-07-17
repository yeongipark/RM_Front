import axios from "axios";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

// axios 인스턴스 생성
export const apiClient = axios.create({
  baseURL: `http://${import.meta.env.VITE_BASEURL}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    // withCredentials: true,
  },
});

// // access 토큰이 만료되었을 시 interceptor 실행
// apiClient.interceptors.response.use(
//   // 응답 처리
//   (res) => console.log(res),
//   // 에러 처리
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response &&
//       error.response?.status === 401 &&
//       !originalRequest._retry
//     ) {
//       // 무분별한 반복을 막기위해 flag 설정
//       originalRequest._retry = true;
//       try {
//         const errorCode = error.response.data.errorCode;
//         // access 토큰이 만료 되었다고 에러 코드가 오면 실행
//         if (errorCode === 7001) {
//           await tokenRefresh();
//           const accessToken = localStorage.getItem("accessToken");
//           error.config.headers.access_token = accessToken;
//           // 중단된 요청을 토큰 갱신 후 재요청
//           return apiClient(originalRequest);
//         }
//       } catch (e) {
//         console.log(e);
//         return Promise.reject(e);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// 요청 보낼때 acesssToken 담아서 보내기
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      // JSON 데이터 전송 시
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 토큰 재발급 함수
export const tokenRefresh = async () => {
  try {
    const refreshToken = cookie.get("refresh-token");
    const { data } = await apiClient.get("/주소", {
      RefreshToken: `Bearer ${refreshToken}`,
    });
    const newAccessToken = data.accessToken;
    console.log("새로운 access 토큰 발급!" + newAccessToken);
    // 재발급 access 토큰 저장
    localStorage.setItem("accessToken", newAccessToken);
    return newAccessToken;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
