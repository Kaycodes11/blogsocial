import axios from "axios";

/* sending a GET request to server from a route
  sending a POST request to server from a route
  sending a PUT request to server from a route
  sending a DELETE request to server from a route  */

export const createHtttpClient = ({ headers, method, data }) => {
  return axios.create({
    headers,
    method,
    data
  });
};
