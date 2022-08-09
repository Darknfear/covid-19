import axios from "axios";
import { ROOT_API } from '../constants/api.constants';

export const getCountries = () => axios.get(`${ROOT_API}/countries`);
