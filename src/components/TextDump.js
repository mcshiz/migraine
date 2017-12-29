import React from 'react';

class TextDump extends React.Component {
    render() {
        return (
            <div className="text-dump-wrapper">
                <textarea name="csvText" id="csvText" rows="10" defaultValue={this.props.csv} />
            </div>
        )
    }
}
export default TextDump