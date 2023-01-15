export const loadState = () => {
  return JSON.parse(localStorage.getItem("members"));
};

export const updateLocalStorage = (items) => {
  try {
    if (items.data) localStorage.setItem("members", JSON.stringify(items));
  } catch (error) {}
};

export const clearLocalStorage = () => {
  localStorage.removeItem("members");
};
