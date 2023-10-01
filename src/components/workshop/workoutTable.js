import React from "react";
import { Table, Tag } from "antd";
import { workShopData } from "./workShopData";
const columns = [
  {
    title: "id",
    dataIndex: "grouping",
    key: "grouping",
    render: (id) => {
      return <Tag>{id}</Tag>;
    },
  },
  {
    title: "Name",
    dataIndex: "title",
    key: "name",
    // render: (title) => {
    //   return (
    //     <a style={{ textDecoration: "none" }} href={`#${title}`}>
    //       {title}
    //     </a>
    //   );
    // },
  },
  {
    title: "Sets",
    dataIndex: "sets",
    key: "sets",
  },
  {
    title: "Reps",
    dataIndex: "reps",
    key: "reps",
  },
  //   {
  //     title: "Tags",
  //     key: "tags",
  //     dataIndex: "tags",
  //     render: (_, { tags }) => (
  //       <>
  //         {tags.map((tag) => {
  //           let color = tag.length > 5 ? "geekblue" : "green";
  //           if (tag === "loser") {
  //             color = "volcano";
  //           }
  //           return (
  //             <Tag color={color} key={tag}>
  //               {tag.toUpperCase()}
  //             </Tag>
  //           );
  //         })}
  //       </>
  //     ),
  //   },
  //   {
  //     title: "Action",
  //     key: "action",
  //     render: (_, record) => (
  //       <Space size="middle">
  //         <a>Workout {record.name}</a>
  //         <a>Video</a>
  //       </Space>
  //     ),
  //   },
];

export const WorkOutTable = () => {
  return (
    <Table
      className="mainFont"
      pagination={false}
      size="small"
      columns={columns}
      dataSource={workShopData}
    />
  );
};
