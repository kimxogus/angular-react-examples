/**
 * Created by kimxogus on 2016-05-10.
 */

var React = require('react');

const Title = React.createClass({
    render() {
        return (
            <h1 className="title col-md-12">
                Hello {this.props.name}!
            </h1>
        );
    }
});

module.exports = Title;