var User = require("../model/User");
var ExecutiveOffice = require("../model/ExecutiveOffice");
var ExecutivePersonnel = require("../model/ExecutivePersonel");
var Generation = require("../model/Generation");
var GenerationMember = require("../model/GenerationMember");
var Role = require("../model/Role");
var Unit = require("../model/Unit");
var UnitMember = require("../model/UnitMember");
var UnitMemberRole = require("../model/UnitMemberRole");
var UnitMemberToRole = require("../model/UnitMemberToRole");
var Announcement = require("../model/Announcement");
var Event = require("../model/Event");
// var UpcomingEvent = require("../model/UpcomingEvent");
var { ApolloError } = require("apollo-server-express");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const Session = require("../model/Session");

const SECRET_KEY = "secret!";
const Mutation = {
  addUser: async (_, args) => {
    try {
      const user = await User.findOne({ email: args.data.email });
      if (user) return new ApolloError("Email already Exit", 100);
      const password = await bcrypt.hash(args.data.password, 10);
      let response = await User.create({
        ...args.data,
        password: password,
      });
      const token = jwt.sign({
        id: response.id,
        email: response.email,
        SECRET_KEY,
      });
      console.log(token);
      return response;
    } catch (e) {
      console.log(e);
      return e.message;
    }
  },
  addSession: async (_, args) => {
    console.log(args);
    try {
      let response = await Session.create(args.data);
      return response;
    } catch (e) {
      return e.message;
    }
  },
  addExecutiveOffice: async (_, args) => {
    console.log(args);
    try {
      let response = await ExecutiveOffice.create(args.data);
      return response;
    } catch (e) {
      return e.message;
    }
  },
  deleteExecutiveOffice: async (_, args) => {
    console.log(args);
    try {
      let response = await ExecutiveOffice.findOneAndDelete({
        _id: args.id,
      });
      console.log(response);
      return response;
    } catch (e) {
      return e.message;
    }
  },
  updateExecutiveOffice: async (_, args) => {
    const id = { _id: args.data.id };
    try {
      let response = await ExecutiveOffice.findOneAndUpdate(id, {
        title: args.data.title,
        order: args.data.order,
      });
      console.log(response);
      return response;
    } catch (e) {
      return e.message;
    }
  },
  addExecutivePersonnel: async (_, args) => {
    try {
      let response = await ExecutivePersonnel.create(args.data);
      // .then(data => {
      // User.findOneAndUpdate(
      //   { _id: data.user },
      //   { executive: data.id }
      // ).then(data => {
      //   console.log(data);
      // });
      // ExecutiveOffices.findOneAndUpdate(
      //   { _id: data.office },
      //   { personnel: data.id }
      // );
      // });
      return "successful";
    } catch (e) {
      return e.message;
    }
  },
  deleteExecutivePersonnel: async (_, args) => {
    try {
      let response = await ExecutivePersonnel.findOneAndDelete({
        _id: args.id,
      });
      return response;
    } catch (e) {
      return e.message;
    }
  },
  addGeneration: async (_, args) => {
    console.log(args);
    try {
      let response = await Generation.create(args.data);

      return response;
    } catch (e) {
      return e.message;
    }
  },
  updateGeneration: async (_, args) => {
    const id = { _id: args.data.id };
    console.log(args);
    try {
      let response = await Generation.findOneAndUpdate(id, {
        name: args.data.name,
        current_level: args.data.current_level,
      });
      console.log(response);
      return response;
    } catch (e) {
      return e.message;
    }
  },
  // delete Mutation
  deleteGeneration: async (_, args) => {
    try {
      let response = await Generation.findByIdAndDelete({ _id: args.id });
      return response;
    } catch (e) {
      return e.message;
    }
  },
  addMemberToGeneration: async (_, args) => {
    try {
      let member = await GenerationMember.insertMany(args.data);
      return member;
    } catch (e) {
      return e.message;
    }
  },
  removeMemberToGeneration: async (_, args) => {
    try {
      let response = await GenerationMember.findOneAndDelete({
        _id: args.id,
      });
      return response;
    } catch (e) {
      return e.message;
    }
  },
  addRole: async (_, args) => {
    try {
      let response = await Role.create(args.data);
      return response;
    } catch (e) {
      return e.message;
    }
  },
  addUnit: async (_, args) => {
    try {
      let response = await Unit.create(args.data);
      return response;
    } catch (e) {
      return e.message;
    }
  },
  updateUnit: async (_, args) => {
    const id = { _id: args.data.id };
    console.log(args);
    try {
      let response = await Unit.findOneAndUpdate(id, {
        name: args.data.name,
      });
      return response;
    } catch (e) {
      return e.message;
    }
  },
  deleteUnit: async (_, args) => {
    try {
      let response = await Unit.findOneAndDelete({ _id: args.id });
      return response;
    } catch (e) {
      return e.message;
    }
  },
  addUnitMember: async (_, args) => {
    console.log(args);
    try {
      let response = await UnitMember.insertMany(args.data);
      console.log(response);
      return response;
    } catch (e) {
      return e.message;
    }
  },
  updateUnitMember: async (_, args) => {
    const id = { _id: args.data.id };
    console.log(args);
    try {
      let response = await UnitMember.findOneAndUpdate(id, {
        name: args.data.name,
      });
      return response;
    } catch (e) {
      return e.message;
    }
  },
  deleteUnitMember: async (_, args) => {
    try {
      let response = await UnitMember.findOneAndDelete({ _id: args.id });
      return response;
    } catch (e) {
      return e.message;
    }
  },
  addUnitMemberRole: async (_, args) => {
    console.log(args);
    try {
      let response = await UnitMemberRole.create(args.data);
      console.log(response);
      return response;
    } catch (e) {
      return e.message;
    }
  },
  updateUnitMemberRole: async (_, args) => {
    const id = { _id: args.data.id };
    console.log(args);
    try {
      let response = await UnitMemberRole.findOneAndUpdate(id, {
        name: args.data.name,
      });
      return response;
    } catch (e) {
      return e.message;
    }
  },
  deleteUnitMemberRole: async (_, args) => {
    try {
      let response = await UnitMemberRole.findOneAndDelete({
        _id: args.id,
      });
      return response;
    } catch (e) {
      return e.message;
    }
  },
  addUnitMemberToRole: async (_, args) => {
    try {
      let response = await UnitMemberToRole.create(args.data);
      return response;
    } catch (e) {
      return e.message;
    }
  },
  addAnnouncement: async (_, args) => {
    console.log(args);
    var obj = { ...args.data, created_at: new Date() };
    try {
      let response = await Announcement.create(obj);
      return response;
    } catch (e) {
      return e.message;
    }
  },
  updateAnnouncement: async (_, args) => {
    const id = { _id: args.data.id };
    console.log(args);
    try {
      let response = await Announcement.findOneAndUpdate(id, {
        title: args.data.title,
        content: args.data.content,
      });
      return response;
    } catch (e) {
      return e.message;
    }
  },
  deleteAnnouncement: async (_, args) => {
    try {
      let response = await Announcement.findOneAndDelete({
        _id: args.id,
      });
      return response;
    } catch (e) {
      return e.message;
    }
  },

  addEvent: async (_, args) => {
    console.log(args);
    var obj = { ...args.data, date: new Date() };
    console.log(obj);

    let response = await Event.create(obj);
    console.log(response);
    return response;
  },
};

module.exports = Mutation;
