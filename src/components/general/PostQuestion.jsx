import React, { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { postQuestion } from "../../apiCalls";
import imageCompression from "browser-image-compression";
import { toast } from "react-toastify";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import app from "../../config/firebase-config";

export default function PostQuestion() {
  const { user } = useContext(AuthContext);
  const content = useRef();
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [postImgUrl, setPostImgUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  function handleImageUpload(image) {
    var imageFile = image;
    var options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    imageCompression(imageFile, options)
      .then(function (compressedFile) {
        setFile(compressedFile);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  useEffect(() => {
    if (image) {
      handleImageUpload(image);
    }
  }, [image]);

  useEffect(() => {
    if (file) {
      setUploading(true);
      const fileName = new Date().getTime() + "_" + file.name;
      const storage = getStorage(app);
      const StorageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(StorageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          if (progress === 100) {
            setFile(null);
            setImage(null);
          }
        },
        (error) => {
          console.log(error);
          setUploading(false);
        },
        () => {
          setFile(null);
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setPostImgUrl(downloadURL);
            toast.success("file is uploaded!", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setUploading(false);
          });
        }
      );
    }
    setFile(null);
  }, [file]);

  const handlePosting = (e) => {
    e.preventDefault();
    postQuestion(content.current.value, user.user._id, postImgUrl);
    content.current.value = "";
    setFile(null);
    setImage(null);
    // setPostImgUrl(null);
  };

  const deleteCoverimg = () => {
    const storage = getStorage();
    const desertRef = ref(storage, postImgUrl);
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        setPostImgUrl(null);
        toast.success("image is remove!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        toast.error("somthing wrong while remove image!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <div className="w-full rounded-md bg-white p-4 shadow-md">
      <form onSubmit={handlePosting}>
        <div className="flex gap-x-4 h-26">
          <div className="h-10 flex-none w-10 bg-black rounded-full mt-2"></div>
          <textarea
            className="w-full p-2 focus:outline-none placeholder:text-2xl text-2xl"
            placeholder="What is your Question?"
            ref={content}
            required
          ></textarea>
        </div>
        {uploading && (
          <div className="flex items-center space-x-4">
            <h3 className="text-black">Uploading...</h3>
          </div>
        )}
        {postImgUrl && (
          <>
            <div className="w-full h-56 relative">
              <img
                src={postImgUrl}
                alt="post-img"
                className="absolute h-full w-full rounded-md object-cover"
              />
            </div>
            <span
              className="text-black justify-center cursor-pointer flex space-x-4 items-center mt-4 border px-4 py-2 w-56 rounded-md"
              onClick={deleteCoverimg}
            >
              <h6>Remove Image..</h6>
            </span>
          </>
        )}

        <div className="flex mt-2 justify-between items-center">
          <div>
            <label
              htmlFor="add-image"
              className="bg-purple-400 flex gap-2 cursor-pointer w-40 rounded-full py-1 px-6 text-white"
            >
              <svg
                xmlns="http://www.w3.org/1000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.4}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              Add Image
            </label>
            <input
              type="file"
              name=""
              id="add-image"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div>
            <button className="w-20 font-bold rounded-full px-2 py-1 bg-indigo-500 text-white">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
