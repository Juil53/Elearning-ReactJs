import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../_components/Breadcrumb/Breadcrumb";
import CourseContent from "./_components/CourseContent/CourseContent";
import CourseModal from "./_components/CourseModal/CourseModal";
import { actCourseDetailGet } from "./modules/actions";

export default function CourseDetail(props) {
  console.log(props);
  const breadcrumb = [
    {
      label: "Trang Chủ",
      path: "/",
    },
    {
      label: "Khóa Học",
      path: "/courses",
    },
    {
      label: "Chi Tiết Khóa Học",
    },
  ];

  const courseDetailData = useSelector(
    (state) => state.courseDetailReducer.courseDetailData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const { maKhoaHoc } = props.match.params;
    dispatch(actCourseDetailGet(maKhoaHoc));
    window.scroll(0, 0);
  }, []);

  const [openModal, setOpenModal] = useState(false);

  return (
    <Fragment>
      <Breadcrumb breadCrumbArr={breadcrumb} />
      <CourseContent
        courseDetailData={courseDetailData}
        setOpenModal={setOpenModal}
      />
      <CourseModal openModal={openModal} setOpenModal={setOpenModal} />
    </Fragment>
  );
}
