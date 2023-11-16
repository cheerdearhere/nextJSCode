/** @type {import('next').NextConfig} */
// const API_KEYS = {
//     NAVER_API: {
//         CLIENT_ID: "aaabbbccc",
//         CLIENT_SECRET: "asdjbgfwkjehbfcskajdbakfwlk"
//     }
//     //보관용 키가 있고 이를 노출하고 싶지 않다면 rewrites와 함께 사용
// }
const nextConfig = {
    // reactStrictMode: true,
    // async redirects(){ request 처리할때 요청 url을 변경시킴
    //     return [
    //         {
    //             source: "/api/",
    //             destination: "/",
    //             permanent: false,
    //         }
    //     ]
    // }
    // async rewrites(){ request처리할때 민감 정보를 감춤
    //     return [
    //         {
    //             source: "/api/mongo", // client에 보여지는 url
    //             destination: `https://api.getdata.org/3/movie/popular?api_key=${API_KEYS.NAVER_API.CLIENT_SECRET}`, //해당 요청에 매핑된 실제 url
    //         }
    //     ]
    // }
    /**
     * 차이점이라면 redirects는 request url의 패턴이 일치하면 destination으로 리다이렉션처리를 해주지만,
     * rewrites에서는 request url의 패턴을 확인하고 일치하게되면 페이지 이동이 아닌 매핑주소로 요청을 하게된다.
     *
     * 즉, 요청 주소와 실제로 요청하는 주소가 분리되게 되어 위에서 언급한 민감한 데이터가 포함된 GET방식의 REST API에서 민감한 부분을 제거하여 요청할 수 있게된다.
     */
}

module.exports = nextConfig
