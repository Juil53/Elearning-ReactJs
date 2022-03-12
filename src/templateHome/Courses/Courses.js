import React, { Fragment } from 'react';
import Breadcrumb from '../../_components/Breadcrumb/Breadcrumb';
import CourseList from './_components/CourseList/CourseList';

export default function Courses() {
    const breadcrumb = [
        {
            label: 'Trang Chủ',
            path: '/'
        },
        {
            label: 'Khóa Học',
        }
    ]

    return (
        <Fragment>
            <Breadcrumb breadCrumbArr={breadcrumb} />
            <CourseList />
        </Fragment>
    )
}
