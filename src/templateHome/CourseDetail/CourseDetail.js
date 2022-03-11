import React, { Fragment } from 'react';
import Breadcrumb from './_components/Breadcrumb/Breadcrumb';
import CourseContent from './_components/CourseContent/CourseContent';

export default function CourseDetail() {
    return (
        <Fragment>
            <Breadcrumb />
            <CourseContent />
        </Fragment>
    )
}
