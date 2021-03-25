import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  user_id: {
    type: String,
  },

  gallery: [
    {
      id: {
        type: String,
      },
      message: {
        type: String,
      },
      picture: {
        type: String,
      },
      pictureSmall: {
        type: String,
      },
      pictureMedium: {
        type: String,
      },
      pictureStored: {
        type: String,
      },
      timestamp: {
        type: String,
      },
    },
  ],
});

export default mongoose.model("gallery", gallerySchema);
