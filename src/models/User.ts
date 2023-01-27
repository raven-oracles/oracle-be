import mongoose, { Document } from "mongoose";

export interface IUser {
  ownerAddress: string;
  oracleAddress?: string;
  masterAddress?: string;
  clientAddress?: string;
  userAddress?: string;
  apiKey: string;
  oracleKey: string;
}

export type TUserDocument = Document & IUser;

const IUserSchema = new mongoose.Schema(
  {
    ownerAddress: { type: String, required: true },
    oracleAddress: { type: String, required: false },
    masterAddress: { type: String, required: false },
    clientAddress: { type: String, required: false },
    userAddress: { type: String, required: false },
    apiKey: { type: String, required: true },
    oracleKey: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = mongoose.model<TUserDocument>("User", IUserSchema);
