import classNames from 'classnames/bind';
import style from './home.module.scss';
const cx = classNames.bind(style);
function Home() {
    return <div className={cx('wrappper')}>home</div>;
}

export default Home;
