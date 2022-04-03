import React from "react";
import { useStyles } from "../../styles/styles";
import Learning from "./Learning";
import Teacher from "./Teacher";
import Breadcrumb from "../../_components/Breadcrumb/Breadcrumb";

export default function AboutUs() {
  const breadcrumb = [
    {
      label: "Trang chủ",
      path: "/",
    },
    {
      label: "Về chúng tôi",
    },
  ];
  const classes = useStyles();
  return (
    <>
      <Breadcrumb breadCrumbArr={breadcrumb} />
      {/* Start Teacher */}
      <section className={classes.teacherbg}>
        <Teacher />
      </section>
      {/* End Teacher */}
      {/* Start Learning */}
      <section className={classes.learning}>
        <Learning />
      </section>
    </>
  );
}
