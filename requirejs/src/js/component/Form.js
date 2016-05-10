/**
 * Created by Taehyun on 2016-05-10.
 */

'use strict';

define(['react', 'app'], function (React, app) {
    const Form = React.createClass({
        getInitialState() {
            return {
                name: this.props.name
            }
        },

        onInputChange(e) {
            this.setState({
                name: e.target.value
            });
        },

        render() {
            return (
                <div className="col-md-4 col-md-offset-4">
                    <div className="row">
                        <input className="input-box form-control" type="text"
                               value={this.state.name} onChange={this.onInputChange}/>
                        <button className="btn btn-primary" type="button" 
                                onClick={()=>this.props.onClick(this.state.name)}>Submit</button>
                    </div>
                </div>
            );
        }
    });

    app.value('Form', Form);
    return Form;
});