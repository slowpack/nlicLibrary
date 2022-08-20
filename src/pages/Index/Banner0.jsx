import React from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Navigate } from 'react-router-dom';
import { isImg } from './utils';
class Banner extends React.PureComponent {
  state = {
    user: null,
  };
  render() {
    const toThehome = () => {
      setTimeout(() => {
        this.setState({ user: true });
      }, 500);
    };
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        {this.state.user && <Navigate to="/login" replace="true" />}
        <QueueAnim key="QueueAnim" type={['bottom', 'top']} delay={200} {...dataSource.textWrapper}>
          <div key="title" {...dataSource.title}>
            {typeof dataSource.title.children === 'string' && dataSource.title.children.match(isImg) ? <img src={dataSource.title.children} width="100%" alt="img" /> : dataSource.title.children}
          </div>
          <div key="content" {...dataSource.content}>
            {dataSource.content.children}
          </div>
          <Button ghost key="button" onClick={toThehome} {...dataSource.button}>
            {dataSource.button.children}
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <DownOutlined />
        </TweenOne>
      </div>
    );
  }
}
export default Banner;
