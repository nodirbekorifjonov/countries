import loaderToggle from "./loader";

const request = async (resource) => {
  loaderToggle(true);
  const req = await fetch(resource);
  console.log(req);
  if (!req.ok) {
    loaderToggle(false);
    throw new Error("SOmething went wrong!");
  }
  const data = await req.json();
  loaderToggle(false);
  return data;
};

export default request;
