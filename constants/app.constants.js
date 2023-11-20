import "dotenv/config";

export const SERVER_PORT = process.env.SERVER_PORT;
//↑ 이게 .env파일을 바로 읽어올 수 있게 하는 거라는디
//임포트에 있는건 nodejs.com에서 가져온 es6전용 추가연결코드 라는디
// 이 일렬의 구조? 아직 덜이해해서 나중에 추가공부필요

// 오류가 계속났는데 SERVER_PORT = process.env 사이에 3000번 포트를 적어서 생겼다
// 적지마~~!
