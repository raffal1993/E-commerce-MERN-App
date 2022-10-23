import axios from 'axios';

const BASE_URL = `http://localhost:5000/api/`;

const TOKEN = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2YwNzc3MTJiZGY1NzA5YThmYmE5YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjQ2NjEwOSwiZXhwIjoxNjY2NzI1MzA5fQ.TLC6AAhwXLbwPu5BEF1LhYUrBkVhSM4f5kaOzIZkcy4`;

const publicRequest = axios.create({
  baseURL: BASE_URL,
});

const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: TOKEN },
});

export { publicRequest, userRequest };
