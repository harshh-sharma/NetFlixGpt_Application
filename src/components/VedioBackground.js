
import { useDispatch, useSelector } from 'react-redux';

import useTrailer from '../customHooks/useTrailer';

const VedioBackground = ({movieId}) => {
    const dispatch = useDispatch();
    const trailerData = useSelector(store => store.movies?.trailerData);
    useTrailer(movieId);
  return (
    <div className='w-full aspect-video -z-10'>
        <iframe  src={`https://www.youtube.com/embed/${trailerData?.key}?&autoplay=1&mute=1`} title="YouTube video player"  allow="accelerometer; autoplay;" className='w-full aspect-video'></iframe>
    </div>
  )
}

export default VedioBackground