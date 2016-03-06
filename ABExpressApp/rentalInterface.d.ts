declare module a {
    export enum CategoryEnum {
        House,
        Unit,
        Townhouse
    }


}


    interface IPropertyList {
        date: Date;
        username: string;
        password: string;
        rental: IRental;
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
    }
    
    interface IImg {
        img: Array<IImage>;
    }    

    interface IAllowances {
        furnished: boolean
    }

    interface IGeocode {
        Latitude: string;
        Longitude: string;
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
        name: a.CategoryEnum;
    }


    interface IAddress {
        display: string;
        streetNumber: string;
        street: string;
        suburb: IKeyValue;
        state: string;
        postalcode: string;
    }

    interface IKeyValue {
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

