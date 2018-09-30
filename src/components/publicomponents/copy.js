import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './index.less';

class ReactDOMname extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            //定义state
        }
    };
    render() {
        return ( <div className = "index" >
            </div>);
        }
    componentWillMount() {
        // 1、组件刚经历constructor,初始完数据
        // 2、组件还未进入render，组件还未渲染完成，dom还未渲染
        // componentWillMount 一般用的比较少，更多的是用在服务端渲染
    };
    componentDidMount () {
        // 组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
    };
    componentWillReceiveProps (nextProps) {
        // componentWillReceiveProps在接受父组件改变后的props需要重新渲染组件时用到的比较多
        /**
         * 1.nextProps通过对比nextProps和this.props，将nextProps setState为当前组件的state，从而重新渲染组件
         */
    };
    shouldComponentUpdate (nextProps,nextState) {
        /**
         * 
         * 
         */
    };
    componentWillUpdate (nextProps,nextState) {
        /**
         * shouldComponentUpdate返回true以后，组件进入重新渲染的流程，进入componentWillUpdate,这里同样可以拿到nextProps和nextState
         */
    };
    componentDidUpdate (prevProps,prevState) {
        /**
         * 组件更新完毕后，react只会在第一次初始化成功会进入componentDidmount,之后每次重新渲染后都会进入这个生命周期，这里可以拿到prevProps和prevState，即更新前的props和state。
         */
    };
};
export default ReactDOMname;