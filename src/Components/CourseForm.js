import React from 'react';

const CourseForm = (props) => {
    return (
        <div className='form'>
            <form action='' onSubmit= {props.addCourse} >
                <input id="name" value={props.current} onChange={props.updateCourseList} type='text' placeholder='Add Corse (Ex: Java Script)' />
                <input type='submit' value='Add' />
            </form>
        </div>
    )
}

export default CourseForm;