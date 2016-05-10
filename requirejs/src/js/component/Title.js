/**
 * Created by kimxogus on 2016-05-10.
 */

'use strict';

define(['react', 'app'], function (React, app) {
    const Title = React.createClass({
        render() {
            return (
                <h1 className="title">
                    Hello {this.props.name}!
                </h1>
            );
        }
    });

    app.value('Title', Title);
    return Title;
});