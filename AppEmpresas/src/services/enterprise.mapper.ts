import {Enterprise, EnterpriseDetails} from './enterprise.service.types';

export interface MappedEnterprise {
  id: number;
  name: string;
  city: string;
  country: string;
  description: string;
  twitter: string;
  linkedin: string;
  facebook: string;
  phone: string;
  photo: string;
  typeId: number;
  typeName: string;
  sharedPrice: number;
  owned: boolean;
  email: string;
  shares?: number;
  ownShares?: number;
}

export interface MappedType {
    id: number;
    name: string;
}

class EnterpriseMapper {
  public mapDetails(input: EnterpriseDetails): MappedEnterprise {
    return {
      id: input.id,
      name: input.enterprise_name,
      city: input.city,
      country: input.country,
      description: input.description,
      twitter: input.twitter,
      linkedin: input.linkedin,
      facebook: input.facebook,
      phone: input.phone,
      photo: input.photo,
      typeId: input.enterprise_type.id,
      typeName: input.enterprise_type.enterprise_type_name,
      sharedPrice: input.share_price,
      owned: input.own_enterprise,
      email: input.email_enterprise,
      shares: input.shares,
      ownShares: input.own_shares
    };
  }

  public mapOne(input: Enterprise): MappedEnterprise {
    return {
      id: input.id,
      name: input.enterprise_name,
      city: input.city,
      country: input.country,
      description: input.description,
      twitter: input.twitter,
      linkedin: input.linkedin,
      facebook: input.facebook,
      phone: input.phone,
      photo: input.photo,
      typeId: input.enterprise_type.id,
      typeName: input.enterprise_type.enterprise_type_name,
      sharedPrice: input.share_price,
      owned: input.own_enterprise,
      email: input.email_enterprise
    };
  }

  public mapAll(inputs: Enterprise[]): [MappedEnterprise[], MappedType[]] {
    let types: MappedType[] = []
    const result = inputs.map((input) => {
        types.push({
            name: input.enterprise_type.enterprise_type_name,
            id: input.enterprise_type.id,
        })
        return this.mapOne(input)
    });
    types = types.filter((type) => types.includes(type))
    return [result, types]
  }
}

export const enterpriseMapper = new EnterpriseMapper();
