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

export interface DiversSiteWeb extends Struct.ComponentSchema {
  collectionName: 'components_divers_site_webs';
  info: {
    displayName: 'siteWeb';
  };
  attributes: {
    libelle: Schema.Attribute.String;
    url: Schema.Attribute.String;
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
      'divers.site-web': DiversSiteWeb;
      'divers.tarif': DiversTarif;
    }
  }
}
