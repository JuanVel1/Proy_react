const mongoose = require("mongoose");
const subjectSchema = mongoose.Schema({
  department: {
    type: String,
    require: true,
  },
  academic_activity: {
    type: String,
    require: true,
  },
  activity_code: {
    type: Number,
    unique: true,
  },
  number_credits: {
    type: Number,
    unique: true,
  },
  piaa_version: {
    type: Number,
    require: true,
  },
  piaa_status: {
    type: Boolean,
    require: true,
  },
  file_number: {
    type: Object,
    require: true,
    month_file: {
      type: Number,
      require: true,
    },
    year_file: {
      type: Number,
      require: true,
    },
  },
  file_date: {
    type: Date,
    require: true,
  },
  theory_hours: {
    type: Number,
    require: true,
  },
  Offsite_hours: {
    type: Number,
    require: true,
  },
  theory_hours: {
    type: Number,
    require: true,
  },
  hoursnon_aftendance_reprovals: {
    type: Number,
    require: true,
  },
  last_chance: {
    type: Boolean,
    require: true,
  },
  duration_senester: {
    type: Number,
    require: true,
  },
  practical_hours: {
    type: Number,
    require: true,
  },
  presential_teacher_hours: {
    type: Number,
    require: true,
  },
  maximum_quotas: {
    type: Number,
    require: true,
  },
  passing_score: {
    type: Number,
    require: true,
  },
  weeks_duration: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Subject", subjectSchema);
