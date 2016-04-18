/// <reference path="enums.ts" />

    interface IPropertyList {
        date: Date;
        username: string;
        password: string;
        rental: IRental;
        residential: IRental;
        land: IRental;
    }

    interface IRental {
        agentID: number;
        clientID: string;
        uniqueID: number;
        authority: string;
        listingAgent: IListingAgent;
        dateAvailable: Date;
        rent: IRent;
        category: ICategory;
        headline: string;
        description: string;
        features: IFeatures;
        holiday: IValue;
        inspectionTimes: IInspectionTimes
        images: IImg;
        objects: IObject;
        featureProperty: boolean;
        geocode: IGeocode;
        allowances: IAllowances;
        address: IAddress;
        isRental: boolean;
        isSold: boolean;
        priceView: string;
        bond: number;
        soldDetails: ISoldDetails;
        modTime: string;
        status: string;
        fileName: string; //debuging purpose
    }

    interface IImg {
        img: Array<IImage>;
    }


    interface ISoldDetails {
        price: IKeyValue;
        date: string;
    }

    interface IAllowances {
        furnished: boolean
    }

    interface IGeocode {
        latitude: number;
        longitude: number;
    }

    interface IObject {
        floorplan: IId;
    }

    interface IId {
        id: string;
    }

    interface IImage {
        id: string;
        modTime: Date;
        url: string;
    }
    interface IInspectionTimes {
        inspection: string;
    }

    interface IValue {
        value: string;
    }

    interface IFeatures {
        bedrooms: string;
        bathrooms: string;
        garages: string;
        carports: string;
        airConditioning: string;
        alarmSystem: string;
        pool: string;
        otherFeatures: string;
    }

    interface ICategory {
        name: string;
    }


    interface IAddress {
        display: string;
        streetNumber: string;
        street: string;
        suburb: IKeyValue;
        state: string;
        postcode: string;
    }

    interface IKeyValue {
        _: string;
        display: string;
        text: string;
    }

    interface IRent extends IKeyValue {
        //    display: string;
        period: string;
        //    text: string;
    }

    interface IListingAgent {
        id: number;
        name: string;
        agentid: number;
        telephone: Array<ITelephone>;
        email: string;


    }

    interface ITelephone {
        type: string;
        text: string;
    }

//}

