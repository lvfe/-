import React from 'react';
const withLog = (Component) => {
    class NewComponent extends React.Component {
        componentWillMount(){
            console.time('render');
            console.log('ready');
        }
        render(){
            return <Component {...this.props}></Component>
        }
        componentDidMount(){
            console.time('render');
            console.log('ready ok');
        }
    }
    return NewComponent;
}
 
export default withLog;