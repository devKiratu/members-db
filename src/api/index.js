import { toast } from "react-toastify";
import { requestHeaders, baseUrl } from "./config";

const updateData = async (data) => {
  try {
    const response = await fetch(`${baseUrl}/user/${data.id}`, {
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
