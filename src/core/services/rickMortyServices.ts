import axios from "axios";
const { REACT_APP_API_URL } = process.env;

interface rickMortyResponse {
  result: string;
}

export async function fetchRickMorty(
  id: string,
): Promise<rickMortyResponse> {
  return await axios.get(REACT_APP_API_URL+'character/'+id);
}
