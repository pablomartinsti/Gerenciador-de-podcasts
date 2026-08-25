import fs from 'fs';
import path from 'path';
import { PodcastModel } from '../models/podcast-model';

const pathData = path.join(__dirname, '../repositories/podcasts.json');

export const repositoryPodcast = async (podcastName?: string, category?: string): Promise<PodcastModel[]> => {
  const language = 'utf-8';
  const rawData = fs.readFileSync(pathData, language);
  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
  }

  if (category) {
    jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.categories.some((item: string) => item === category));
  }

  return jsonFile;
};
