import { toast } from "react-toastify";
import { requestHeaders, url } from "./config";

const updateData = async (data) => {
  try {
    const response = await fetch(`${url}/${data._id}`, {
      method: "PATCH",
      ...requestHeaders,
      body: JSON.stringify(data),
    });
    if (response.status === 200)
      toast("Server updated successfully", {
        type: "success",
      });
  } catch (error) {
    toast("Error: Could not update server", { type: "error" });
  }
};

export { updateData };
