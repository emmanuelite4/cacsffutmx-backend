var User = require("../model/User");
var ExecutiveOffice = require("../model/ExecutiveOffice");
var ExecutivePersonnel = require("../model/ExecutivePersonel");
var Generation = require("../model/Generation");
var GenerationMember = require("../model/GenerationMember");
var Role = require("../model/Role");
var Unit = require("../model/Unit");
var UnitMember = require("../model/UnitMember");
var UnitMemberRole = require("../model/UnitMemberRole");
var Announcement = require("../model/Announcement");
// var Event = require("../model/Event");
var Event = require("../model/Event");
// var UnitMemberToRole = require("../model/UnitMemberToRole");

const Query = {
  getUsers: async () => {
    let response = await User.find({}).populate("executive").exec();
    return response;
  },
  getUsersByLevel: async (_, args) => {
    const user = await User.find({ level: args.level });
    return user;
  },
  getExecutiveOffice: async () =>
    await ExecutiveOffice.find({}).sort({ order: "asc" }).exec(),
  getExecutives: async (_, data) => {
    let response = await ExecutivePersonnel.find({ year: data.year })
      .populate("user")
      .populate({ path: "office", options: { sort: { order: "asc" } } })
      .sort({ office: "asc" })
      // .sort({ office: { order: "asc" } })
      .exec();
    return response;
  },

  getGeneration: async () => {
    try {
      let response = await Generation.find({})
        .sort({ current_level: "desc" })
        .exec();
      return response;
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  },

  getGenerationById: async (_, args) => {
    let { id } = args;
    try {
      let response = await (await Generation.findOne({ _id: id })).populate(
        "user"
      );
      console.log(response);

      return response;
    } catch (e) {
      throw e;
    }
  },

  getGenerationMember: async (_, args) => {
    try {
      let response = await GenerationMember.find({
        generation_id: args.generation_id,
      })
        .populate("user")
        .exec();
      return response;
    } catch (e) {
      throw new Error(e);
    }
  },
  getRoles: async (_, args) => await Role.find({}).exec(),
  getUnits: async (_, args) => await Unit.find({}).exec(),
  getUnit: async (_, args) => {
    try {
      let response = await Unit.findOne({ _id: args.id }).exec();
      return response;
    } catch (e) {
      return e.message;
    }
  },
  getUnitMember: async (_, args) => {
    try {
      let response = await UnitMember.find({ unit: args.unit_id })
        .populate("user")
        .populate("role")
        .populate("unit")
        .exec();
      // console.log(response);
      return response;
    } catch (e) {
      return e.message;
    }
  },
  getUnitMemberRoles: async (_, args) => {
    try {
      let response = await UnitMemberRole.find({
        unit: args.unit_id,
      }).exec();
      return response;
    } catch (e) {
      return e.message;
    }
  },
  getAnnouncements: async () => {
    try {
      console.log("Hii world");
      let response = await Announcement.find({}).exec();
      console.log(response);
      return response;
    } catch (e) {
      return e.message;
    }
  },
  getEvents: async () => {
    console.log("hello world");
    try {
      let response = await Event.find({}).exec();
      console.log(response);
      return response;
    } catch (e) {
      return e.message;
    }
  },
};

module.exports = Query;
