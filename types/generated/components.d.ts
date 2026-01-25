import type { Schema, Struct } from '@strapi/strapi';

export interface DiversInformation extends Struct.ComponentSchema {
  collectionName: 'components_divers_information';
  info: {
    displayName: 'information';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface DiversTarif extends Struct.ComponentSchema {
  collectionName: 'components_divers_tarifs';
  info: {
    displayName: 'tarif';
  };
  attributes: {
    description: Schema.Attribute.Text;
    prix: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'divers.information': DiversInformation;
      'divers.tarif': DiversTarif;
    }
  }
}
