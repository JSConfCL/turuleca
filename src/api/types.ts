/* eslint-disable */
/* @ts-nocheck */
/* prettier-ignore */
/* This file is automatically generated. Please do not modify it manually. */
import type { GraphQLClient } from 'graphql-request';
import type { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: unknown; output: unknown; }
  DateTime: { input: unknown; output: unknown; }
};

/** Representation of a workEmail */
export type AllowedCurrency = {
  __typename?: 'AllowedCurrency';
  currency: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export enum CommnunityStatus {
  Active = 'active',
  Inactive = 'inactive'
}

/** Representation of a Community */
export type Community = {
  __typename?: 'Community';
  description: Maybe<Scalars['String']['output']>;
  events: Array<Event>;
  id: Scalars['String']['output'];
  name: Maybe<Scalars['String']['output']>;
  status: CommnunityStatus;
  users: Array<User>;
};

/** Representation of a workEmail */
export type Company = {
  __typename?: 'Company';
  description: Maybe<Scalars['String']['output']>;
  domain: Scalars['String']['output'];
  hasBeenUpdated: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  logo: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  salarySubmissions: Scalars['Int']['output'];
  /** Not available to users */
  status: Maybe<CompanyStatus>;
  website: Maybe<Scalars['String']['output']>;
};

export enum CompanyStatus {
  Active = 'active',
  Draft = 'draft',
  Inactive = 'inactive'
}

export type CreateCommunityInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type CreateCompanyInput = {
  description: InputMaybe<Scalars['String']['input']>;
  /** The email domain of the company (What we'll use to match the company to the user on account-creation) */
  domain: Scalars['String']['input'];
  logo: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<CompanyStatus>;
  website: InputMaybe<Scalars['String']['input']>;
};

export type CreateSalaryInput = {
  amount: Scalars['Int']['input'];
  companyId: Scalars['String']['input'];
  confirmationToken: Scalars['String']['input'];
  countryCode: Scalars['String']['input'];
  currencyId: Scalars['String']['input'];
  gender: Gender;
  genderOtherText: Scalars['String']['input'];
  typeOfEmployment: TypeOfEmployment;
  workMetodology: WorkMetodology;
  workRoleId: Scalars['String']['input'];
  yearsOfExperience: Scalars['Int']['input'];
};

export type EnqueueGoogleAlbumImportInput = {
  albumId: Scalars['String']['input'];
  sanityEventInstanceId: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

/** Representation of an Event (Events and Users, is what tickets are linked to) */
export type Event = {
  __typename?: 'Event';
  address: Maybe<Scalars['String']['output']>;
  community: Maybe<Community>;
  description: Maybe<Scalars['String']['output']>;
  endDateTime: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  latitude: Maybe<Scalars['String']['output']>;
  longitude: Maybe<Scalars['String']['output']>;
  maxAttendees: Maybe<Scalars['Int']['output']>;
  meetingURL: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  startDateTime: Scalars['DateTime']['output'];
  status: EventStatus;
  tags: Array<Tag>;
  tickets: Array<UserTicket>;
  users: Array<User>;
  visibility: EventVisibility;
};


/** Representation of an Event (Events and Users, is what tickets are linked to) */
export type EventTicketsArgs = {
  input: InputMaybe<EventsTicketsSearchInput>;
};

export type EventCreateInput = {
  address: InputMaybe<Scalars['String']['input']>;
  communityId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  endDateTime: InputMaybe<Scalars['DateTime']['input']>;
  latitude: InputMaybe<Scalars['String']['input']>;
  longitude: InputMaybe<Scalars['String']['input']>;
  maxAttendees: Scalars['Int']['input'];
  meetingURL: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  startDateTime: Scalars['DateTime']['input'];
  status: InputMaybe<EventStatus>;
  timeZone: InputMaybe<Scalars['String']['input']>;
  visibility: InputMaybe<EventVisibility>;
};

export enum EventStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export enum EventVisibility {
  Private = 'private',
  Public = 'public',
  Unlisted = 'unlisted'
}

export type EventsSearchInput = {
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  startDateTimeFrom: InputMaybe<Scalars['DateTime']['input']>;
  startDateTimeTo: InputMaybe<Scalars['DateTime']['input']>;
  status: InputMaybe<EventStatus>;
  visibility: InputMaybe<EventVisibility>;
};

export type EventsTicketsSearchInput = {
  approvalStatus: InputMaybe<TicketApprovalStatus>;
  id: InputMaybe<Scalars['String']['input']>;
  paymentStatus: InputMaybe<TicketPaymentStatus>;
  redemptionStatus: InputMaybe<TicketRedemptionStatus>;
  status: InputMaybe<TicketStatus>;
};

export enum Gender {
  Agender = 'agender',
  Female = 'female',
  Genderfluid = 'genderfluid',
  Genderqueer = 'genderqueer',
  Male = 'male',
  NonBinary = 'non_binary',
  Other = 'other',
  PreferNotToSay = 'prefer_not_to_say',
  TransgenderFemale = 'transgender_female',
  TransgenderMale = 'transgender_male',
  TwoSpirit = 'two_spirit'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Approve a ticket */
  approvalUserTicket: UserTicket;
  /** Cancel a ticket */
  cancelUserTicket: UserTicket;
  /** Create an community */
  createCommunity: Community;
  /** Create a company */
  createCompany: Company;
  /** Create an event */
  createEvent: Event;
  /** Create a salary */
  createSalary: Salary;
  /** Edit an community */
  editCommunity: Community;
  /** Edit a ticket */
  editTicket: Ticket;
  /** Enqueue images to import */
  enqueueGoogleAlbumImport: Scalars['Boolean']['output'];
  /** Redeem a ticket */
  redeemUserTicket: UserTicket;
  /** Kickoff the email validation flow. This flow will links an email to a user, create a company if it does not exist, and allows filling data for that email's position */
  startWorkEmailValidation: WorkEmail;
  /** Update a company */
  updateCompany: Company;
  /** Create a salary */
  updateSalary: Salary;
  /** Update a user */
  updateUser: User;
  /** Update a user role */
  updateUserRoleInCommunity: User;
  /** Validates work email for a user */
  validateWorkEmail: WorkEmail;
};


export type MutationApprovalUserTicketArgs = {
  userTicketId: Scalars['String']['input'];
};


export type MutationCancelUserTicketArgs = {
  userTicketId: Scalars['String']['input'];
};


export type MutationCreateCommunityArgs = {
  input: CreateCommunityInput;
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};


export type MutationCreateEventArgs = {
  input: EventCreateInput;
};


export type MutationCreateSalaryArgs = {
  input: CreateSalaryInput;
};


export type MutationEditCommunityArgs = {
  input: UpdateCommunityInput;
};


export type MutationEditTicketArgs = {
  input: TicketEditInput;
};


export type MutationEnqueueGoogleAlbumImportArgs = {
  input: EnqueueGoogleAlbumImportInput;
};


export type MutationRedeemUserTicketArgs = {
  userTicketId: Scalars['String']['input'];
};


export type MutationStartWorkEmailValidationArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
};


export type MutationUpdateSalaryArgs = {
  input: UpdateSalaryInput;
};


export type MutationUpdateUserArgs = {
  input: UserEditInput;
};


export type MutationUpdateUserRoleInCommunityArgs = {
  input: UpdateUserRoleInCommunityInput;
};


export type MutationValidateWorkEmailArgs = {
  confirmationToken: Scalars['String']['input'];
};

export type MyTicketsSearchInput = {
  approvalStatus: InputMaybe<TicketApprovalStatus>;
  eventId: InputMaybe<Scalars['String']['input']>;
  paymentStatus: InputMaybe<TicketPaymentStatus>;
  redemptionStatus: InputMaybe<TicketRedemptionStatus>;
  status: InputMaybe<TicketStatus>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a list of communities. Filter by name, id, or status */
  communities: Array<Community>;
  /** Get a community by id */
  community: Maybe<Community>;
  /** Get all available companies */
  companies: Array<Company>;
  /** Get all available companies */
  company: Company;
  /** Get an event by id */
  event: Maybe<Event>;
  /** Get a list of events. Filter by name, id, status or date */
  events: Array<Event>;
  /** Get the current user */
  me: User;
  /** Get a list of tickets for the current user */
  myTickets: Array<UserTicket>;
  status: Scalars['String']['output'];
  /** Get a list of tags */
  tags: Array<Tag>;
  /** Get a list of users */
  users: Array<User>;
  /** Get a workEmail and check if its validated for this user */
  workEmail: WorkEmail;
};


export type QueryCommunitiesArgs = {
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<CommnunityStatus>;
};


export type QueryCommunityArgs = {
  id: Scalars['String']['input'];
};


export type QueryCompaniesArgs = {
  input: InputMaybe<SearchCompaniesInput>;
};


export type QueryCompanyArgs = {
  companyId: Scalars['String']['input'];
};


export type QueryEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryEventsArgs = {
  input: InputMaybe<EventsSearchInput>;
};


export type QueryMyTicketsArgs = {
  input: InputMaybe<MyTicketsSearchInput>;
};


export type QueryStatusArgs = {
  name: InputMaybe<Scalars['String']['input']>;
};


export type QueryTagsArgs = {
  input: InputMaybe<TagSearchInput>;
};


export type QueryWorkEmailArgs = {
  email: Scalars['String']['input'];
};

/** Representation of a workEmail */
export type Salary = {
  __typename?: 'Salary';
  amount: Scalars['Int']['output'];
  company: Company;
  countryCode: Scalars['String']['output'];
  currency: AllowedCurrency;
  gender: Maybe<Gender>;
  genderOtherText: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  typeOfEmployment: TypeOfEmployment;
  workMetodology: WorkMetodology;
  workRole: WorkRole;
  yearsOfExperience: Scalars['Int']['output'];
};

/** Representation of a Sanity Asset */
export type SanityAssetRef = {
  __typename?: 'SanityAssetRef';
  assetId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  originalFilename: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type SearchCompaniesInput = {
  companyName: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  domain: InputMaybe<Scalars['String']['input']>;
  website: InputMaybe<Scalars['String']['input']>;
};

/** Representation of a tag. Tags can be associated to many things. An event, a community, etc. */
export type Tag = {
  __typename?: 'Tag';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
};

export type TagSearchInput = {
  description: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

/** Representation of a ticket */
export type Ticket = {
  __typename?: 'Ticket';
  currencyId: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  endDateTime: Maybe<Scalars['DateTime']['output']>;
  eventId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Maybe<Scalars['Int']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  requiresApproval: Maybe<Scalars['Boolean']['output']>;
  startDateTime: Scalars['DateTime']['output'];
  status: TicketTemplateStatus;
  visibility: TicketTemplateVisibility;
};

export enum TicketApprovalStatus {
  Approved = 'approved',
  Pending = 'pending'
}

export type TicketEditInput = {
  currencyId: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  endDateTime: InputMaybe<Scalars['DateTime']['input']>;
  eventId: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  price: InputMaybe<Scalars['Int']['input']>;
  quantity: InputMaybe<Scalars['Int']['input']>;
  requiresApproval: InputMaybe<Scalars['Boolean']['input']>;
  startDateTime: InputMaybe<Scalars['DateTime']['input']>;
  status: InputMaybe<TicketTemplateStatus>;
  ticketId: Scalars['String']['input'];
  visibility: InputMaybe<TicketTemplateVisibility>;
};

export enum TicketPaymentStatus {
  Paid = 'paid',
  Unpaid = 'unpaid'
}

export enum TicketRedemptionStatus {
  Pending = 'pending',
  Redeemed = 'redeemed'
}

export enum TicketStatus {
  Active = 'active',
  Cancelled = 'cancelled'
}

export enum TicketTemplateStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export enum TicketTemplateVisibility {
  Private = 'private',
  Public = 'public',
  Unlisted = 'unlisted'
}

export enum TypeOfEmployment {
  Freelance = 'freelance',
  FullTime = 'fullTime',
  PartTime = 'partTime'
}

export type UpdateCommunityInput = {
  communityId: Scalars['String']['input'];
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<CommnunityStatus>;
};

export type UpdateCompanyInput = {
  companyId: Scalars['String']['input'];
  description: InputMaybe<Scalars['String']['input']>;
  domain: InputMaybe<Scalars['String']['input']>;
  logo: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  website: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSalaryInput = {
  amount: Scalars['Int']['input'];
  companyId: Scalars['String']['input'];
  confirmationToken: Scalars['String']['input'];
  countryCode: Scalars['String']['input'];
  currencyId: Scalars['String']['input'];
  gender: Gender;
  genderOtherText: Scalars['String']['input'];
  salaryId: Scalars['String']['input'];
  typeOfEmployment: TypeOfEmployment;
  workMetodology: WorkMetodology;
  workRoleId: Scalars['String']['input'];
  yearsOfExperience: Scalars['Int']['input'];
};

/** Representation of a user */
export type User = {
  __typename?: 'User';
  bio: Maybe<Scalars['String']['output']>;
  communities: Array<Community>;
  id: Scalars['String']['output'];
  isSuperAdmin: Maybe<Scalars['Boolean']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

/** Representation of a User ticket */
export type UserTicket = {
  __typename?: 'UserTicket';
  approvalStatus: TicketApprovalStatus;
  id: Scalars['ID']['output'];
  paymentStatus: TicketPaymentStatus;
  redemptionStatus: TicketRedemptionStatus;
  status: TicketStatus;
};

/** Representation of a workEmail */
export type WorkEmail = {
  __typename?: 'WorkEmail';
  id: Scalars['String']['output'];
  isValidated: Scalars['Boolean']['output'];
};

export enum WorkMetodology {
  Hybrid = 'hybrid',
  Office = 'office',
  Remote = 'remote'
}

/** Representation of a workEmail */
export type WorkRole = {
  __typename?: 'WorkRole';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  seniority: Scalars['String']['output'];
};

export type UpdateUserRoleInCommunityInput = {
  communityId: Scalars['String']['input'];
  role: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserEditInput = {
  bio: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lastName: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
};



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;