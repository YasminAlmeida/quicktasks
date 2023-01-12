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
    return response.data;
  },
  putTasks: async (id: number, data: any) => {
    let response = await axiosInstance.put(`/tasks/${id}`, data);
    return response.data;
  },
  deleteTasks: async (id: number) => {
    let response = await axiosInstance.delete(`/tasks/${id}`);
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
  putUsers: async (id:number, data: any) => {
    let response = await axiosInstance.put(`/users/${id}`, data);
    return response.data;
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
  getStatus: async () =>{
    let response = await axiosInstance.get(`/tasks/search?/status_id`);
    return response.data;
  },
  getPriority: async () =>{
    let response = await axiosInstance.get(`/tasks/search?/priority_id`);
    return response.data;
  },
  //gets for the filter
  getByUserAndStatusAndPriorityAndCategory: async (params?: IParams) => {
    let response = await axiosInstance.get(`/tasks/search`,{
      params
    });
    return response.data;
  }  
}
export interface IParams {
  user_id : number | null,
  status_id : number | null, 
  priority_id : number | null,
  category_id : number | null
}
