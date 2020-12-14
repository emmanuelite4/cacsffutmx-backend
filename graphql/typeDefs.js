var { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: String
    name: String
    email: String
    password: String
    token: String
    phone_number: String
    department: String
    gender: String
    executive: ExecutivePersonnel
  }
  type Session {
    theme: String
    vision: String
    mission: String
    year: Int
  }
  type ExecutiveOffice {
    id: String
    title: String
    order: Int
    personnel: String
  }
  type ExecutivePersonnel {
    id: String
    year: Int
    user: User
    office: ExecutiveOffice
  }
  type AddExecutivePersonnel {
    year: Int
    user: String
    office: String
  }
  type Generation {
    id: String
    name: String
    current_level: Int
    description: String
    members: [User]
  }
  type GenerationMember {
    id: String
    user: User
    generation_id: String
    # users: User
  }
  type AddGenerationMember {
    id: String
    user: String
    generation_id: String
  }
  type Role {
    id: String
    name: String
  }
  type Unit {
    id: String
    name: String
  }
  type UnitMember {
    id: String
    role: UnitMemeberToRole
    user: User
    unit: Unit
  }
  type UnitMemberRole {
    id: String
    name: String
    user: User
    unit: Unit
  }
  type UnitMemeberToRole {
    id: String
    role: UnitMemberRole
    user: UnitMember
    unit: Unit
  }
  type Announcement {
    id: String
    title: String
    content: String
    created_at: String
  }
  scalar IsoDate
  type Event {
    id: String
    name: String
    description: String
    created_at: IsoDate
    date: IsoDate
  }

  type UpcomingEvent {
    id: String
    name: String
  }
  input insert_user {
    name: String
    email: String
    password: String
    phone_number: String
    gender: String
    department: String
  }
  input insert_session {
    theme: String
    vision: String
    mission: String
    year: Int
  }
  input Personnel {
    user: String
    office: String
    year: Int
  }
  input executive_office_insert {
    id: String
    title: String
    order: Int
  }
  input generation_insert {
    id: String
    name: String
    current_level: Int
    description: String
  }
  input member_to_generation_insert {
    generation_id: String!
    user: String!
  }
  input role_insert {
    id: String
    name: String
  }
  input unit_insert {
    id: String
    name: String
  }
  input unit_member_insert {
    role: String
    user: String
    unit: String
  }
  input unit_member_role_insert {
    id: String
    name: String
    unit: String
  }
  input unit_member_to_role_insert {
    id: String
    role: String
    user: String
    unit: String
  }
  input announcement_insert {
    id: String
    title: String
    content: String
    created_at: String
  }
  input event_insert {
    id: String
    name: String
    description: String
    date: IsoDate
    created_at: IsoDate
  }

  type Query {
    getUsers: [User]
    getUsersByLevel(level: Int): [User]
    getUser(email: String, password: String): User
    getExecutiveOffice: [ExecutiveOffice]
    getExecutives(year: Int): [ExecutivePersonnel]
    getGeneration: [Generation]
    getGenerationById(id: String): Generation
    getGenerationMember(generation_id: String!): [GenerationMember]
    getRoles: [Role]
    getUnits: [Unit]
    getUnit(id: String): Unit
    getUnitMember(unit_id: String): [UnitMember]
    getUnitMemberRoles(unit_id: String): [UnitMemberRole]
    getAnnouncements: [Announcement]
    getEvents: [Event]
  }
  type Mutation {
    addUser(data: insert_user!): User
    addSession(data: insert_session!): Session
    addExecutiveOffice(data: executive_office_insert!): ExecutiveOffice
    updateExecutiveOffice(data: executive_office_insert!): ExecutiveOffice
    deleteExecutiveOffice(id: String): ExecutiveOffice
    addExecutivePersonnel(data: Personnel!): AddExecutivePersonnel
    deleteExecutivePersonnel(id: String): ExecutivePersonnel
    addGeneration(data: generation_insert!): Generation
    updateGeneration(data: generation_insert!): Generation
    deleteGeneration(id: String): Generation
    addMemberToGeneration(
      data: [member_to_generation_insert!]!
    ): AddGenerationMember
    removeMemberToGeneration(id: String): AddGenerationMember
    addRole(data: role_insert): Role
    addUnit(data: unit_insert): Unit
    updateUnit(data: unit_insert): Unit
    deleteUnit(id: String): Unit
    addUnitMember(data: [unit_member_insert]): UnitMember
    updateUnitMember(data: unit_member_insert): UnitMember
    deleteUnitMember(id: String): UnitMember
    addUnitMemberRole(data: unit_member_role_insert): UnitMemberRole
    updateUnitMemberRole(data: unit_member_role_insert): UnitMemberRole
    deleteUnitMemberRole(id: String): Unit
    addUnitMemberToRole(data: unit_member_to_role_insert): UnitMemeberToRole
    addAnnouncement(title: String): Announcement
    updateAnnouncement(data: announcement_insert): Announcement
    deleteAnnouncement(id: String): Announcement
    addEvent(data: event_insert): Event
  }
`;

module.exports = typeDefs;
