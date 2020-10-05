import Roles from '../enums/Roles';
import ISongModel from '../infrastructure/database/interfaces/ISongModel';
import ConfigProvider from '../services/ConfigProvider';

class SongUtils {
  private readonly _configProvider: ConfigProvider;

  constructor(configProvider: ConfigProvider) {
    this._configProvider = configProvider;
  }

  public transformSong = (song: ISongModel, userId: string, userRole: Roles) => {
    const { _id: id, uploadedBy, likes, ...songData } = song.toObject();

    const favorite = this.inUserFavorites(userId, likes);
    const edit = this.canModifiedByUser(userId, userRole, uploadedBy);

    return { ...songData, id, favorite, edit };
  };

  public inUserFavorites = (userId: string, likes: string[]) => {
    return likes.includes(userId);
  };

  public canModifiedByUser = (userId: string, userRole: Roles, uploadedBy: string) => {
    return userId === uploadedBy || userRole >= this._configProvider.roles.ADMIN;
  };
}

export default SongUtils;