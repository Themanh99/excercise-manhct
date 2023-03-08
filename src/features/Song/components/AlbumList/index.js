import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import Album from '../Album';


const cx = classNames.bind(styles)

AlbumList.propTypes = {
    albumlist: PropTypes.array.isRequired
};

function AlbumList({ albumlist }) {
    return (
        <ul className={cx('album-list')}>
            {albumlist.map(album => (
                <li key={album.id}>
                    <Album album={album} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;