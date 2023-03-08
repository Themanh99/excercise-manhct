import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({ album }) {
    return (
        <div className={cx('album')}>
            <div className={cx('thumbnai')}>
                <img src={album.thumbnaiUrl} alt={album.name} />
            </div>
            <div className={cx('info')}>
                <div className={cx('name')}>{album.name}</div>
            </div>
        </div>

    );
}

export default Album;