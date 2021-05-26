import axios from "axios";
const { REACT_APP_API_URL } = process.env;

interface loginResponse {
  token: string;
}

export async function fetchLogin(
  user: string,
  password: string
): Promise<loginResponse> {
  return await axios.post(REACT_APP_API_URL+'auth/signin', { user, password });
}
