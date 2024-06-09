"use server";
import axios, { AxiosError } from "axios";
export const signUp = async (data: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
  marketingAccept: boolean;
}) => {
  console.log(data);
  try {
    const response = await axios.post(`${process.env.API_URL}/register`, data);
    console.log(response);
    return response.status;
  } catch (err: any) {
    console.log(err);
    console.log(err?.response.status);
    return err?.response.status;
  }
};
export const login = async (data: { email: string; password: string }) => {
  console.log(data);
  try {
    const response = await axios.post(`${process.env.API_URL}/login`, data);
    console.log(response);
    // return response;
  } catch (err) {
    console.log(err);
    throw new Error("Invalid Credentials");
    // return err;
  }
};

export const checkUserLoggedIn = async (req) => {
  const cookies = req;
  console.log(cookies);
};
