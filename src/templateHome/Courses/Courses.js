import React, { Fragment } from 'react';
import Breadcrumb from './_components/Breadcrumb/Breadcrumb';
import CourseList from './_components/CourseList/CourseList';

export default function Courses() {
    return (
        <Fragment>
            <Breadcrumb />
            <CourseList />
        </Fragment>
    )
}
