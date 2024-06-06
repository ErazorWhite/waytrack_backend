import { model, Schema } from "mongoose";
import {
  engineType,
  formType,
  MAXDESC_L,
  MAXHEIGHT,
  MAXLENGH,
  MAXNAME_L,
  MAXRATING,
  MAXTANK,
  MAXWIDTH,
  MINHEIGHT,
  MINLENGH,
  MINNAME_L,
  MINPRICE,
  MINRATING,
  MINTANK,
  MINWIDTH,
  transmissionType,
} from "../constants/customValues";

const detailsFields = {
  airConditioner: { type: Boolean, default: false },
  bathroom: { type: Boolean, default: false },
  kitchen: { type: Boolean, default: false },
  beds: { type: Number, default: 0 },
  tv: { type: Number, default: 0 },
  cd: { type: Boolean, default: false },
  radio: { type: Boolean, default: false },
  shower: { type: Boolean, default: false },
  toilet: { type: Boolean, default: false },
  freezer: { type: Boolean, default: false },
  hob: { type: Number, default: 0 },
  microwave: { type: Boolean, default: false },
  gas: { type: Number, default: 0 },
  water: { type: Number, default: 0 },
};

interface CamperDetails {
  airConditioner: boolean;
  bathroom: boolean;
  kitchen: boolean;
  beds: number;
  tv: number;
  cd: boolean;
  radio: boolean;
  shower: boolean;
  toilet: boolean;
  freezer: boolean;
  hob: number;
  microwave: boolean;
  gas: number;
  water: number;
}

interface ICamper {
  name: string;
  price: number;
  rating?: number;
  location?: string;
  adults?: number;
  children?: number;
  engine?: engineType;
  transmission?: transmissionType;
  form?: formType;
  length: number;
  width: number;
  height: number;
  tank: number;
  consumption: string;
  description: string;
  details: CamperDetails;
  gallery: string[];
}

const detailsSchema = new Schema(detailsFields, { _id: false });

const camperSchema = new Schema<ICamper>(
  {
    name: {
      type: String,
      minlength: [
        MINNAME_L,
        `Name should have at least ${MINNAME_L} characters`,
      ],
      maxlength: [
        MAXNAME_L,
        `Name should have no more than ${MAXNAME_L} characters`,
      ],
      required: [true, "Set name for camper car"],
    },
    price: {
      type: Number,
      min: [MINPRICE, `Price cant be below ${MINPRICE}`],
      required: [true, "Set price for camper car"],
    },
    rating: {
      type: Number,
      min: [MINRATING, `Rating should be above ${MINRATING}`],
      max: [MAXRATING, `Rating can't be below ${MAXRATING}`],
    },
    location: {
      type: String,
    },
    adults: {
      type: Number,
    },
    children: {
      type: Number,
    },
    engine: {
      type: String,
      enum: Object.values(engineType),
    },
    transmission: {
      type: String,
      enum: Object.values(transmissionType),
    },
    form: {
      type: String,
      enum: Object.values(formType),
    },
    length: {
      type: Number,
      min: [MINLENGH, `Camper can't be less than ${MINLENGH} meter in length`],
      max: [MAXLENGH, `Camper can't be more than ${MAXLENGH} meters in length`],
    },
    width: {
      type: Number,
      min: [MINWIDTH, `Camper can't be less than ${MINWIDTH} meter in width`],
      max: [MAXWIDTH, `Camper can't be more than ${MAXWIDTH} meters in width`],
    },
    height: {
      type: Number,
      min: [
        MINHEIGHT,
        `Camper can't be less than ${MINHEIGHT} meter in height`,
      ],
      max: [
        MAXHEIGHT,
        `Camper can't be more than ${MAXHEIGHT} meters in height`,
      ],
    },
    tank: {
      type: Number,
      min: [MINTANK, `Camper can't have less than ${MINTANK}l tank`],
      max: [MAXTANK, `Camper can't have more than ${MAXTANK}l tank`],
    },
    consumption: {
      type: String,
    },
    description: {
      type: String,
      maxlength: [
        MAXDESC_L,
        `Camper can't have decription longer than ${MAXDESC_L}`,
      ],
    },
    details: {
      type: detailsSchema,
    },
    gallery: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Camper = model<ICamper>("Campers", camperSchema);
