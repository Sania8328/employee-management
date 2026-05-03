import axios from "axios"

const API = "https://69f7306ddd0c226688ed8469.mockapi.io/Employee"

export const getEmployees = () => axios.get(API)
export const addEmployee = (data) => axios.post(API, data)
export const updateEmployee = (id, data) => axios.put(`${API}/${id}`, data)
export const deleteEmployee = (id) => axios.delete(`${API}/${id}`)