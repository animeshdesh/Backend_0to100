import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hospitalAdmitted: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },
    docterAlloted: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Docter",
      required: true,
    },
    durationInDays: {
      type: Number,
      default: 0,
      required: true,
    },
    dischargeStatus: {
      type: Boolean,
      default: false,
      required: true,
    },
    billStatus: {
      type: String,
      enum: ["PAID", "UNPAID", "PENDING"],
      default: "UNPAID",
      required: true,
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
