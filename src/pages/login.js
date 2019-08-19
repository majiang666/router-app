import React,{Component} from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './login.css';
import { withRouter } from 'react-router-dom';
class Login extends Component{
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                localStorage.setItem('flag',JSON.stringify(values));
                this.props.history.push('/');
            }
        });
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
        <div className="login-form">
            <Form.Item>
            {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
            })(
                <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                />,
            )}
            </Form.Item>
            
            <Form.Item>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
                />,
            )}
            </Form.Item>

            <Form.Item>
            <Button type="primary" size="large" htmlType="submit" className="login-form-button" onClick={this.handleSubmit}>
                Log in
            </Button>
            </Form.Item>
</div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default withRouter(WrappedNormalLoginForm);