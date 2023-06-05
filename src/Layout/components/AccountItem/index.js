import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);

function accountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/db3a2f35dc52de6816ee785c92f4a0be~c5_100x100.jpeg?x-expires=1685959200&x-signature=Or8zgXMHl9jYMNf0xiZ4spCSJvE%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>
                        Fuck_boy
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('checkIcon')}></FontAwesomeIcon>
                    </span>
                </p>
                <div className={cx('username')}>vominhtri</div>
            </div>
        </div>
    );
}

export default accountItem;
