import React,{ Fragment } from 'react';
import { NavLink,withRouter } from 'react-router-dom';
import { Icon,Modal,message } from 'antd';

const { confirm } = Modal;



const styles = {
    header:{
        height:'50px',
        background:'#ccc',
        lineHeight:'50px',
        textAlign:'center'
    }
}
const Header = (props) => {
    const warning = () => {
        message.warning('已取消');
      };      
    function showConfirm() {
        confirm({
          title: '提示',
          content: '确定退出吗？',
          okText:"确定",
          onOk() {
            out();
          },
          onCancel() {
            warning();
          },
        });
      }
    const out = () => {
        localStorage.removeItem('flag');
        props.history.push('/login');
    }
    return(
        <Fragment>
            <h1>LOGO</h1>
            <Icon onClick={ showConfirm } type="logout" style={{color:'#f60',fontSize:'20px',position:'absolute',top:'10px',right:'10px'}} rotate='-90' />
            <header style={styles.header}>
                <NavLink to="/">首页</NavLink>
                <NavLink to="/about">关于我们</NavLink>
                <NavLink to="/contact">联系我们</NavLink>
            </header>
        </Fragment>
    )
}

export default withRouter(Header);