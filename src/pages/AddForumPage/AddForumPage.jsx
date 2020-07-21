import React, { Component } from 'react';

class AddForumPage extends Component {

    state = {
        formData: {
            title: '',
            content: '',
        }
    };
    formRef = React.createRef();


    handleChange = e => {
        const formData = {
            ...this.state.formData,
            [e.target.name]: e.target.value
        }

        this.setState({ formData })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddForum(this.state.formData);
    }

    render() {
        return (
            <div className="addForum">
                <h1>Add Forum</h1>
                <hr/>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Forum Title(required)</label>
                        <input
                            className="form-control"
                            name="title"
                            value={this.state.formData.title}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Content (required)</label>
                        <textarea
                            className="form-control"
                            name="content"
                            value={this.state.formData.content}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    {/* <div className="form-group">
                        <label>User</label>
                        <input
                            className="form-control"
                            name="user"
                            value={this.state.formData.user}
                            onChange={this.handleChange}
                            required
                        />
                    </div> */}
                    <button
                        type="submit"
                        className="btn"
                    >
                        Add Forum
                    </button>
                </form>
            </div>
        );
    }
}

export default AddForumPage;