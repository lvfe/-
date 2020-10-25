import React from 'react';
const connect = (mapStateToProps = state=>state, mapDispatchToProps = {}) => Component => {
    class NewComponent extends React.Component {
        static contextTypes = {
            store: PropTypes.object
        }; 
        constructor(props, context){
            super(props, context);
            this.state = {
                props: {}
            }
        }
        // static get
        componentDidMount(){
            const {store} = this.context;
            store.subscribe(_=>this.update())
        }
        update(){
            const {store} = this.context;
            const stateProps = mapStateToProps(store.getState());
            const dispatchProps = bindActionCreators(mapDispatchToProps, stre.dispatch);
            this.setState({
                props: {
                    ...this.state.props,
                    ...stateProps,
                    ...dispatchProps
                }
            });
        }
        render(){
            return <Component {...this.props}/>
        }
    }
    return NewComponent;
}
 
export default connect;