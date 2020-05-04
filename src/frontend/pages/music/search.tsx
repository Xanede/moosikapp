import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRestriction from '../../hooks/useRestriction';
import useAuthorizedRequest from '../../hooks/useAuthorizedRequest';
import { Nav, SearchForm, SongList } from '../../components/Music';
import { setSongList } from '../../redux/player/actions';
import { RootState } from '../../redux/store';
import { Song } from '../../redux/player/types';

const MusicSearch = () => {
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);

  const restriction = useRestriction();
  restriction.allowOnlyAuthorizedUser();

  const request = useAuthorizedRequest();

  const songs = useSelector<RootState, Song[]>((state) => state.player.songList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSongList([]));

    const asyncEffect = async () => {
      setSearching(true);

      try {
        const res = await request('/songs/search', {
          method: 'GET',
          params: {
            query,
          },
        });

        dispatch(setSongList(res.data.songs));
      } catch (e) {
        if (e.response?.status !== 404) {
          // error message (e.response.data)
        }

        dispatch(setSongList([]));
      } finally {
        setSearching(false);
      }
    };

    if (query.length < 2) {
      // error message
      return;
    }

    asyncEffect();
  }, [query]);

  return (
    <section>
      <Nav />
      <SearchForm handler={setQuery} />
      <SongList songs={songs} searching={query.length < 2 || searching} />
    </section>
  );
};

export default MusicSearch;
