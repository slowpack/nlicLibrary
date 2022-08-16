// import Guide from '@/components/Guide';
// import StaticCard from '../../components/StaticCard'
import StaticCard from '../../components/StaticCard'

// import { trim } from '@/utils/format';
// import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage= () => {
  // const { name } = useModel('global');
  return (
    // <PageContainer ghost>
      // <div className={styles.container}>
        <StaticCard></StaticCard>
        /* <Guide name={trim(name)} /> */
      // </div>
    /* </PageContainer> */
  )
};

export default HomePage;
