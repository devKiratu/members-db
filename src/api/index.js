import { requestHeaders, url } from "./config";

const updateData = async (data) => {
  try {
    await fetch(`${url}/${data._id}`, {
      method: "PATCH",
      ...requestHeaders,
      body: JSON.stringify(data),
    });
  } catch (error) {}
};

export { updateData };
