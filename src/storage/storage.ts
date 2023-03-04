import {
  ADD_ACTION,
  CAT_RESPONSE,
  LIKED_CAT_ITEM,
  REMOVE_ACTION,
} from "../constants";

export const writeToLocalStorage = (catToAdd: CAT_RESPONSE, action: string) => {
  try {
    let catArray: CAT_RESPONSE[] = readFromLocalStorage();

    switch (action) {
      case ADD_ACTION:
        if (catArray === null) {
          catArray = [catToAdd];
        } else {
          const position = catArray?.findIndex((element) => {
            return element.id === catToAdd.id;
          });
          if (position === -1) {
            catArray!.push(catToAdd);
          } else {
            alert("cat already liked");
          }
        }
        break;
      case REMOVE_ACTION:
        if (catArray !== null) {
          const position = catArray?.findIndex((element) => {
            return element.id === catToAdd.id;
          });
          if (position! > -1) {
            catArray!.splice(position!, 1);
          }
        }
        break;
    }

    localStorage.setItem(LIKED_CAT_ITEM, JSON.stringify(catArray));
  } catch (err) {
    console.error(err);
  }
};

export const readFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(LIKED_CAT_ITEM)!);
  } catch (err) {
    console.error(err);
  }
};
