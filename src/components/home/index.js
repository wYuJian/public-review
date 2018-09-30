import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './index.less';
class Login extends React.Component {
    constructor(props,context) {
        super(props,context)
        //官方优化插件
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            //定义state
        }
    };
    render() {
        
        return ( <div className = "index" >
                <p>hello!</p>
            </div>);
        }
    }
export default Login;