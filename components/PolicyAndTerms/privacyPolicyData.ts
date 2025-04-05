type ParagraphContent = {
  type: "p";
  text: string;
};

// Define the type for an unordered list content item
type ListContent = {
  type: "ul";
  items: string[];
};
type ContentItem = ParagraphContent | ListContent;

export type PrivacyPolicySection = {
  title: string;
  content: ContentItem[];
};

export type PrivacyPolicyData = PrivacyPolicySection[];

export const privacyPolicyData: PrivacyPolicyData = [
  {
    title: "Personal Data at Space",
    content: [
      {
        type: "p",
        text: `At Space, we believe strongly in fundamental privacy rights — and that those fundamental rights should not differ depending on where you live in the world. That’s why we treat any data that relates to an identified or identifiable individual or that is linked or linkable to them by Apple as “personal data,” no matter where the individual lives. This means that data that directly identifies you — such as your name — is personal data, and also data that does not directly identify you, but that can reasonably be used to identify you — such as the serial number of your device — is personal data. Aggregated data is considered non‑personal data for the purposes of this Privacy Policy.`,
      },
      {
        type: "p",
        text: `This Privacy Policy covers how Space or a Space-affiliated company (collectively, “Space”) handles personal data whether you interact with us on our websites, through Space apps, or in person (including by phone or when visiting a Space Store). Space may also link to third parties on our services or make third-party apps available for download in our Space Store. Space’s Privacy Policy does not apply to how third parties define personal data or how they use it. We encourage you to read their privacy policies and know your privacy rights before interacting with them.`,
      },
    ],
  },

  {
    title: "Personal Data Space Collects From You",
    content: [
      {
        type: "p",
        text: `At Space, we believe that you can have great products and great privacy. This means that we strive to collect only the personal data that we need. The personal data Space collects depends on how you interact with Space.`,
      },
      {
        type: "p",
        text: `When you create an Space Account, apply for commercial credit, purchase and/or activate a product or device, download a software update, register for a class at a Space Store, connect to our services, contact us (including by social media), participate in an online survey, or otherwise interact with Space, we may collect a variety of information, including:`,
      },
      {
        type: "ul",
        items: [
          "Account Information. Your Space Account and related account details, including email address, devices registered, account status, and age",

          "Device Information. Data from which your device could be identified, such as device serial number, or about your device, such as browser type",
          "Contact Information. Data such as name, company, email address, physical address, phone number, or other contact information",
          "Payment Information. Data about your billing address and method of payment, such as bank details, credit, debit, or other payment card information",
          "Transaction Information. Data about purchases of Space products and services or transactions facilitated by Space, including purchases on Space platforms",
          "Fraud Prevention Information. Data used to help identify and prevent fraud, including a device trust score",
          "Usage Data. Data about your activity on and use of our offerings, such as app launches within our services, including browsing history; search history; product interaction; crash data, performance and other diagnostic data; and other usage data",
          "Location information. Precise location only to support services where you agree for region-specific services, and coarse location",
          "Health Information. Data relating to the health status of an individual, including data related to one’s physical or mental health or condition.",
          "Fitness Information. Details relating to your fitness and exercise information where you choose to share them",
          "Financial Information. Details including salary, income, and assets information where collected, and information related to Space-branded financial offerings",
          "Government ID Data. In certain jurisdictions, we may ask for a government-issued ID in limited circumstances, including when setting up a wireless account and activating your device, for the purpose of extending commercial credit, managing reservations, or as required by law",
          "Other Information You Provide to Us. Details such as the content of your communications with Space, including interactions with customer support and contacts through social media channels",
        ],
      },
      {
        type: "p",
        text: `You are not required to provide the personal data that we have requested. However, if you choose not to do so, in many cases we will not be able to provide you with our products or services or respond to requests you may have.`,
      },
    ],
  },

  {
    title: "Space’s Use of Personal Data",
    content: [
      {
        type: "p",
        text: `Space uses personal data to power our services, to process your transactions, to communicate with you, for security and fraud prevention, and to comply with law. We may also use personal data for other purposes with your consent.`,
      },
      {
        type: "p",
        text: `Space uses your personal data only when we have a valid legal basis to do so. Depending on the circumstance, Space may rely on your consent or the fact that the processing is necessary to fulfill a contract with you, protect your vital interests or those of other persons, or to comply with law. We may also process your personal data where we believe it is in our or others’ legitimate interests, taking into consideration your interests, rights, and expectations. More information is available in the product-specific information embedded in our products and features as described above.`,
      },
      {
        type: "ul",
        items: [
          "Power Our Services. Space collects personal data necessary to power our services, which may include personal data collected to improve our offerings, for internal purposes such as auditing or data analysis, or for troubleshooting. For example, if you would like to access a song through a Space subscription, we collect data on what songs you play in order to provide you with the content requested and for royalty purposes.",

          "Process Your Transactions. To process transactions, Space must collect data such as your name, purchase, and payment information.",
          "Communicate with You. To respond to communications, reach out to you about your transactions or account, market our products and services, provide other relevant information, or request information or feedback. From time to time, we may use your personal data to send important notices, such as communications about purchases and changes to our terms, conditions, and policies. Because this information is important to your interaction with Space, you may not opt out of receiving these important notices.",

          "Security and Fraud Prevention. To protect individuals, employees, and Space and for loss prevention and to prevent fraud, including to protect individuals, employees, and Space for the benefit of all our users, and prescreening or scanning uploaded content for potentially illegal content, including child sexual exploitation material.",

          "Personal Data Used for Personalization. If you choose to personalize your services or communications where such options are available, Space will use information that we collect so that we can offer you those personalized services or communications. You can learn more about how relevant services use information to personalize your experience by reviewing the privacy information presented when you first use a service that asks to use your personal data.",

          "Comply with Law. To comply with applicable law — for example, to satisfy tax or reporting obligations, or to comply with a lawful governmental request.",
        ],
      },
      {
        type: "p",
        text: `Space does not use algorithms or profiling to make any decision that would significantly affect you without the opportunity for human review. Space also does not use or disclose sensitive personal data for any purposes that would require a user to exercise a right to limit processing according to the law.`,
      },
      {
        type: "p",
        text: `Space retains personal data only for so long as necessary to fulfill the purposes for which it was collected, including as described in this Privacy Policy or in our service-specific privacy notices, or as required by law. We will retain your personal data for the period necessary to fulfill the purposes outlined in this Privacy Policy and our service-specific privacy notices. When assessing retention periods, we first carefully examine whether it is necessary to retain the personal data collected and, if retention is required, work to retain the personal data for the shortest possible period permissible under law.`,
      },
    ],
  },

  {
    title: "Space’s Sharing of Personal Data",
    content: [
      {
        type: "p",
        text: `Space may share personal data with Space-affiliated companies, service providers who act on our behalf, our partners, developers, and publishers, or others at your direction. Further, Space does not share personal data with third parties for their own marketing purposes.`,
      },

      {
        type: "ul",
        items: [
          "Service Providers. Space may engage third parties to act as our service providers and perform certain tasks on our behalf, such as processing or storing data, including personal data, in connection with your use of our services and delivering products to customers. Space service providers are obligated to handle personal data consistent with this Privacy Policy and according to our instructions. They cannot use the personal data we share for their own purposes and must delete or return the personal data once they’ve fulfilled our request.",

          "Partners. At times, Space may partner with third parties to provide services or other offerings. Space requires its partners to protect your personal data.",

          "Others. Space may share personal data with others at your direction or with your consent, such as when we share information with your carrier to activate your account. We may also disclose information about you if we determine that for purposes of national security, law enforcement, or other issues of public importance, disclosure is necessary or appropriate. We may also disclose information about you where there is a lawful basis for doing so, if we determine that disclosure is reasonably necessary to enforce our terms and conditions or to protect our operations or users, or in the event of a reorganization, merger, or sale.",
        ],
      },
      {
        type: "p",
        text: `Space does not sell your personal data including as “sale” is defined in the law. Space also does not “share” your personal data as that term is defined in the law.`,
      },
    ],
  },

  {
    title: "Protection of Personal Data at Space",
    content: [
      {
        type: "p",
        text: `At Space, we believe that great privacy rests on great security. We use administrative, technical, and physical safeguards to protect your personal data, taking into account the nature of the personal data and the processing, and the threats posed. We are constantly working to improve on these safeguards to help keep your personal data secure.`,
      },
    ],
  },

  {
    title: "Children and Personal Data",
    content: [
      {
        type: "p",
        text: `Space understands the importance of safeguarding the personal data of children, which we consider to be an individual under the age of 13 or the equivalent age as specified by law in your jurisdiction. That is why Space has implemented additional processes and protections to help keep children’s personal data safe.`,
      },
      {
        type: "p",
        text: `To access certain Space services, a child must have a child Space Account. A child Space Account may be created by the parent or, in the case of a Managed Space Account, by the child’s educational institution.`,
      },
      {
        type: "ul",
        items: [
          "Parents. To create a child account, parents must review the Family Privacy Disclosure for Children, which describes how Space handles children’s personal data. If they agree, the parent must provide Space with a verifiable parental consent.",

          "Educational Institutions. Educational institutions that participate in the Space School Manager Program may also create Space IDs for students, called “Managed Space IDs.” These schools are required to agree to the Managed Apple IDs for Students Disclosure which is included as Exhibit A to the Space School Manager Agreement.",
        ],
      },
      {
        type: "p",
        text: `If we learn that a child’s personal data was collected without appropriate authorization, it will be deleted as soon as possible.`,
      },
    ],
  },

  {
    title: "Cookies",
    content: [
      {
        type: "p",
        text: `Space’s websites, online services, interactive applications, and advertisements may use “cookies” and other technologies such as web beacons. These technologies help us to better understand user behavior including for security and fraud prevention purposes, tell us which parts of our websites people have visited, and facilitate and measure the effectiveness of advertisements and web searches.`,
      },

      {
        type: "ul",
        items: [
          "Communications Cookies. These cookies are used to enable network traffic to and from Space’s systems, including by helping us detect any errors.",

          "Strictly Necessary Cookies. These cookies are set as required to provide a specific feature or service that you have accessed or requested. For example, they allow us to display our websites in the proper format and language, to authenticate and verify your transactions, and to preserve the contents of your Bag when shopping online.",
          "Other Cookies. These cookies are used to understand how visitors interact with our websites and online services, including by helping us to assess the effectiveness of advertisements and web searches. Space also uses these cookies to remember choices you make while browsing, so we can provide you with a customized experience.",
        ],
      },
      {
        type: "p",
        text: `In addition to cookies, Space uses other technologies that help us achieve similar objectives.`,
      },
      {
        type: "p",
        text: `Space generally treats data we collect using these cookies and similar technologies as non-personal data. However, to the extent that Internet Protocol (IP) addresses or similar identifiers are considered personal data by local law, we also treat these identifiers as personal data in those regions. In addition, Space sometimes combines non-personal data collected from these technologies with other personal data Space holds. When we combine data in this way, we treat the combined data as personal data for purposes of this Privacy Policy.`,
      },
    ],
  },
  {
    title: "Our Companywide Commitment to Your Privacy",
    content: [
      {
        type: "p",
        text: `To make sure your personal data is secure, we communicate our privacy and security guidelines to Space employees and strictly enforce privacy safeguards within the company.`,
      },
    ],
  },
  {
    title: "Changes",
    content: [
      {
        type: "p",
        text: `Space may update this policy from time to time. Updates will be posted on this page.`,
      },
    ],
  },
];
