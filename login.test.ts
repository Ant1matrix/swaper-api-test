import axios from "axios";

interface PostData {
  name: string;
  password: string;
}

interface DataResponse {
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
}

const expectedResponse: DataResponse = {
  username: "testuser@qa.com",
  permissions: null,
  investorType: "PRIVATE_PERSON",
  registrationStep: "IDENTIFICATION",
  status: "REGISTERED",
  firstName: "Tester",
  accountBalance: 0.0,
  unsettledBalance: 0.0,
  bankAccountNumbers: [],
  number: "52940",
  idDocumentsStatus: "NO_DOCUMENTS",
  displayPortfolio: false,
  inUploadStep: false,
  vip: false,
  vipConfirmed: false,
  notifications: {
    unreadPushNotifications: 0,
  },
  currency: "EUR",
  language: "EN",
  hasChangedCurrency: true,
  registeredAt: "2024-07-29",
  isShowPep: false,
  isPepOrPrivateInvestorNotOwner: true,
  isShowLastAgreementPopup: false,
  isShowKycPopup: false,
  isShowTwoFaPopup: false,
  usingTwoFa: false,
  updatePersonalData: false,
  shouldUpdatePrivateInvestorBirthDate: false,
  isShowPlAssignmentAgreementPopup: false,
  isDeleteRequestAllowed: true,
  isShowProductTypePopup: false,
  id: 42941,
};

const expectedKeys = Object.keys(expectedResponse) as Array<keyof DataResponse>;

describe("Swaper API Test", () => {
  it("should login to public REST endpoint", async () => {
    const url: string = "https://swaper.com/rest/public/login";
    const postData: PostData = {
      name: "testuser@qa.com",
      password: "Parole123",
    };

    const response = await axios.post(url, postData);
    const data: DataResponse = response.data;

    expect(response.status).toBe(200); // Expecting a 200 status code
    console.log("Object.keys(data)", Object.keys(data));
    console.log("ExpectedKeys", expectedKeys);
    expect(Object.keys(data)).toEqual(expectedKeys);
    expect(data.accountBalance).toBe(0.0);
  });
});
