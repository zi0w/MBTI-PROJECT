import { jsonApi } from "./axios";

export const getTestResults = async () => {
  try {
    const { data } = await jsonApi.get("/");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createTestResult = async (resultData) => {
  // 닉네임, 타임스탬프, 엠비티아이, 해석
  try {
    const { data } = await jsonApi.post("/", resultData);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTestResult = async (id) => {
  // const response = await jsonApi.
  // return response.data
};

export const updateTestResultVisibility = async (id, visibility) => {
  // const response = await jsonApi.
  // return response.data
};
