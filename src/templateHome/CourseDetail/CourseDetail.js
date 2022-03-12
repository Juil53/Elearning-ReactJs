import React, { Fragment } from 'react';
import Breadcrumb from '../../_components/Breadcrumb/Breadcrumb';
import CourseContent from './_components/CourseContent/CourseContent';

export default function CourseDetail() {
    const breadcrumb = [
        {
            label: 'Trang Chủ',
            path: '/'
        },
        {
            label: 'Khóa Học',
            path: '/courses'
        },
        {
            label: 'Chi Tiết Khóa Học'
        }
    ]

    return (
        <Fragment>
            <Breadcrumb breadCrumbArr={breadcrumb} />
            <CourseContent />
        </Fragment>
    )
}
