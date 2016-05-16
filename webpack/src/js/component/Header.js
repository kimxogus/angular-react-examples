/**
 * Created by kimxogus on 2016-05-10.
 */
var
    React = require('react'),
    app   = global.app,

    Title = require('./Title');


const Header = React.createClass({
    render() {
        return (
            <div className="row">
                <Title name={this.props.name}/>
            </div>
        );
    }
});

app.value('Header', Header);

module.exports = Header;