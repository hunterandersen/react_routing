import * as MyConstants from "./MyConstants";

export class APIService {
  static controller = new AbortController();

  static async getList(listName) {
    return fetch(`${MyConstants.GHIBLI_BASE_URL}${listName}`)
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
        return false;
      });
  }

  static async getItem(itemList, itemName) {
    return fetch(`${MyConstants.GHIBLI_BASE_URL}${itemList}${itemName}`)
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
        return false;
      });
  }
}
