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
    return response.data;
  },
  getSingleTask: async (id: number) => {
    let response = await axiosInstance.get(`/tasks/${id}`);
    return response.data;
  },
  postTasks: async (data: any) => {
    let response = await axiosInstance.post("/tasks", data);
    return response;
  },
  putTasks: async (id: number, data: any) => {
    let response = await axiosInstance.put(`/tasks/${id}`, data);
    return response;
  },
  getUsers: async () => {
    let response = await axiosInstance.get("/users");
    return response.data;
  },
  getSingleUser: async (id: number) => {
    let response = await axiosInstance.get(`/users/${id}`);
    return response.data;
  },
  postUsers: async (data: any) => {
    let response = await axiosInstance.post("/users", data);
    return response;
  },
  putUsers: async (data: any) => {
    let response = await axiosInstance.put("/users", data);
    return response;
  },
  getCategories: async () => {
    let response = await axiosInstance.get("/categories");
    return response.data;
  },
  getSingleCategory: async (id: number) => {
    let response = await axiosInstance.get(`/categories/${id}`);
    return response.data;
  },
  postCategory: async (data: any) => {
    let response = await axiosInstance.post("/categories", data);
    return response;
  },
  putCategory: async (id: number, data: any) => {
    let response = await axiosInstance.put(`/categories/${id}`, data);
    return response;
  },


  //gets for the filter

  getTaskByUser: async (id: number) => {
    let response = await axiosInstance.get(`/tasks/user/${id}`);
    return response.data;
  },
  getTaskByCategory: async (id: number) => {
    let response = await axiosInstance.get(`/tasks/categories/${id}`);
    return response.data;
  },
  getTaskByStatus: async (id: number) => {
    let response = await axiosInstance.get(`/tasks/status/${id}`);
    return response.data;
  },
  getTaskByPriority: async (id: number) => {
    let response = await axiosInstance.get(`/tasks/priority/${id}`);
    return response.data;
  }
  
}

