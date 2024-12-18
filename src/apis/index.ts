import { httpClient } from "@/apis/common";


async function getMapInfo(gameLevel: any, x: any, y: any) {
  const option = {
    url: `/apps/v1/game/search/${gameLevel}/${x}/${y}/info`,
    method: 'GET',
  };
  const response: { status: string } = await httpClient.request(option);
  return response;
}



async function getPictureInfo() {
  const option = {
    url: `/haishan-ai`,
    method: 'GET',
  };
  const response: { status: string } = await httpClient.request(option);
  return response;
}

export {
  getMapInfo, getPictureInfo
}