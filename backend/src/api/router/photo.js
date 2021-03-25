import express from "express";
const router = express();

import PhotoError from "../../service/exeptions/photoUploderError.js";
import {
  photoPost,
  getAllusers,
  getOneUser,
  clearGallery,
} from "../controller/photoCotroller.js";


router.get("/api/v1/photos/user/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;

    const user = await getOneUser(userId);

    res.status(200).send(user);
  } catch (err) {
    if (err instanceof PhotoError) {
      res.status(422).send({
        erroType: err.error,
        errorMessage: err.message,
        errorCode: 2010,
      });
    } else {
      next(new Error(err));
    }
  }
});

router.get("/api/v1/photos/users", async (req, res, next) => {
  try {
    const allUser = await getAllusers();

    res.status(200).send(allUser);
  } catch (err) {
    if (err instanceof PhotoError) {
      res.status(422).send({
        erroType: err.error,
        errorMessage: err.message,
        errorCode: 2010,
      });
    } else {
      next(new Error(err));
    }
  }
});

router.post("/api/v1/photos", async (req, res, next) => {
  try {
    const galleryData = req.body;

    if (!galleryData.user_id) {
      throw new PhotoError("Photo Uploder Error", "No user Id found");
    }
    const photouploder = await photoPost(galleryData, next);
    res.status(200).send({
      message: photouploder,
    });
  } catch (err) {
    if (err instanceof PhotoError) {
      res.status(422).send({
        erroType: err.error,
        errorMessage: err.message,
        errorCode: 2010,
      });
    } else {
      next(new Error(err));
    }
  }
});

router.delete("/api/v1/photos/user/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userGalleryDelete = await clearGallery(userId);
    res.status(200).send({
      message: userGalleryDelete,
    });
  } catch (err) {
    if (err instanceof PhotoError) {
      res.status(422).send({
        erroType: err.error,
        errorMessage: err.message,
        errorCode: 2010,
      });
    } else {
      next(new Error(err));
    }
  }
});

export default router;
