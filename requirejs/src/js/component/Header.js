/**
 * Created by kimxogus on 2016-05-10.
 */

'use strict';

define(['react', 'app', 'component/Title'], function (React, app, Title) {
    const Header = React.createClass({
        render() {
            return (
                <div>
                    <Title name={this.props.name}/>
                </div>
            );
        }
    });

    app.value('Header', Header);
    return Header;
});