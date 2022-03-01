import ui from '../states/ui.state';
import * as languages from './languages';

export const getLanguage = () => languages[ui.language] || languages.ptBR;

export const language = getLanguage();
