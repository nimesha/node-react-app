import Gallery from "../../models/gallery.js";

export async function getOneUser(userId) {
  const oneUser = await Gallery.findOne({ user_id: userId });

  if (oneUser == null) {
    return false;
  } else {
    return oneUser;
  }
}
export async function getAllUsers() {
  const allUsers = await Gallery.find();
  return allUsers;
}


