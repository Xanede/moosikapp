import upload from './upload';
import { getFileLink } from '../../apis/yandex-disk';
import {
  getSongs as getSongsFromDB,
  getSongByUuid as getSongByUuidFromDB,
  findSongs as findSongsInDB,
  updateSong as updateSongInDB,
  deleteSong as deleteSongFromDB,
} from '../../apis/mongodb/songs';
import {
  getUserByUuid,
} from '../../apis/mongodb/users';

export function getSongs() {
  return async (req, res) => {
    const { skip, limit } = req.query;

    const s = Number(skip);
    const l = Number(limit);

    if (s < 0) {
      res.status(400).send({ message: 'Invalid query parameter \'skip\' provided.' });
      return;
    }

    if (l < 0 || l > 100) {
      res.status(400).send({ message: 'Invalid query parameter \'limit\' provided.' });
      return;
    }

    try {
      const songs = await getSongsFromDB(Number(skip), Number(limit));

      if (!songs.length) {
        res.status(404).send({ message: 'No songs found.' });
        return;
      }

      const list = [];

      songs.forEach((song) => {
        const {
          uuid, author, title, cover, likes,
        } = song.toJSON();

        list.push({
          uuid, author, title, cover, favorite: likes.includes(req.jwt.uuid),
        });
      });

      res.status(200).send({ message: 'Successfully retrieved songs.', list });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error.' });
    }
  };
}

export function getSongByUuid() {
  return async (req, res) => {
    try {
      const song = await getSongByUuidFromDB(req.params.songId);

      if (!song) {
        res.status(404).send({ message: 'No song found.' });
        return;
      }

      const user = await getUserByUuid(song.uploadedBy);
      song.uploadedBy = user.username;

      const {
        author, title, cover, path, uploadedBy, createdAt, likes,
      } = song.toJSON();

      const url = await getFileLink(path);

      res.status(200).send({
        message: 'Successfully retrieved song.',
        song: {
          author, title, cover, url, uploadedBy, createdAt, favorite: likes.includes(req.jwt.uuid),
        },
      });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error.' });
    }
  };
}

export function findSongs() {
  return async (req, res) => {
    const { query } = req.query;

    if (!query) {
      res.status(400).send({ message: 'No query provided.' });
      return;
    }

    try {
      const songs = await findSongsInDB(decodeURI(query));

      if (!songs.length) {
        res.status(404).send({ message: 'No songs found.' });
        return;
      }

      const list = [];

      songs.forEach((song) => {
        const {
          uuid, author, title, cover, likes,
        } = song.toJSON();

        list.push({
          uuid, author, title, cover, favorite: likes.includes(req.jwt.uuid),
        });
      });

      res.status(200).send({ message: 'Successfully retrieved songs.', list });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error.' });
    }
  };
}

export function uploadSong() {
  return (req, res) => {
    if (!req.body || Number(req.headers['content-length']) === 0) {
      res.status(400).send({ message: 'No body provided.' });
      return;
    }

    upload(req, res);
  };
}

export function updateSong() {
  return async (req, res) => {
    const { body, params: { songId } } = req;

    if (!body) {
      res.status(400).send({ message: 'No body provided.' });
      return;
    }

    const song = await getSongByUuidFromDB(songId);

    if (!song) {
      res.status(404).send({ message: 'No song found.' });
      return;
    }

    const data = {};
    Object.keys(body).forEach((key) => {
      if (['author', 'title', 'cover'].includes(key)) {
        data[key] = body[key];
      }
    });

    try {
      await updateSongInDB(songId, data);
      res.status(200).send({ message: 'Successfully updated song.', song: data });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error.' });
    }
  };
}

export function deleteSong() {
  return async (req, res) => {
    try {
      const { songId } = req.params;

      await deleteSongFromDB(songId);

      req.status(204).send();
    } catch (e) {
      res.status(500).send({ message: 'Internal server error.' });
    }
  };
}
