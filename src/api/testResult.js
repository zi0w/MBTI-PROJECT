import { jsonApi } from "./axios";

export const getTestResults = async () => {
  try {
    const { data } = await jsonApi.get("/testResults");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createTestResult = async (resultData) => {
  // 닉네임, 타임스탬프, 엠비티아이, 해석
  try {
    const { data } = await jsonApi.post("/testResults", resultData);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTestResult = async (id) => {
  const response = await jsonApi.delete(`/testResults/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async ({ id, visibility }) => {
  const response = await jsonApi.patch(`/testResults/${id}`, {
    visibility,
  });
  return response.data;
};
