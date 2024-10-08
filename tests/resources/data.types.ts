export interface DataResponse {
    username: string;
    permissions: null;
    investorType: string;
    registrationStep: string;
    status: string;
    firstName: string;
    accountBalance: number;
    unsettledBalance: number;
    bankAccountNumbers: [];
    number: string;
    idDocumentsStatus: string;
    displayPortfolio: boolean;
    inUploadStep: boolean;
    vip: boolean;
    vipConfirmed: boolean;
    notifications: { unreadPushNotifications: number };
    currency: string;
    language: string;
    hasChangedCurrency: true;
    registeredAt: string;
    isShowPep: boolean;
    isPepOrPrivateInvestorNotOwner: boolean;
    isShowLastAgreementPopup: boolean;
    isShowKycPopup: boolean;
    isShowTwoFaPopup: boolean;
    usingTwoFa: boolean;
    updatePersonalData: boolean;
    shouldUpdatePrivateInvestorBirthDate: boolean;
    isShowPlAssignmentAgreementPopup: boolean;
    isDeleteRequestAllowed: boolean;
    isShowProductTypePopup: boolean;
    id: number;
  };


  export interface DataPost {
    name: string;
    password: string;
  };