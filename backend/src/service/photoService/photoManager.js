import Gallery from "../../models/gallery.js";
import PhotoUploderError from "../exeptions/photoUploderError.js";
import PhotoError from "../exeptions/photoUploderError.js";

import { getOneUser, getAllUsers } from './photoService.js';



export async function galleryPost(galleryData) {
  const userId = galleryData.user_id;
  const userchecker = await getOneUser(userId);

  if (userchecker == false) {
    const gallery = new Gallery({});
    await gallery.save();
    gallery.set(galleryData);

    const verifyCreate = await gallery.save();

    if (verifyCreate.user_id == userId) {
      return "Photo Gallery Created";
    } else {
      throw new PhotoUploderError(
        "Photo Uplode Error",
        "Photo Gallery is not Created! Plz Try Again Later"
      );
    }
  } else {
    const gallery = await userchecker.updateOne(galleryData);
    if (gallery.nModified != 0) {
      return "Photo Gallery Updated";
    } else {
      throw new PhotoUploderError(
        "Photo Uplode Error",
        "Photo Gallery is not Updated! Plz Try Again Later"
      );
    }
  }
}

export async function oneUser(userId) {
    const user = await getOneUser(userId);

    if (user == false) {
        throw new PhotoError("Photo Finder Error", "Invalid userId");

    } else {
        return user;
    }

}

export async function allUsers() {
    const users = await getAllUsers();
    return users;
}

export async function galleryDelete(userId) {
  const user = await getOneUser(userId);
  if(user == false) {
    throw new PhotoError("Photo Delete Error", "Invalid user_Id")
  }

  const clearData = user.set({
    gallery: [],
  });
  const verifyClear = await user.save();

  if (verifyClear.gallery.id) {
    return "User Gallery Successfuly Deleted";
  } else {
    throw new PhotoError(
      "Gallery Detele Error",
      "User Gallery Delete unsuccessfuly! plz try again"
    );
  }
}
