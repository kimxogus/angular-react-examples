/**
 * Created by kimxogus on 2016-05-10.
 */
var
    React = require('react'),

    Title = require('./Title');


const Header = React.createClass({
    render() {
        return (
            <div>
                <Title name={this.props.name}/>
            </div>
        );
    }
});

module.exports = Header;