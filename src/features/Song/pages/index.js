import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumlist = [
        {
            id: 1,
            name: 'Có thể bạn thích đấy',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/images/d/8/0/d/d80d60561e0384d45bababa8c269adf5.jpg'
        }, {
            id: 2,
            name: 'Một bông hồng xinh tươi',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/a/8/9/9a894135b316f76d84a2ed6e113d8ad6.jpg'
        }, {
            id: 3,
            name: ' a previous version',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/6/e/5/66e575133b731456bd51bc689aa58b33.jpg'
        }
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumlist={albumlist} />
        </div>
    );
}

export default AlbumFeature;