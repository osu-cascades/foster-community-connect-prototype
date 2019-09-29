export class DonationForm {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string,
        public description: string,
        public request: boolean
      ) {  }
}
