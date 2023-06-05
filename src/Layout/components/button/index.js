import style from './button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);
function button({
    to,
    primary = false,
    small = false,
    text = false,
    large = false,
    rounded = false,
    outline = false,
    disabled = false,
    href,
    className,
    iconRight,
    iconLeft,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    //remove event listener when button onclick
    if (disabled) {
        Object.keys(props).forEach((propsKey) => {
            if (propsKey.startsWith('on') && typeof props[propsKey] === 'function') {
                delete props[propsKey];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const wrapper = cx('wrapper', {
        [className]: className,
        iconLeft,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
    });
    return (
        <Comp className={wrapper} {...props}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}> {children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Comp>
    );
}

export default button;
