/* @flow */
import {createReaction} from 'dacho';

const reaction: (x: string[], y: string) => {[key: string]: string} = createReaction('@@GHREADER/');
export default reaction;
