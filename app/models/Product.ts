import mongoose from "mongoose";

export interface Products extends mongoose.Document {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others: {
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new mongoose.Schema<Products>(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: {
      mobile: { type: String },
      tablet: { type: String },
      desktop: { type: String },
    },
    category: { type: String, required: true },
    categoryImage: {
      mobile: { type: String },
      tablet: { type: String },
      desktop: { type: String },
    },
    new: { type: Boolean, default: true },
    price: { type: Number, required: true },
    description: { type: String },
    features: { type: String },
    includes: [
      {
        quantity: { type: Number },
        item: { type: String },
      },
    ],
    gallery: {
      first: {
        mobile: { type: String },
        tablet: { type: String },
        desktop: { type: String },
      },
      second: {
        mobile: { type: String },
        tablet: { type: String },
        desktop: { type: String },
      },
      third: {
        mobile: { type: String },
        tablet: { type: String },
        desktop: { type: String },
      },
    },
    others: [
      {
        slug: { type: String },
        name: { type: String },
        image: {
          mobile: { type: String },
          tablet: { type: String },
          desktop: { type: String },
        },
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.models.Product ||
  mongoose.model<Products>("Product", ProductSchema);
