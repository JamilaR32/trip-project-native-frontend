import { instance } from ".";

const getAllTrips = async () => {
  const res = await instance.get("/api/trips");
  return res.data;
};

export { getAllTrips };
