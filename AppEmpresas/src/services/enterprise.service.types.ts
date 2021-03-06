export interface Enterprise {
    "id": number,
    "email_enterprise": string,
    "facebook": string,
    "twitter": string,
    "linkedin": string,
    "phone": string,
    "own_enterprise": boolean,
    "enterprise_name": string,
    "photo": string,
    "description": string,
    "city": string,
    "country": string,
    "value": number,
    "share_price": number,
    "enterprise_type": {
        "id": number,
        "enterprise_type_name": string,
    }
}

export interface EnterpriseDetails extends Enterprise {
    "shares": 100,
    "own_shares": 0,
}