import i18n from 'i18n';
import translationUz from '../translate/Uztraslate.json';
import translationRu from '../translate/Rutranslate.json';

i18n.init({
  resources: {
    uz: { translation: translationUz },
    ru: { translation: translationRu },
  }
});