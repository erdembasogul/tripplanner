import { PexelPhotoResult } from './../types/tripTypes';
import { get } from "../utils/httpHelper";

export const getPhoto = async (searchQuery: string, photoCount: number): Promise<PexelPhotoResult[]> => {
    let result = await get(`${searchQuery}&per_page=${photoCount}`);
    return result.photos
}