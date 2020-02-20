import React from 'react';

class CourseList extends React.Component {
    state = {
        isEdit: false
    }

    renderCourse = () => {
        return (
            <li>
                <span>
                    {this.props.course.name}
                </span>
                <button className='buttonAdd' onClick={() => {this.toggleState()} } >Update</button>
                <button className='buttonRemove' onClick={() => {this.props.deleteCourse(this.props.index)} }>Delete</button>
            </li>
        )
        }
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }

    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.inputval.value);
        this.toggleState();
    }

    renderUpdateForm = () => {
        return(
            <form onSubmit={this.updateCourseItem} >
                <input className='inputEdit' type='text' ref={(newval) => {this.inputval = newval}} defaultValue={this.props.course.name} />
                <button className='buttonEdit'>Update</button>
            </form>
        )
    }



    render()
    {
        let {isEdit} = this.state;
        return (
            <React.Fragment>
                { isEdit ? this.renderUpdateForm() : this.renderCourse() }
            </React.Fragment>
        );
    }
}

export default CourseList;
