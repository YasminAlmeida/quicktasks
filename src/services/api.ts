import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"*"
  }
});

export const api = {
  
  getTasks: async () => {
    let response = await axiosInstance.get("/tasks");
    return response;
  },
  postTasks: async (data: any) => {
    let response = await axiosInstance.post("/tasks", data);
    return response;
  },
  putTasks: async (data: any) => {
    let response = await axiosInstance.put("/tasks", data);
    return response;
  },
  getUsers: async () => {
    let response = await axiosInstance.get("/users");
    return response.data;
  },
  postUsers: async (data: any) => {
    let response = await axiosInstance.post("/users", data);
    return response;
  },
  putUsers: async (data: any) => {
    let response = await axiosInstance.put("/users", data);
    return response;
  }
}

