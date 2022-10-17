import colors from "../../colors";
import { FileImageTwoTone, setTwoToneColor } from "@ant-design/icons";
import { message, Modal, Upload } from "antd";
import React, { useEffect, useState } from "react";

import ImageService from "../../../Services/image";
import ImageRender from "./ImageRender";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const beforeUpload = (file) => {
  // const isLt2M = file.size / 1024 / 1024 < 2;
  // if (!isLt2M) {
  //   message.error("Image must smaller than 2MB!");
  // }
  // if dw to upload, uncomment
  // return false;
};

const ImageUpload = ({ productName, cb }) => {
  setTwoToneColor(colors.mainBlue);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const uploadAction = (file) => {
    // console.log("File: ", file);
    // Create a formdata
    const fd = new FormData();
    fd.append("img", file, file.name);
    fd.append("name", productName);
    // console.log(Array.from(fd));
    // uploadImage
    try {
      ImageService.uploadImage(fd).then((res) => {
        console.log("uploadedImage res: ", res);
        // Get id of image and save to product img src
        let img_id = res.id;
        file.img_id = img_id;
        // Pass back to parent
        cb(img_id);
      });
    } catch (e) {
      console.log("Error uploading: ", e);
      message.error("Upload failed!");
    }
  };
  const handleCancel = () => {
    setPreviewOpen(false);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ file: file, fileList: newFileList }) => {
    // console.log("New file list: ", newFileList);
    setFileList(newFileList);
    if (file.status === "error") {
      file.status = "done";
      message.info("Uploading...");
      message.success(`${file.name} uploaded successfully!`);
    }

    // if (file.status === "done") {
    //   message.success(`${file.name} uploaded successfully!`);
    // } else if (file.status === "uploading") {
    //   message.info("Uploading...");
    // } else if (file.status === "error") {
    //   message.error(`${file.name} was not uploaded!`);
    // }
  };

  // For Testing
  // useEffect(() => {
  //   ImageService.getAllImages().then((res) => {
  //     // console.log(res);
  //     res.map((r) => {
  //       console.log(r.id);
  //     });
  //   });
  // }, []);

  const uploadButton = (
    <div className="upload-drag-icon-container">
      <FileImageTwoTone
        className="upload-drag-icon"
        style={{ fontSize: "20px" }}
      />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Drag or click to upload image (max 5)
      </div>
    </div>
  );
  return (
    <>
      <Upload.Dragger
        action={uploadAction}
        multiple
        maxCount={5}
        listType="picture-card"
        accept=".png"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={beforeUpload}
        onRemove={(file) => {
          console.log("Removing file...");
          ImageService.deleteImageById(file.img_id);
        }}
      >
        {uploadButton}
      </Upload.Dragger>

      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default ImageUpload;
