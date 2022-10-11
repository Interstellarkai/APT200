import colors from "../../colors";
import { FileImageTwoTone, setTwoToneColor } from "@ant-design/icons";
import { message, Modal, Upload } from "antd";
import React, { useState } from "react";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const beforeUpload = (file) => {
  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isLt2M;
};

const ImageUpload = () => {
  setTwoToneColor(colors.mainBlue);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);

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

  const handleChange = ({ file: file }) => {
    // setFileList(newFileList);

    if (file.status === "done") {
      message.success(`${file.name} uploaded successfully!`);
    } else if (file.status === "error") {
      message.error(`${file.name} was not uploaded!`);
    }
  };

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
        action="https://localhost:3000"
        multiple
        maxCount={5}
        listType="picture-card"
        accept=".png, .jpeg"
        // fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={beforeUpload}
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
