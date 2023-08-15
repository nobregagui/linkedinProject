import axios from "axios";
import { baseUrl } from "../services/api";
import {
  IPropsFetchData,
  IPropsFetchDataHeader,
} from "./interfaces";

export function returnFullUrl(path: string | undefined): string {
  return `${"http://localhost:1337"}${path}`;
}

export const fetchData = async ({
  setImage,
  index,
  setData,
}: IPropsFetchData) => {
  try {
    const informationResponse = await axios.get(
      `${baseUrl}/information-and-images?populate=*`
    );
    const formattedData = informationResponse.data.data[index].attributes;
    setData(formattedData);
    if (setImage) {
      setImage(formattedData);
    }
  } catch (error) {
    return error;
  }
};

export const fetchDataHeader = async ({
  setData,
  setImageLogo,
}: IPropsFetchDataHeader) => {
  try {
    const menuResponse = await axios.get(`${baseUrl}/menu?populate=*`);
    const logo = menuResponse.data.data.attributes.logo.data.attributes.url;
    const formattedData = menuResponse.data.data.attributes.link.map(
      (item: any) => ({
        menuItem: item.label,
        menuItemContact: item.menuItemContact,
        urlMenuItem: item.url,
      })
    );
    if (setImageLogo) {
      setImageLogo(logo);
    }
    if (setData) {
      setData(formattedData);
    }
  } catch (error) {
    return error;
  }
};
