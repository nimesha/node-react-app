import PhotoError from "../../service/exeptions/photoUploderError.js";

import { oneUser, allUsers, galleryDelete, galleryPost } from "../../service/photoService/photoManager.js"

export async function photoPost(galleryData, next) {
  try {
    // const validations = galleryDataValidartion(galleryData);
    // if (!validations) {
    return await galleryPost(galleryData);
    // }
  } catch (err) {
      throw err;
  }
}

export function getOneUser(user_id) {
  try {
    return oneUser(user_id);
  } catch (err) {
    if (err instanceof PhotoError) {
      throw err;
    }
  }
}

export function getAllusers() {
  try {
    return allUsers();
  } catch (err) {
    if (err instanceof PhotoError) {
      throw err;
    }
  }
}

export async function clearGallery(userId) {
  return galleryDelete(userId);
}
