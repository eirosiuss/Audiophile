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
}

const ProductSchema = new mongoose.Schema<Products>({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: {
    mobile: String,
    tablet: String,
    desktop: String,
  },
  category: { type: String, required: true },
  categoryImage: {
    mobile: String,
    tablet: String,
    desktop: String,
  },
  new: { type: Boolean, default: true },
  price: { type: Number, required: true },
  description: String,
  features: String,
  includes: [
    {
      quantity: Number,
      item: String,
    },
  ],
  gallery: {
    first: { mobile: String, tablet: String, desktop: String },
    second: { mobile: String, tablet: String, desktop: String },
    third: { mobile: String, tablet: String, desktop: String },
  },
  others: [
    {
      slug: String,
      name: String,
      image: { mobile: String, tablet: String, desktop: String },
    },
  ],
});

export default mongoose.models.Product ||
  mongoose.model<Products>("Product", ProductSchema);
