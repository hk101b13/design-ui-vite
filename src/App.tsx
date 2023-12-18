import { QButton, QSwitch, QTable, QThemeProvider } from ".";
import { RightOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { ColumnsType } from "antd/es/table";
import { ColorPicker } from "antd";
import { useState } from "react";
import { QColors } from ".";

function App() {
  const { t } = useTranslation();
  const [main, setMain] = useState(QColors.schemes.light.primary);
  const [secondary, setSecondary] = useState(QColors.schemes.light.secondary);
  const [accent, setAccent] = useState(QColors.schemes.light.tertiary);
  const [text, setText] = useState(QColors.schemes.light.onPrimary);
  const data = [
    {
      key: "0",
      username: "User_1",
      email: "user_1@gmail.com",
      description: "This is User 1.",
      arrow: <RightOutlined style={{ fontSize: "12px" }} />,
    },
    {
      key: "1",
      username: "User_2",
      email: "user_2@gmail.com",
      description: "This is User 2.",
      arrow: <RightOutlined style={{ fontSize: "12px" }} />,
    },
    {
      key: "2",
      username: "User_3",
      email: "user_3@gmail.com",
      description: "This is User 3.",
      arrow: <RightOutlined style={{ fontSize: "12px" }} />,
    },
    {
      key: "3",
      username: "User_4",
      email: "user_4@gmail.com",
      description: "This is User 4.",
      arrow: <RightOutlined style={{ fontSize: "12px" }} />,
    },
    {
      key: "4",
      username: "User_5",
      email: "user_5@gmail.com",
      description: "This is User 5.",
      arrow: <RightOutlined style={{ fontSize: "12px" }} />,
    },
  ];

  const columns: ColumnsType = [
    {
      title: t("Username"),
      dataIndex: "username",
      key: "username",
      width: "20%",
      ellipsis: true,
    },
    {
      title: t("Email"),
      dataIndex: "email",
      key: "email",
      width: "25%",
      ellipsis: true,
    },
    {
      title: t("Description"),
      dataIndex: "description",
      key: "description",
      width: "50%",
      ellipsis: true,
    },
    {
      dataIndex: "arrow",
      key: "arrow",
      align: "center",
      width: "5%",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "1500px",
          padding: "10px",
          border: "2px dashed gray",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      >
        <>Main: </>
        <ColorPicker
          showText
          value={main}
          onChange={(color) => {
            console.log(color.toHexString());
            setMain(color.toHexString());
          }}
          style={{ marginRight: "20px" }}
        ></ColorPicker>

        <>Secondary: </>
        <ColorPicker
          showText
          value={secondary}
          onChange={(color) => {
            console.log(color.toHexString());
            setSecondary(color.toHexString());
          }}
          style={{ marginRight: "20px" }}
        ></ColorPicker>

        <>Accent: </>
        <ColorPicker
          showText
          value={accent}
          onChange={(color) => {
            console.log(color.toHexString());
            setAccent(color.toHexString());
          }}
          style={{ marginRight: "20px" }}
        ></ColorPicker>

        <>Text: </>
        <ColorPicker
          showText
          value={text}
          onChange={(color) => {
            console.log(color.toHexString());
            setText(color.toHexString());
          }}
        ></ColorPicker>
      </div>

      <QThemeProvider
        colorScheme={{
          main: main,
          secondary: secondary,
          accent: accent,
          text: text,
        }}
      >
        <QButton>Button</QButton>
        <QSwitch></QSwitch>
        <QTable columns={columns} dataSource={data} scroll={{ y: "250px" }} />
      </QThemeProvider>
    </>
  );
}

export default App;
