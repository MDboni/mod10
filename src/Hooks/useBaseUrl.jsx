import axios from "axios";
import { useEffect } from "react";
import useAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true
});

const useBaseUrl = () => {
  const { SingOutUser } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    // Add response interceptor
    instance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        console.log('Error interceptor:', error);

        const status = error.response?.status;
        if (status === 401 || status === 403) {
          console.log('Need to logout user due to unauthorized access');
          SingOutUser()
            .then(() => {
              console.log('Logged out user');
              navigate('/signIn')
            })
            .catch(err => console.log('Logout failed:', err));
        }

        return Promise.reject(error);
      }
    );
  }, [SingOutUser]);

  return instance;
};

export default useBaseUrl;
